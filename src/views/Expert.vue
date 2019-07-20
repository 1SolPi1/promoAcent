<template>
	<div v-if="expertinfo !== null">
	<div class="section_main_expert">
			<div class="container">
				<breadcrumbs
        :wayPages="[
          {
            name: 'Эксперты',
            route: '/experts',
          }
        ]"
        :currentPage="expertinfo.name || 'Имя Фамилия'"
        />
				<div class="item_main_expert">
					<div class="content_expert">
						<div class="image_expert expert_image_big">
							<div class="status__expert online_expert" v-if="expertinfo.online"></div>
							<div class="rating_expert">{{expertinfo.rating || 0}}</div>
							<ul class="rating_item" :class="'value-'+itemStar()">
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
							</ul>
							<img src="@/assets/img/svg/avatar.svg" alt="alt" v-if="expertinfo.avatar === null">
              <img :src="domen + expertinfo.avatar" alt="alt" class="avatar" v-else>
						</div>
						<div class="head_expert_item">
							<div class="name_expert_big">{{expertinfo.name || 'Имя Фамилия'}}</div>
							<div class="experience_expert"><span v-if="expertinfo.stay_year > 0">{{expertinfo.stay_year}} лет </span> <span v-if="expertinfo.stay_month > 0">{{expertinfo.stay_month}} мес. </span><span>{{expertinfo.stay_day}} д.</span> на сайте</div>
							<div class="experience_expert">Стаж с <span>{{expertinfo.experience || 'Эксперт не указал свой стаж'}} г.</span></div>
							<!-- <div class="top_expert">Эксперт  месяца</div> -->
						</div>
						<div 
              class="boxCategory"v-if="expertinfo.category_parent.length > 0"
              >
              <div 
                class="iconCategory" 
                :style="{background: getColor()}"
              >
                <img :src="getImage()" alt="">
              </div>
              <p 
                v-for="item in expertinfo.sub_category"
                :key="item.id"
                style="margin-right: 10px"
              >{{item.name}}</p>
            </div>
						<div class="text_expert">
							<p>{{expertinfo.about_us || 'Эксперт не оставил о себе информацию'}}</p>
						</div>
						<a href="javascript:void(0)" v-if="!creator" class="btn_chat btn_chat_big" @click="$chatinfo.opens({
							name: expertinfo.name || 'Имя Фамилия',
							avatar: expertinfo.avatar,
							user_id: $store.getters.PROFILE.user_id,
							expert_id: expertinfo.id,
							author: 0 
						})">написать в чат</a>
						<a href="javascript:void(0)" v-if="token && !creator" class="btn_add" @click="reviewForms = !reviewForms">оставить отзыв</a>
					</div>
				</div>
			</div>
		</div>

		<div class="section_nav_expert">
			<div class="container">
				<div class="head_nav_expert">
					<div class="social_btns">
						<img src="@/assets/img/social_btns.jpg" alt="alt">
					</div>
					<ul class="nav nav-tabs">
						<li  :class="{active: $route.query.id !== '1'}"><a href="#tab1" data-toggle="tab">Профиль</a></li>
						<li  :class="{active: $route.query.id == '1'}"><a href="#tab2" data-toggle="tab">Отзывы <span>({{expertinfo.comment_count}}) </span></a></li>
						<li><a href="#tab3" data-toggle="tab">Ответы на вопросы <span>({{expertinfo.answer.length}})</span></a></li>
					</ul>
				</div>
			</div>
		</div>

		<expertStats
			:rating="expertinfo.rating"
			:comment="expertinfo.comment_count"
			:answer="expertinfo.answer"
			:answerbest="expertinfo.answer_best"
			:startprice="expertinfo.price_from"
			:endprice="expertinfo.price_to"
		/>

		<div class="section_content_tabs">
			<div class="container">
				<div class="tab-content">
					<div class="tab-pane"  :class="{active: $route.query.id !== '1'}" id="tab1">
						<expertBonus
							v-if="creator && expertinfo.action.length > 0"
							:action="expertinfo.action[0]"
						/>
						<div class="row about_expert">
							<div class="col-md-6">
								<div class="title_experts">О себе</div>
								<div class="text_about_expert">
									<p>{{expertinfo.about_us || 'Эксперт не оставил о себе информацию'}}</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="title_experts">Время консультирования</div>
								<div class="time_expert">По предварительной договоренности. Обычно с {{expertinfo.work_time_from}} до {{expertinfo.work_time_to}} по московскому времени</div>
								<div class="title_experts title_education">Образование <!-- <div class="confirmed_expert">подтверждено</div> --></div>
								<div class="education_expert" v-if="expertinfo.education.length > 0">{{expertinfo.education[0].institution_name || ' Институт '}}<div class="years_education">{{expertinfo.education[0].educate_start}} - {{expertinfo.education[0].educate_finish}}</div>
									<p><span>{{expertinfo.education[0].name_educational || ' Специалист '}}</span><span>{{expertinfo.education[0].specialization || ' Образование '}}</span></p>
								</div>
								<div class="education_expert" v-else>
									Пользоветль не указал своё образование
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane" :class="{active: $route.query.id == '1'}" id="tab2">
						<div class="row">
							<reviewsStats
								:stats="stats"
							/>
							<div class="col-md-10">
								<div class="title_experts">Последние отзывы</div>
								<div class="row" v-if="reviews.length > 0">
									<reviewsItem
										v-for="item in reviews"
										:key="item.id"
										:name="item.userName"
										:desc="item.description"
										:date="item.create_at"
										:score="item.score"
									/>
								</div>
								<div class="row" v-else>
									<p>О эксперте ещё не оставляли отзывы</p>
								</div>
								<div class="bottom_btn_review" v-if="expertinfo.comment_count > 6">
									<a href="#" class="btn_gray"><span>Смотреть <strong>все</strong> отзывы</span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane" id="tab3">
						<div class="title_experts">Последние ответы</div>
						<div class="row">
							<expertAnswerItem
								v-for="item in expertinfo.answer"
								:key="item.answer.id"
								:answer="item.answer"
								:question="item.question"
							/>
						</div>
						<div class="bottom_btn_review">
							<!-- <a href="" class="btn_gray"><span>Смотреть <strong>все</strong> ответы</span></a> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<moreExpertList
			v-if="!userinfo.expert"
		/>
		<reviewForm
			v-if="reviewForms"
			:id="expertinfo.id"
			@refresh="refresh()"
			@close="reviewForms = !reviewForms"
		/>
	</div>
