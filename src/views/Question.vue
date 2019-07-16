<template>
<div v-if="question">
  <div class="section_questions_top">
      <div class="container">
        <breadcrumbs
        :wayPages="[
          {
            name: 'Ваши вопросы',
            route: '/questions',
          },
          {
            name: question.category,
            route: '/questions/category/5',
          }
        ]"
        :currentPage="question.question.title"
        :idCat="question.question.id"
        :question="true"
        />
      </div>
    </div>
    <userPaysQuestion v-if="creator"/>
    <div class="section_questions user one_question">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10">
            <div class="block_question slideInUp wow" data-wow-iteration="1">
              <div class="name_question">{{question.question.title}}</div>
              <div class="price_question">{{question.question.price}} ₽</div>
              <div class="category_question">{{question.category}} / </div>
              <div class="data_question">{{dates}}</div>
                <div class="user_question" v-if="question.question.anonim">Анонимно</div>
                <div class="user_question" v-else>{{question.client.name}}</div>
                <p class="all_questions_user" v-if="question.answer === null">всего <span>0</span> ответа</p>
                <p class="all_questions_user" v-else>всего <span>{{question.answer.length}}</span> ответа</p>
              <expertAnswer 
                v-if="expert"
                :id="question.question.id"
                @updatequestion="getQuestion()"
              />
              <div class="answers" v-if="question.answer && question.answer.length">
                <answerItem
                  v-for="(item, index) in question.answer"
                  :key="index"
                  :name="item.expert.name"
                  :avatar="item.expert.avatar"
                  :date="item.answer.create_at"
                  :answer="item.answer.description"
                  :rating="item.expert.rating"
                  :status="item.answer.score"
                  :questionid="question.question.client_id"
                  :answers="item"
                  @updatequestion="getQuestion()"
                />
              </div>
            </div>
          </div>
          <userControlQuestion 
            v-if="creator"
            :questionId="question.question.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userPaysQuestion from '@/components/Questions/UserPaysQuestion'
  import userControlQuestion from '@/components/Questions/UserControlQuestion'
  import expertAnswer from '@/components/Questions/ExpertAnswer'
  import answerItem from '@/components/Questions/AnswerItem'
	export default {
    name: "Question",
    components: {
      userPaysQuestion,
      userControlQuestion,
      expertAnswer,
      answerItem,
    },
    props: {},
    data() {
			return {
        login: null,
        password: null,
        question:null,
        dates: null
      }
    },
    created() {
      this.getQuestion()
    },
    mounted() {
      new WOW().init();
     },
		methods: {
      getQuestion(){
        this.$http({
          method: 'GET',
          url: 'question/question/views?id=' + this.$route.params.id,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
              Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.question = response.data
          this.getDate(response.data.question.create_at)
        })
      },
      getDate(items){
        let item = items.split(' ')
        let mydate = item[0].split('-')

        const months = {
          '01': 'Января',
          '02': 'Февраля',
          '03': 'Марта',
          '04': 'Апреля',
          '05': 'Мая',
          '06': 'Июня',
          '07': 'Июля',
          '08': 'Августа',
          '09': 'Сентября',
          '10': 'Октября',
          '11': 'Ноября',
          '12': 'Декабря',
        };

        let year = mydate[0]
        let month = months[mydate[1]]
        let day = mydate[2]



        this.dates = day +" "+ month +" "+ year
      }
		},
		computed: {
      expert(){
        return this.$store.getters.USERINFO.expert
      },
      creator(){
        return this.$store.getters.USERINFO.id === this.question.client.id
      }
    },
	}
</script>

<style scoped>

</style>