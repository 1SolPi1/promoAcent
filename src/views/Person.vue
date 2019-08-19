<template>
	<div>
   <div class="section_main_expert">
      <div class="container">
        <breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Клиент"
        />
        <div class="item_main_expert">
          <div class="content_expert">
            <div class="image_expert expert_image_big">
              <img v-if="person.avatar === null" src="@/assets/img/svg/avatar.svg" alt="alt">
              <img v-esle :src="domen + person.avatar" alt="alt">
            </div>
            <div class="head_expert_item">
              <div class="name_expert_big">{{person.name}}</div>
              <div class="experience_expert">Зарегистрирован: {{registerDate}}</div>
              <div class="experience_expert">Последний раз был в сети: {{lastLogin}}</div>
              <div class="experience_expert status_expert">Статус: Стандарт
                    <img 
                      src="@/assets/img/svg/information.svg" 
                      alt="alt"
                      style="cursor: pointer;"
                      @mouseover="showModal = true"
                      @mouseleave="showModal = false"
                      class="info"
                    >
              </div>
              <bonusPerson
                v-if="showModal"
              />
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="section_nav_expert">
      <div class="container">
        <div class="head_nav_expert">
         <div class="experience_expert question_item">Вопросы пользователя ({{allQuestions.length}})</div>
        </div>
      </div>
    </div>
    <div class="section_questions">
      <div class="container">
        <div class="head_questions">
          <div class="sorting_questions">
            <span class="title_sorting">Сортировать:</span>
            <div class="item_sorting">
              <input type="radio" checked name="radio" value="1" class="radio" id="radio1" />
              <label for="radio1"><img src="@/assets/img/sort1.png" alt="alt">последние</label>
            </div>
            <div class="item_sorting">
              <input type="radio" name="radio" value="1" class="radio" id="radio2" />
              <label for="radio2"><img src="@/assets/img/sort2.png" alt="alt">платные</label>
            </div>
            <div class="item_sorting">
              <input type="radio" name="radio" value="1" class="radio" id="radio3" />
              <label for="radio3"><img src="@/assets/img/sort3.png" alt="alt">vip</label>
            </div>
            <div class="item_sorting">
              <input type="radio" name="radio" value="1" class="radio" id="radio4" />
              <label for="radio4"><img src="@/assets/img/sort4.png" alt="alt">решены</label>
            </div>
          </div>
        </div>
        <div class="row">
          <questionItem
            v-for="(item, index) in allQuestions"
            :key="index"
            :category="item.parent_category"
            :subcategory="item.sub_category"
            :countAnswer="item.answer_count"
            :date="item.question.create_at"
            :person="item.question.anonim? ' Анонимно ': item.user_name"
            :price="item.question.price"
            :status="item.question.status"
            :title="item.question.title"
            :id="item.question.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dates from '@/scripts/getDate.js';
  import bonusPerson from '@/components/BonusModal'
	export default {
    name: "Person",
    components: {
      bonusPerson
    },
    props: {},
    data() {
			return {
        showModal: false,
        allQuestions:[],
        person: null,
        lastLogin: null,
        registerDate: null
      }
    },
    created() {
    },
    mounted() {
      this.getUser()
      this.getQuestion()
     },
		methods: {
      getUser(){
        this.$http({
          method: 'GET',
          url: 'user/profile/short-show?id=' + this.$route.query.id,
        })
        .then(response =>{
          this.person = response.data
          this.lastLogin = dates(response.data.last_login_at * 1000)
          this.registerDate = dates(response.data.created_at * 1000)
        })
      },
      getQuestion(){
        let params = new URLSearchParams();
        params.append('client_id', this.$route.query.id);

        this.$http({
          method: 'POST',
          data: params,
          url: 'question/question/find',
        })
        .then(response =>{
         this.allQuestions = response.data[0]
        })
      }
		},
		computed: {
      domen(){
      return this.$store.getters.DOMEN
      }
    },
	}
</script>

<style scoped>
.head_expert_item{
  padding-right: 0;
}

.status_expert{
  margin-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.status_expert b{
  font-size: 16px;
  color: #4d2ed1;
  margin-right: 5px;
}

.question_item{
font-family: OpenSans-Semibold;
font-size: 18px;
color: #2F2F32;
letter-spacing: 0;
line-height: 45px;
}

.info{
    width: 14px;
    height: 14px;
    margin-left: 10px;
}
</style>