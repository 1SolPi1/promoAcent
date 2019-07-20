<template>
<div>
 <div class="clearfix">
   <div class="col-xs-12 col-md-8 col-lg-9">
     <p>Заголовок<span>*</span></p>
     <input type="text" placeholder="укажите заголовок акции" v-model="share.name">
   </div>
   <div class="col-xs-12 col-md-3 col-lg-2 mar-left">
     <p>Срок действия<span>*</span></p>
     <select id="share" name="srok" class="select_main select_day">
       <option value='1'>1</option>
       <option value='2'>2</option>
       <option value='3'>3</option>
       <option value='4'>4</option>
       <option value='5'>5</option>
       <option value='6'>6</option>
       <option value='7'>7</option>
     </select>
     <span class="txt">дня</span>
   </div>
   <div class="col-xs-12">
     <p class="no-marg">Стоимость консультации<span>*</span></p>
     <div class="tlne">
    <span class="txt">до акции</span>
    <input class="lil-inp" type="text" v-model="share.startPrice">
    <span class="txt">во время акции</span>
    <input class="lil-inp mpo" type="text" v-model="share.sharePrice">
    <span class="txt">руб.</span>
    </div>
  </div>
  <div class="col-xs-12 border">
    <p>Текст акции</p>
    <textarea name="akcia-text" v-model="share.description"></textarea>
    <span class="txt ml-0">Описание акции, яркое и краткое (до 200 символов)</span>
  </div>
  </div>
  <button class="save-button" @click="createShare()">Сохранить</button>
  <button class="cancel-button" @click="clearShare()">Отменить</button>
  <button class="delete-button">удалить акцию</button>
</div> 
</template>

<script>
	export default {
    name: "Share",
    components: {
    },
    props: {},
    data() {
			return {
      share:{
        name: null,
        description: null,
        days: 1,
        startPrice: null,
        sharePrice: null
      }
      }
    },
    created() {
    },
    mounted() {
      const vm = this
    $('#share').styler({
      onSelectClosed: function() {
        vm.share.days = $(this).find(":selected").val()
      }
    });
     },
		methods: {
    createShare(){
      const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]
      let now = new Date()

      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();

      let endDay = Number(day) + Number(this.share.days);
      let endMonth = month;
      let endYear = year;

      if(day > months[now.getMonth()].days){
        month += 1
      }

      if(month > 12){
        year += 1 
      }

      if(endDay > months[now.getMonth()].days){
        endMonth += 1
      }

      if(endMonth > 12){
        endYear += 1 
      }


      day < 10? day = '0' + day : day;
      month < 10? month = '0' + month : month;
      endDay < 10? endDay = '0' + endDay : endDay;
      endMonth < 10? endMonth = '0' + endMonth : endMonth;

      let start = month+"."+day+"."+year;
      let end = endMonth+"."+endDay+"."+endYear;

      let params = new URLSearchParams();
        params.append('name', this.share.name);
        params.append('description', this.share.description);
        params.append('price_to', this.share.startPrice);
        params.append('price_from', this.share.sharePrice);
        params.append('action_start', start);
        params.append('action_end', end);

        this.$http({
          method: 'POST',
          url: 'expert/action/add',
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
              message: 'Акция создана'
            })
          }
        })
        .catch(error=>{
          this.$toast.error({
              title:'Ошибка',
              message: error.response.data.error
          })
        })
    },
    clearShare(){
      for (let key in this.share){
        this.share[key] = null
      }
    }
		},
		computed: {},
	}
</script>

<style scoped>

</style>