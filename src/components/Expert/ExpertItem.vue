<template>
        <div class="item_main_expert slideInUp wow" data-wow-duration="1.5s" data-wow-iteration="1">
          <a href="javascript:void(0)"  class="item_main_expert_link" @click="goToExpert()" v-if="logined"></a>
          <a href="javascript:void(0)"  class="item_main_expert_link" @click="showLogined()" v-else></a>
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
              <router-link :to="'/expert?expert='+expert.id + '&id=1'" class="reviews_expert_big"><span>{{expert.comment_count}}</span> отзывов</router-link>
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
            <a href="javascript:void(0)" class="btn_chat btn_chat_big" @click="$emit('openchat')" v-if="!creator && token">написать в чат</a>
          </div>
          <div class="firts_consultation" v-if="expert.action.length > 0 && actionTime">
            <div class="action_consultation"><span>Акция</span></div>
            <div class="left_first">
              <div class="title_middle">{{expert.action[0].name || ' '}}</div>
              <p>{{expert.action[0].description || ' '}}</p>
              <div class="price_consultation">{{expert.action[0].price_to}} ₽ <div class="old_price">{{expert.action[0].price_from}}₽</div></div>
            </div>
            <div class="right_first">
              <p>До конца акции:</p>
              <div class="countdown clearfix" :data-countdown="times()"></div>
              <a href="javascript:void(0)" class="btn_blue" @click="alert()">Воспользоваться</a>
            </div>
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
        isActive: false,
        login: false,
        register: false,
        registerExpert: false,
      }
    },
    created() {
    },
    mounted() {
      if(!this.search){
        new WOW().init();
      }
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
      itemStar(){
        return Math.trunc(this.expert.rating / 2)
      },
      getColor(){
        return this.categoryItem.find(item => item.id === this.expert.category_parent[0].id).color
      },
      getImage(){
        return this.categoryItem.find(item => item.id === this.expert.category_parent[0].id).image
      },
      alert(){
        this.$toast.success({
            title:'Успешно',
            message:'Ваш запрос отправлен эксперту'
      })
      },
      showLogined(){
        this.$toast.error({
          title:'Ошибка',
          message: 'Войдите или зарегистрируйтесь'
        })
       },
      times(){
        const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

        let time = new Date(this.expert.action[0].action_end);
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
      goToExpert(){
        this.$emit('closesearch')
        this.$router.push('/expert?expert=' +this.expert.id);
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
      token(){
      return localStorage.getItem('token')
      },
      actionTime(){
        return new Date() < new Date(this.expert.action[0].action_end)
      },
      logined(){
            return localStorage.getItem('token')
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
  width: 100%;
  overflow: hidden;
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