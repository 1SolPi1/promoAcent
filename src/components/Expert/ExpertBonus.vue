<template>
<div class="akcia-in-profile clearfix">
  <p class="label-akcia">Акция</p>
  <div class="left-side">
    <p class="akcia-header" v-if="!showChange">{{action.name}}</p>
     <input class="input" type="text" placeholder="укажите заголовок акции" v-model="action.name" v-else>
    <span class="akcia-body" v-if="!showChange">{{action.description}}</span>
      <textarea class="desc" name="akcia-text" v-model="action.description" v-else></textarea>
    <div class="price">
      <span class="new-price" v-if="!showChange">{{action.price_to}} ₽</span>
      <input class="input prices" type="text" v-model.number="action.price_to" v-else>
      <span class="old-price" v-if="!showChange">{{action.price_from}} ₽</span>
      <input class="input prices" type="text" v-model.number="action.price_from" v-else>
    </div>
  </div>
  <div class="right-side">
    <p>До конца акции:</p>
    <div :data-countdown="times()"></div>
    <button class="change-button" @click="showChange = !showChange" v-if="!showChange">Изменить акцию</button>
    <button class="change-button" @click="changeAction()" v-else>Подтвердить</button>
  </div>
</div> 
</template>

<script>
	export default {
    name: "ExpertBonus",
    components: {

    },
    props: {
      action:{
        required: true
      }
    },
    data() {
			return {
			 showChange: false,
      }
    },
    created() {
    },
    mounted() {
      $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
          $this.countdown(finalDate, function(event) {
          $this.html(event.strftime(''
        + '<div class="days"><span>%D</span><p>дней</p></div> '
        + '<div class="hours"><span>%H</span><p>часа</p></div> '
        + '<div class="minutes"><span>%M</span><p>минут</p></div> '));
      });
    });
     },
		methods: {
      times(){
        const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

        let time = new Date(this.action.action_end);
        let year = time.getFullYear();
        let day = time.getDate();
        let month = time.getMonth() + 1;

        if(day > months[month].days){
          day = 1
          month += 1
        }
        day < 10? day = '0' + day : day;
        month < 10? month = '0' + month : month;
        return year + '/' + month+ '/' + day
      },
      changeAction(){
        let params = new URLSearchParams();
        params.append('name', this.action.name);
        params.append('description', this.action.description);
        params.append('price_to', this.action.price_to);
        params.append('price_from', this.action.price_from);
        params.append('id', this.action.id);

        this.$http({
          method: 'POST',
          url: 'expert/action/edit?id=' + this.action.id,
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          if (response.status === 200) {
            this.$toast.success({
              title:'Успешно',
              message: 'Акция изменена'
            })
            this.showChange = !this.showChange
            this.$emit('refresh')
          }
        })
        .catch(error=>{
          this.$toast.error({
              title:'Ошибка',
              message: error.response.data.error
          })
        })
      }
		},
		computed: {},
	}
</script>

<style scoped>
.input{
  width: 100%;
background: #FEFEFE;
border: #FEFEFE;
border-radius: 4px;
height: 30px;
padding-left: 15px;
font-size: 14px;
-webkit-box-shadow: 2px 2px 15px #e2e2e2;
box-shadow: 2px 2px 15px #e2e2e2;
}

.desc{
  border-radius: 4px;
border: none;
width: 94%;
padding: 10px;
font-size: 14px;
display: block;
resize: vertical;
}

.prices{
  width: 70px;
margin-left: 10px;
}
</style>