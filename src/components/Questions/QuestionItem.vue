<template>
  <div class="col-md-6">
    <div class="block_question slideInUp wow" data-wow-iteration="1" @click="openQuestion()">
      <div class="name_question">{{title}}</div>
      <div class="price_question">{{price}} ₽</div>
      <div class="category_question">{{category}} / {{subcategory}}</div>
      <div class="status_question" v-if="status !== 0">Решено</div>
        <div class="wrap_link_question">
          <a href="javascript:void(0)" class="link_gray" @click="openQuestion()">Читать полностью</a>
        </div>
      <div class="bottom_question clearfix">
        <div class="data_question">{{resultDate}}</div>
        <div class="user_question">{{person}}</div>
          <a href="javascript:void(0)" @click="openQuestion()" class="all_questions_user">всего <span>{{countAnswer}}</span> ответа</a>
        </div>
      </div>  
  </div>
</template>

<script>
  import dates from '@/scripts/getDate.js';
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
      }
    },
    data() {
      return {
        active: false,
        dates: null,
        resultDate: null
      }
    },
    created() {},
    mounted() {
       this.resultDate = dates(this.date)
      if(!this.question){
        new WOW().init();
      }
    },
    methods: {
      openQuestion(){
        this.$emit('closesearch')
        this.$router.push('/question?question=' + this.id);
      }
    },
    computed: {},
    }
</script>

<style scoped>
    
</style>