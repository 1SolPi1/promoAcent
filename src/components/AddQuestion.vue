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
                :active="item.id == selectCategory.id ? true:false"
                @changeitem="changeCategory(item.id)"
              />  
            </slick>
          </ul>
        </div>
      </div>
    </div>
   <topFieldCategory
    :category="categories"
    :childcategory="selectChildCategory"
    :selectedCategory="selectCategory"
    v-if="selectCategory"
    @selectcategory="changeCategory"
    @selectsubcategory="changeSubCategory"
   />
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
            <p>Условия размещения <router-link href="javascript:void(0)" to="/tariggquestions">Ознакомится с тарифами размещения</router-link></p>
              <div class="sorting_questions">
                <div class="item_sorting">
                  <input type="radio" name="radio" value="0" class="radio" id="radio1" checked/>
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
import topFieldCategory from '@/components/AddQuestion/TopFieldCategory'
export default {
  name: "AddQuestion",
  components: {Slick, ItemCategory, topFieldCategory},
  props: {},
  data() {
    return {
        category: null,
        childCategory: null,
        selectCategory: null,
        selectSubCategory: {id: null},
        selectChildCategory: null,
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
  },
  mounted() {
    // eslint-disable-next-line
    $('select').styler();
    const vm = this
    setTimeout(function() {  
          vm.getSelectCategory(1)
    }, 500)
  },
  methods: {
    changeCategory(item){
      this.selectCategory = this.categories.find(map => map.id == item)
      setTimeout(()=>{  
        this.getChildCategory(this.selectCategory);
        this.selectSubCategory = {id: null};
      }, 300)
    },
    changeSubCategory(item){
      let cat = this.selectChildCategory.find(map => map.id == item)
      cat === undefined ? this.selectSubCategory = {id: null} : this.selectSubCategory = cat
    },
    getSelectCategory(id){
      this.selectCategory = this.categories.find(item => item.id === id)
      this.getChildCategory(this.selectCategory)
    },
    getChildCategory(arr){
      this.selectChildCategory = this.childCategories.filter(map => map.parent_id === arr.id)
    },
    addQuestion(){
      if (!this.title) {
        this.$toast.error({
            title:'Ошибка',
            message: ' Укажите вопрос '
          })
      }else{
        let anonimus = 0;
      this.anonim ? anonimus = 1 : anonimus = 0 ;
      let params = new URLSearchParams();
        params.append('title', this.title);
        params.append('description', this.description);
        params.append('price', this.price);
        params.append('anonim', anonimus);
        params.append('category_id', this.selectCategory.id);
        if (this.selectSubCategory.id !== null) {
          params.append('sub_category_id', this.selectSubCategory.id);
        }

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
        this.getSelectCategory(1)
        if(response.status === 200){
          this.$toast.success({
            title:'Успешно',
            message:'Вопрос создан'
          })
          }
      })
      .catch(erorr=>{
         this.$toast.error({
            title:'Ошибка',
            message: error.response.data.error
          })
      })
      }
    },
    addPrice(price){
      this.price = price
    }
  },
  computed: {
    categoryItem(){
      return this.$store.getters.CATEGORYITEM
    },
    categories(){
      return this.$store.getters.CATEGORI
    },
    childCategories(){
      return this.$store.getters.CHILDCATEGORI
    }
  },
}
</script>

<style scoped>
    
</style>