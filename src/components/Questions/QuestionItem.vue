<template>
  <div class="col-md-6">
    <div class="block_question slideInUp wow" data-wow-iteration="1">
      <div class="name_question">{{title}}</div>
      <div class="price_question">{{price}} ₽</div>
      <div class="category_question">{{category}}</div>
      <div class="status_question" v-if="status">Решено</div>
        <div class="wrap_link_question">
          <router-link :to="{ path: `/questions/${id}` }" class="link_gray">Читать полностью</router-link>
        </div>
      <div class="bottom_question clearfix">
        <div class="data_question">{{dates}}</div>
        <div class="user_question">{{person}}</div>
          <router-link :to="{ path: `/questions/${id}` }" class="all_questions_user">всего <span>{{countAnswer}}</span> ответа</router-link>
        </div>
      </div>  
  </div>
</template>

<script>
  export default {
    name: "QuestionItem",
    components: {},
    props: {
      id:{
        type: Number,
        default: 1
      },
      category:{
        type: String,
        default: 'category'
      },
      countAnswer:{ 
        type: Number,
        default: 0
      },
      date:{
        type: String,
        default: '01 Января 2019'
      },
      person:{
        type: String,
        default: 'Анонимно'
      },
      price:{
        type: Number,
        default: 0
      },
      status:{
        type: Boolean,
        default: false
      },
      title:{
        type: String,
        default: 'title1'
      }
    },
    data() {
      return {
        active: false,
        dates: null
      }
    },
    created() {},
    mounted() {
      this.getDate()
    },
    methods: {
      getDate(){
        let item = this.date.split(' ')
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
    computed: {},
    }
</script>

<style scoped>
    
</style>