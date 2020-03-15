<template>
  <div class="col-md-6">
    <div class="block_question slideInUp wow" data-wow-iteration="1" @click="openQuestion()">
      <div class="name_question">{{title}}</div>
      <div class="price_question">{{price}} ₽</div>
      <div class="category_question">{{category}} / {{subcategory}}</div>
      <div class="status_question" v-if="status === 2">Решено</div>
        <div class="wrap_link_question">
          <a href="javascript:void(0)" class="link_gray" @click="openQuestion()">Читать полностью</a>
        </div>
      <div class="bottom_question clearfix">
        <div class="data_question">{{resultDate()}}</div>
        <div class="user_question" @click.stop="goToProfile()">{{person}}</div>
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
      subcategory:{
        type: String,
        default: ''
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
      },
      expert:{
        type: Number
      },
      user_id:{
        type: Number
      },
      personId:{
        type: Number,
        default: 0
      },
      anonim:{
        type: Boolean,
        default: false
      },
      url:{
        type: String
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
      openQuestion(){
          if (localStorage.getItem('token')) {
              this.$emit('closesearch');
              this.$router.push('/question'+ this.url);
          } else {
              this.$toast.error({
                  title:'Ошибка',
                  message: 'Войдите или зарегистрируйтесь'
              })
          }
      },
      goToProfile(){
        if (this.anonim) {
          return;
        }else if(this.expert){
          this.$router.push('/expert?expert=' + this.expert);
        }else {
          this.$router.push('/person?id=' + this.user_id);
        }
      },
        resultDate(){
            const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

            let time = new Date(this.date);
            let year = time.getFullYear();
            let day = time.getDate();
            let month = time.getMonth();

            if(day > months[month].days){
                day = 1;
                month += 1
            }
            day < 10? day = '0' + day : day;
            return day + ' ' + months[month].name + ' ' + year
        }
    },
    computed: {
    },
    }
</script>

<style scoped>
    
</style>