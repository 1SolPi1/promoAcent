<template>
<div class="modal-header">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
    <svg fill="none" height="24" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
    </svg>
  </button>
<!--   <button id="expand">
    <svg viewBox="0 0 96 96" fill="#979797" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.8,42.8c-1.56,1.56-4.09,1.56-5.66,0L12,17.66V36c0,2.21-1.79,4-4,4s-4-1.79-4-4V8c0-2.21,1.79-4,4-4h28  c2.21,0,4,1.79,4,4s-1.79,4-4,4H17.66L42.8,37.14C44.36,38.7,44.36,41.24,42.8,42.8z"/>
      <path d="M53.17,53.169c1.56-1.56,4.105-1.56,5.675,0L84,78.309v-18.34c0-2.21,1.79-4,4-4s4,1.79,4,4v28C92,90.179,90.18,92,87.97,92  h-28c-2.21,0-4-1.79-4-4s1.79-4,4-4h18.34L53.17,58.844C51.609,57.284,51.609,54.729,53.17,53.169z"/>
    </svg>
  </button> -->
  <div class="image_expert">
    <div class="rating_expert">{{activechat.opponent.rating}}</div>
    <ul class="rating_item"  :class="'value-'+itemStar()">
      <li><i class="glyphicon glyphicon-star"></i></li>
      <li><i class="glyphicon glyphicon-star"></i></li>
      <li><i class="glyphicon glyphicon-star"></i></li>
      <li><i class="glyphicon glyphicon-star"></i></li>
      <li><i class="glyphicon glyphicon-star"></i></li>
    </ul>
    <img src="@/assets/img/svg/avatar.svg" alt="alt" v-if="activechat.opponent.avatar === null">
    <img :src="domen + activechat.opponent.avatar " alt="alt" v-else>
  </div>
  <div class="opis">
    <p style="width: 100px">{{activechat.opponent.fullName}}</p>  
    <div class="clearfix">
      <div class="item_statistics fst">
        <img src="@/assets/img/statistics_icon1.png" alt="alt">
        <p>Рейтинг <strong>{{activechat.opponent.rating}}</strong> из 10</p>
      </div>
      <div class="item_statistics">
        <img src="@/assets/img/statistics_icon4.png" alt="alt">
        <p><strong>{{activechat.opponent.sum}}₽ </strong></p>
        <span>(стоимость консультации)</span>
      </div>
    </div>
    <pays
      :activechat="activechat"
    />
    <div>
      <p>Осталось сообщений: {{activechat[0].counter}}</p>
    </div>
  </div>
</div>
</template>

<script>
  import pays from '@/components/Chat/Pays.vue'
	export default {
    name: "Header",
    components: {
      pays
    },
    props: {
      activechat:{
        type: Object,
        default: () => {} 
      }
    },
    data() {
			return {
        domen: 'http://api.sprosi-online.ru/file/'
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      itemStar(){
        return Math.trunc(this.activechat.opponent.rating / 2)
      },
      close(){
        this.$store.dispatch('getChats');
        this.$chatinfo.close();
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>