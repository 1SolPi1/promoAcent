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
              <router-link :to="'/experts/'+expert.id + '?id=1'" class="reviews_expert_big"><span>{{expert.comment_count}}</span> отзывов</router-link>
              <!-- <div class="top_expert">Эксперт  месяца</div> -->
            </div>
            <div 
              class="boxCategory"
              v-if="expert.category_parent.length > 0"
              >
              <div 
                class="iconCategory" 
                :style="{background: getColor()}"
              >
                <img :src="getImage()" alt="">
              </div>
              <p 
                v-for="item in expert.sub_category"
                :key="item.id"
                style="margin-right: 10px"
              >{{item.name}}</p>
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
        isActive: false
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
      },
      getColor(){
        return this.categoryItem.find(item => item.id === this.expert.category_parent[0].id).color
      },
      getImage(){
        return this.categoryItem.find(item => item.id === this.expert.category_parent[0].id).image
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
      },
      classObject: function () {
        return {
          active: this.isActive
        }
      },
      categoryItem(){
        return this.$store.getters.CATEGORYITEM
      },
    },
	}
</script>

<style scoped>
.active{
  color: red;
}

.active::before{
  background-color: black
}

.boxCategory{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.iconCategory{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.iconCategory img{
  width: 22px;
  height: 22px;
}
</style>