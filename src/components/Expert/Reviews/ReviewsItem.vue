<template>
<div class="col-sm-6">
  <div class="item_review slideInUp wow" data-wow-iteration="1">
    <div class="head_item_review">
      <div class="left_head_review">
        <div class="name_item_review">{{name || 'Имя Фамилия'}}</div>
        <div class="date_item_review">{{getDate()}}</div>
      </div>
      <div class="reaction_review" :class="'react_' + score"><span>Оценка</span></div> 
    </div>
    <div class="text_item_review">
      <p>{{desc}}</p>
    </div>
  </div>
</div> 
</template>

<script>
	export default {
    name: "ReviewsItem",
    components: {
    },
    props: {
      name:{
        type: String,
        default: ' Имя фамилия '
      },
      desc:{
        type: String,
        default: ''
      },
      date:{
        type: String,
        default: '10 Июня 2019'
      },
      score:{
        type: Number,
        default: 0
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
		},
		computed: {},
	}
</script>

<style scoped>

</style>