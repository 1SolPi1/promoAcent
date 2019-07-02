<template>
<div v-if="question">
  <div class="section_questions_top">
      <div class="container">
        <div class="your_question">Ваши вопросы — {{question.category}} — Дети и подростки — <span>{{question.question.title}}...</span></div>
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
              <div class="category_question">{{question.category}} / Дети и подростки</div>
              <div class="data_question">{{dates}}</div>
                <div class="user_question" v-if="question.question.anonim">Анонимно</div>
                <div class="user_question" v-else>{{question.client.name}}</div>
                <p class="all_questions_user">всего <span>2</span> ответа</p>
              <expertAnswer 
                v-if="expert"
                :id="question.question.id"
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
                />
              </div>
            </div>
          </div>
        </div>
        <userControlQuestion v-if="creator"/>
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
      answerItem
    },
    props: {},
    data() {
			return {
        login: null,
        password: null,
        creator: false,
        question:null,
        dates: null
      }
    },
    created() {
      this.getQuestion()
    },
    mounted() {
      
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
      }
    },
	}
</script>

<style scoped>

</style>