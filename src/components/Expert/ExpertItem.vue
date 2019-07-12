<template>
        <div class="item_main_expert slideInUp wow" data-wow-duration="1.5s" data-wow-iteration="1">
          <router-link class="item_main_expert_link" :to="'/experts/'+expert.id"></router-link>
          <div class="content_expert">
            <div class="image_expert expert_image_big">
              <div class="status__expert online_expert" v-if="expert.online"></div>
              <div class="rating_expert">{{expert.rating || 0}}</div>
              <ul class="rating_item" :class="'value-'+itemStar()">
                <li><i class="glyphicon glyphicon-star"></i></li>
                <li><i class="glyphicon glyphicon-star"></i></li>
                <li><i class="glyphicon glyphicon-star"></i></li>
                <li><i class="glyphicon glyphicon-star"></i></li>
                <li><i class="glyphicon glyphicon-star"></i></li>
              </ul>
              <img src="img/svg/avatar.svg" alt="alt" v-if="expert.avatar === null">
              <img :src="domen + expert.avatar" alt="alt" class="avatar" v-else>
            </div>
            <div class="head_expert_item">
              <div class="name_expert_big">{{expert.name || 'Имя Фамилия'}} <a href="#" class="link_share"></a></div>
              <div class="price_expert_big">от <span>{{expert.price_from}} ₽</span></div>
              <a href="#" class="reviews_expert_big"><span>{{expert.comment_count}}</span> отзывов</a>
              <!-- <div class="top_expert">Эксперт  месяца</div> -->
            </div>
            <div class="tags_experts">
              <p>Дети и подростки</p>
              <p>Любовные отношения </p>
              <p>Самопознание и развитие</p>
            </div>
            <div class="text_expert">
              <p>{{expert.about_us || 'Эксперт не оставил о себе информацию'}}</p>
            </div>
            <a href="javascript:void(0)" class="btn_chat btn_chat_big" @click="$emit('openchat')" v-if="!creator">написать в чат</a>
          </div>
        </div>
</template>

<script>
	export default {
    name: "ExpertItem",
    components: {
    },
    props: {
      expert:{required: true},
      search:{
        type: Boolean,
        default: false
      }
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
      if(!this.search){
        new WOW().init();
      }
     },
		methods: {
      itemStar(){
        return Math.trunc(this.expert.rating / 2)
      }
		},
		computed: {
      domen(){
      return this.$store.getters.DOMEN
      },
      creator(){
        if (this.$store.getters.EXPERT !== null) {
          return this.$store.getters.EXPERT.id === this.expert.id
        }else{
          return false
        }
      }
    },
	}
</script>

<style scoped>

</style>