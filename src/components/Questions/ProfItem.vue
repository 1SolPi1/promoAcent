<template>
  <div class="col-md-3 col-sm-6">
    <div class="item_expert flipInY wow" data-wow-iteration="1" @click="goToExpert()">
      <div class="premium_expert" v-if="tops">
        <span>входит в ТОП-25</span>
      </div>
      <div class="image_expert">
        <div class="rating_expert">{{rating || 0}}</div>
        <ul class="rating_item" :class="'value-'+itemStar()">
          <li><i class="glyphicon glyphicon-star"></i></li>
          <li><i class="glyphicon glyphicon-star"></i></li>
          <li><i class="glyphicon glyphicon-star"></i></li>
          <li><i class="glyphicon glyphicon-star"></i></li>
          <li><i class="glyphicon glyphicon-star"></i></li>
        </ul>
        <img src="@/assets/img/svg/avatar.svg" alt="alt" v-if="!avatar">
        <img :src="domen + avatar" alt="alt" v-else>
      </div>
      <div class="name_expert">
        {{name}}
        <router-link class="link_share" :to="'/experts/'+id"></router-link>
      </div>
      <div class="price_expert">от <span>{{price}} ₽</span></div>
      <a href="#" class="reviews_expert"><span>{{reviews}}</span> отзывов</a>
      <div class="btn_chat_wrap">
        <a 
          v-if="$store.getters.EXPERT.id !== id"
          href="javascript:void(0)" 
          class="btn_chat"
          @click="$chatinfo.opens({
              name: name || 'Имя Фамилия',
              avatar: avatar,
              user_id: $store.getters.PROFILE.user_id,
              expert_id: id,
              author: 0 
            })"
        >написать в чат</a>
      </div>
    </div>
  </div> 
</template>

<script>
    export default {
        name: "ProfItem",
        components: {},
        props: {
           tops:{
            type: Boolean,
            default: false
           },
           avatar:{
            type: String,
            default: null
           },
           id:{
            type: Number
           },
           rating:{
            type: Number,
            default: 0
           },
           name:{
            type: String,
            default: 'Имя Фамилия'
           },
           price:{
            type: Number,
            default: 0
           },
           reviews:{
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
          new WOW().init();
        },
        methods: {
            itemStar(){
                return Math.trunc(this.rating / 2)
            },
            goToExpert(){
               this.$router.push('/expert?expert='+ this.id);
            }
        },
        computed: {
          domen(){
            return this.$store.getters.DOMEN
          }
        },
    }
</script>

<style scoped>
   .item_expert:hover{
    box-shadow: 0 0 13px #e0e0e0;
    cursor: pointer;
   }
</style>