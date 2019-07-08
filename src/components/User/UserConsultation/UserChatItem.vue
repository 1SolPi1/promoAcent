<template>
  <div class="table-header tbl color">
    <div>
      <a href="javascript:void(0)" @click="$emit('openchat')">{{oponnent.fullName}}</a><a href="javascript:void(0)" class="link_share" id="mod_chat_open" @click="$emit('openchat')">
        
      </a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.998 299.998">
        <path d="M149.997,0C67.157,0,0.001,67.158,0.001,149.995s67.156,150.003,149.995,150.003s150-67.163,150-150.003
      S232.836,0,149.997,0z M160.355,168.337c-0.008,0.394-0.067,0.788-0.122,1.183c-0.039,0.296-0.057,0.599-0.124,0.89
      c-0.067,0.303-0.182,0.602-0.28,0.905c-0.117,0.366-0.226,0.731-0.379,1.076c-0.029,0.06-0.039,0.124-0.065,0.184
      c-0.226,0.482-0.488,0.934-0.775,1.362c-0.018,0.026-0.042,0.052-0.06,0.078c-0.327,0.48-0.7,0.916-1.092,1.325
      c-0.109,0.112-0.22,0.213-0.335,0.319c-0.345,0.329-0.708,0.63-1.094,0.905c-0.119,0.086-0.233,0.176-0.358,0.259
      c-0.495,0.324-1.014,0.609-1.554,0.843c-0.117,0.052-0.239,0.083-0.358,0.13c-0.456,0.176-0.918,0.322-1.395,0.433
      c-0.171,0.041-0.34,0.078-0.514,0.109c-0.612,0.112-1.232,0.189-1.86,0.189c-0.127,0-0.257-0.039-0.384-0.044
      c-0.602-0.023-1.198-0.07-1.771-0.192c-0.179-0.039-0.355-0.117-0.534-0.166c-0.534-0.145-1.056-0.306-1.554-0.529
      c-0.057-0.029-0.117-0.034-0.174-0.06l-57.515-27.129c-5.182-2.443-7.402-8.626-4.959-13.808
      c2.443-5.179,8.626-7.402,13.808-4.959l42.716,20.144V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374
      V168.15h0.002C160.373,168.212,160.355,168.274,160.355,168.337z">
        
      </path>
    </svg>
    {{getDate()}}
  </div>
 <!--  <div>
    <span>
      1000₽
    </span>
    <button>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
    <button>
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
        <path d="M48,4C23.7,4,4,23.7,4,48c0,24.301,19.7,44,44,44c24.301,0,44-19.699,44-44C92,23.7,72.301,4,48,4z M12,48  c0-8.5,2.953-16.306,7.879-22.464l50.586,50.585C64.307,81.047,56.5,84,48,84C28.118,84,12,67.882,12,48z M76.121,70.465  L25.536,19.879C31.694,14.953,39.5,12,48,12c19.882,0,36,16.118,36,36C84,56.5,81.047,64.307,76.121,70.465z"/>
      </svg>
    </button>
    <button
    ><svg viewBox="0.5 0.5 96 96" xmlns="http://www.w3.org/2000/svg">
      <path d="M84.5,20.5h-16v-4c0-6.63-5.37-12-12-12h-16c-6.63,0-12,5.37-12,12v4h-16c-2.209,0-4,1.791-4,4s1.791,4,4,4h4v48  c0,6.63,5.37,12,12,12h40c6.63,0,12-5.37,12-12v-48h4c2.209,0,4-1.791,4-4S86.709,20.5,84.5,20.5z M36.5,16.5c0-2.21,1.79-4,4-4h16  c2.21,0,4,1.79,4,4v4h-24V16.5z M72.5,76.5c0,2.21-1.79,4-4,4h-40c-2.21,0-4-1.79-4-4v-48h48V76.5z" />
    </svg>
  </button> -->
</div>
</div>
</template>

<script>
	export default {
    name: "UserChatItem",
    components: {
    },
    props: {
      oponnent:{required: true},
      lastmessage:{required: true}
    },
    data() {
			return {
        expertinfo:{
          name: ' Имя Фамилия ',
          avatar: require('@/assets/img/svg/avatar.svg')
        }
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      getDate(){
       const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]
      let now = new Date(); 
      let time = new Date(this.lastmessage[0].date * 1000);
      let year = time.getFullYear();
      let day = time.getDate();
      let month = time.getMonth();
      let minute = time.getMinutes();
      let hour = time.getHours();

      day < 10? day = '0' + day : day;
      hour < 10? hour = '0' + hour : hour;
      minute < 10? minute = '0' + minute : minute;

      return day + ' ' + months[month].name
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>