</template>
<script>
	import expertStats from '@/components/Expert/Profile/ExpertStats'
	import reviewsStats from '@/components/Expert/Reviews/ReviewsStats'
	import reviewsItem from '@/components/Expert/Reviews/ReviewsItem'
	import reviewForm from '@/components/Expert/Reviews/FormReview'
	import expertAnswerItem from '@/components/Expert/ExpertAnswer/ExpertAnswerItem'
	import expertBonus from '@/components/Expert/ExpertBonus'
	import moreExpertList from '@/components/Expert/MoreExpert/MoreExpertList'
export default {
	name: "Expert",
	components: {
		expertStats,
		reviewsStats,
		reviewsItem,
		expertAnswerItem,
		moreExpertList,
		expertBonus,
		reviewForm
	},
	props: {},
	data() {
		return {
			expertinfo: null,
			reviewForms: false,
			reviews:[],
			stats: []
		}
	},
	created() {

	},
	mounted() {
		new WOW().init();
		this.getExpert();
		this.getReviews();
		console.log(this.$route.query)
	},
	methods: {
		itemStar(){
        return Math.trunc(this.expertinfo.rating / 2)
      },
      refresh(){
      	this.getExpert();
      	this.getReviews();
      },
		getExpert(){
        // let params = new URLSearchParams();
        // params.append('first_name', names[0]);
        // params.append('last_name', names[1]);
        // params.append('email', this.email);

        this.$http({
          method: 'GET',
          url: 'expert/profile/views?id=' + this.$route.params.id,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
					this.expertinfo = response.data
        })
		},
		getReviews(){
        this.$http({
          method: 'GET',
          url: 'expert/comment/all-expert?id=' + this.$route.params.id,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
					this.reviews = response.data
					let stats = response.data.map(map => map.score)
					this.stats = stats
        })
		},
		getColor(){
        return this.categoryItem.find(item => item.id === this.expertinfo.category_parent[0].id).color
      },
      getImage(){
        return this.categoryItem.find(item => item.id === this.expertinfo.category_parent[0].id).image
      }

	},
	computed: {
		domen(){
			return this.$store.getters.DOMEN
		},
		userinfo(){
			return this.$store.getters.USERINFO
		},
		creator(){
			if (this.$store.getters.EXPERT !== null) {
				return this.$store.getters.EXPERT.id === this.expertinfo.id
			}else{
				return false
			}
		},
		token(){
			return localStorage.getItem('token')
		},
		categoryItem(){
        return this.$store.getters.CATEGORYITEM
      },
	},
}
</script>
<style scoped>
.boxCategory{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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