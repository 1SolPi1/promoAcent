<template>
  <div class="col-md-6">
    <div class="block_question slideInUp wow" data-wow-iteration="1" @click="openQuestion()">
      <div class="name_question">{{title}}</div>
      <div class="price_question">{{price}} ₽</div>
      <div class="category_question">{{category}}</div>
      <div class="status_question" v-if="status !== 0">Решено</div>
        <div class="wrap_link_question">
          <a href="javascript:void(0)" class="link_gray" @click="openQuestion()">Читать полностью</a>
        </div>
      <div class="bottom_question clearfix">
        <div class="data_question">{{getDate()}}</div>
        <div class="user_question">{{person}}</div>
          <a href="javascript:void(0)" @click="openQuestion()" class="all_questions_user">всего <span>{{countAnswer}}</span> ответа</a>
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
        type: Number,
        default: 0
      },
      title:{
        type: String,
        default: 'title1'
      },
      question:{
        type: Boolean,
        default: false
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
      if(!this.question){
        new WOW().init();
      }
    },
    methods: {
      getDate(){
        const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

      let time = new Date(this.date);
      let year = time.getFullYear();
      let day = time.getDate();
      let month = time.getMonth();

      if(day > months[month].days){
        day = 1
        month += 1
      }

      day < 10? day = '0' + day : day;

      return day + ' ' + months[month].name + ' ' + year
      },
      openQuestion(){
        this.$emit('closesearch')
        this.$router.push('/questions/' + this.id);
      }
    },
    computed: {},
    }
</script>

<style scoped>
    
</style>