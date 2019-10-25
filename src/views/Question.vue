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
            route: '/questions?category=5',
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
              <div class="name_question" v-if="!changeQuest">{{question.question.title}}</div>
              <input class="name_question" style="display: block;" v-model="question.question.title" v-else/>
              <div class="price_question">{{question.question.price}} ₽</div>
              <div class="category_question">{{question.parent_category}} /{{question.sub_category}} </div>
              <div class="data_question">{{dates}}</div>
                <div class="user_question" v-if="question.question.anonim">Анонимно</div>
                <div class="user_question" v-else>{{question.client.name}}</div>
                <p class="all_questions_user" v-if="question.answer === null">всего <span>0</span> ответа</p>
                <p class="all_questions_user" v-else>всего <span>{{question.answer.length}}</span> ответа</p>
              <expertAnswer 
                v-if="expert && token"
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
            :changeQuestion="changeQuest"
            @changeQuest="changeQuest = true"
            @saveQuest="refactorQuest()"
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
        dates: null,
        changeQuest: false
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
          url: 'question/question/views?id=' + this.$route.params.question,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
              Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.question = response.data
          this.getDate(response.data.question.create_at)
        })
        .catch(error =>{
          this.$router.push('/erorr/404')
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
      },
      refactorQuest(){
          let params = new URLSearchParams();
          params.append('title', this.question.question.title);

          this.$http({
              method: 'POST',
              data: params,
              url: 'question/question/edit?id=' + this.question.question.id,
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  Authorization: "Bearer " + localStorage.getItem('token')
              }
          })
              .then(response=>{
                  if (response.status === 200) {
                      this.$toast.success({
                          title:'Успешно',
                          message: ' Вопрос изменен '
                      })
                      this.getQuestion();
                      this.changeQuest = false
                  }
              })
              .catch(error=>{
                  this.$toast.error({
                      title:'Ошибка',
                      message: error.response.data.message
                  })
              })
      }
		},
		computed: {
      expert(){
        return this.$store.getters.USERINFO.expert && this.$store.getters.EXPERT.is_confirmed
      },
      creator(){
        return this.$store.getters.CLIENT.id === this.question.client.id
      },
      token(){
      return localStorage.getItem('token')
    },
    },
	}
</script>

<style scoped>

</style>