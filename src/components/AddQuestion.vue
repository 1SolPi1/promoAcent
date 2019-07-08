<template>
<div>
  <div class="section_category_top">
      <div class="container">
        <div class="wrap_category">
          <ul class="list_category">
          <slick
              ref="slick"
              :options="slickOptions"
            >
              <ItemCategory
                v-for="item in categoryItem"
                :key="item.id"
                :name="item.name"
                :image="item.image"
                :clases="item.class"
                :active="item.id === selectCategory.id ? true:false"
                @changeitem="changeCategory(item)"
              />  
            </slick>
          </ul>
        </div>
      </div>
    </div>

    <div class="section_main_experts question_form">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-5 col-lg-6">
            <form>
              <div class="frm_question">
                <p>Мой вопрос <span>*</span></p>
                <input type="text" name="" placeholder="напишите вопрос" v-model="title">
              </div>
              <div class="frm_question">
                <p>Необязательное уточнение</p>
                <textarea placeholder="опишите вопрос" v-model="description"></textarea>
              </div>
              <div class="item_sorting">
                  <input type="checkbox" name="checkbox" class="checkbox" id="checkbox" v-model="anonim">
                  <label for="checkbox"><span>Задать вопрос анонимно</span></label>
                  <p>все вопросы публикуются на нашем сайте в открытом доступе</p>
                </div>
              <button @click.prevent="addQuestion()">Опубликовать</button>
            </form>
          </div>
          <div class="col-xs-12 col-md-7 col-lg-6 uslovia">
            <p>Условия размещения <a href="#">Ознакомится с тарифами размещения</a></p>
              <div class="sorting_questions">
                <div class="item_sorting">
                  <input type="radio" name="radio" value="0" class="radio" id="radio1" />
                  <label for="radio1" @click="addPrice(0)">бесплатно</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="100" class="radio" id="radio2" />
                  <label for="radio2" @click="addPrice(100)">100₽</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="500" class="radio" id="radio3" />
                  <label for="radio3" @click="addPrice(500)">500₽</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="1000" class="radio" id="radio4" />
                  <label for="radio4" @click="addPrice(1000)">1000₽</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="2000" class="radio" id="radio5" />
                  <label for="radio5" @click="addPrice(2000)">2000₽</label>
                </div>
              </div>
              <p>Выберите платный вариант размещения, для гарантированного получения ответа от самых лучших специалистов</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Slick from 'vue-slick';
import ItemCategory from '@/components/Partner/ItemCategory'
export default {
  name: "AddQuestion",
  components: {Slick, ItemCategory},
  props: {},
  data() {
    return {
        selectCategory: null,
        slickOptions: {
        arrows: true,
        dots: false,
        slidesToShow: 6,
        variableWidth: false,
        slidesToScroll: 1,
    responsive: [
      {
            breakpoint: 1200,
            settings: {
        slidesToShow: 4,
            }
          },
          {
      breakpoint: 992,
            settings: {
          slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
        slidesToShow: 1,
            }
          }
        ]
      },
      title: null,
      description: null,
      price: 0,
      anonim: false
    }
  },
  created() {
    this.title = this.$store.getters.ADDQUESTION;
    this.selectCategory = this.categoryItem[0]
  },
  mounted() {
    // eslint-disable-next-line
    $('select').styler();
  },
  methods: {
    changeCategory(item){
      this.selectCategory = item
    },
    addQuestion(){
      let anonimus = 0;
      this.anonim ? anonimus = 1 : 0 ;
      let params = new URLSearchParams();
        params.append('title', this.title);
        params.append('description', this.description);
        params.append('price', this.price);
        params.append('anonim', anonimus);
        params.append('category_id', this.selectCategory.id);

      this.$http({
          method: 'POST',
          url: 'question/question/add',
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
      .then(response=>{
        this.$store.dispatch('clearAddQuestion');
        this.title = null;
        this.description = null;
        this.price =  0;
        this.anonim = false;
        this.selectCategory = this.categoryItem[0];
        if(response.status === 200){
          this.$toast.success({
            title:'Успешно',
            message:'Вопрос создан'
          })
          }
      })
    },
    addPrice(price){
      this.price = price
    }
  },
  computed: {
    categoryItem(){
      return this.$store.getters.CATEGORYITEM
    }
  },
}
</script>

<style scoped>
    
</style>