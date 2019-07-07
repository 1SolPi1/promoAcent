<template>
<div :class="{'col-md-6' : !maincab}">
  <div class="block_question slideInUp wow" data-wow-iteration="1">
    <div class="name_question_min">{{question.title}}</div>
    <div class="category_question">Психология / Дети и подростки</div>
    <div class="wrap_like">
       <div class="dislike_question">Ответ понравился</div>
    </div>
    <div class="text_question">
      <div class="title_text_question">Ответ:</div>
      <p>{{answer.description}}</p>
      <div class="date_text_question">{{getDate(answer.create_at)}}</div>
    </div>
    <div class="bottom_question clearfix">
      <div class="data_question">{{getDate(question.create_at)}}</div>
      <div class="user_question">Анонимно</div>
      <a href="#" class="all_questions_user">всего <span>4</span> ответа</a>
    </div>
  </div>
</div>
</template>

<script>
	export default {
    name: "ExpertAnswerItem",
    components: {
    },
    props: {
      maincab:{
        type: Boolean,
        default: false
      },
      answer:{
        type: Object
      },
      question:{
        type: Object
      }
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      getDate(date){
       const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

      let time = new Date(date);
      let year = time.getFullYear();
      let day = time.getDate();
      let month = time.getMonth();

      if(day > months[month].days){
        day = 1
        month += 1
      }

      day < 10? day = '0' + day : day;

      return day + ' ' + months[month].name + ' ' + year
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>