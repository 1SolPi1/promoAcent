<template>
	<div>
<div class="section_top">
			<div class="container">
				<div class="col-md-6 col_image_wrap">

					<div class="image_section_top img_question_med">
						<img src="@/assets/img/svg/medicine.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_psihology">
						<img src="@/assets/img/svg/psychology.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_yrist">
						<img src="@/assets/img/svg/urist.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_science">
						<img src="@/assets/img/svg/ucheba.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_ezot">
						<img src="@/assets/img/svg/ezoteric.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_beautiful">
						<img src="@/assets/img/svg/krasota.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_english">
						<img src="@/assets/img/svg/english.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_hobi">
						<img src="@/assets/img/svg/hobbi.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_business">
						<img src="@/assets/img/svg/business.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_religion">
						<img src="@/assets/img/svg/religiya.svg" alt="alt">
					</div>
					<div class="image_section_top img_question_tech">
						<img src="@/assets/img/svg/technology.svg" alt="alt">
					</div>
				</div>
				<div class="col-md-6">
					<h1 class="title_section slideInUp wow" data-wow-iteration="1">Задайте бесплатно вопрос <br>и уже сейчас получите ответ</h1>
					<div class="descr_title slideInUp wow" data-wow-iteration="1">Выберите направление и задайте вопрос</div>
					<div class="questions_items">
						<a href="javascript:void(0)" class="item_question question_med slideInUp wow" data-wow-delay="0.2s" data-wow-iteration="1" @click="selectCategory('doktoru')">
							<img src="@/assets/img/quest1.png" alt="alt">
							<span>Медицина</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_psihology slideInUp wow" data-wow-delay="0.2s" data-wow-iteration="1" @click="selectCategory('psihologu')">
							<img src="@/assets/img/quest2.png" alt="alt">
							<span>Психология</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_yrist slideInUp wow" data-wow-delay="0.2s" data-wow-iteration="1" @click="selectCategory('yristu')">
							<img src="@/assets/img/quest3.png" alt="alt">
							<span>Юриспруденция</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_science slideInUp wow" data-wow-delay="0.2s" data-wow-iteration="1" @click="selectCategory('uchitelu')">
							<img src="@/assets/img/quest4.png" alt="alt">
							<span>Учеба и наука</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_ezot slideInUp wow" data-wow-delay="0.5s" data-wow-iteration="1" @click="selectCategory('po-ezoteriki')">
							<img src="@/assets/img/quest5.png" alt="alt">
							<span>Эзотерика</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_beautiful slideInUp wow" data-wow-delay="0.5s" data-wow-iteration="1" @click="selectCategory('po-krasote')">
							<img src="@/assets/img/quest6.png" alt="alt">
							<span>Красота</span>
						</a>
						<a href="javascript:void(0)" class="item_question question_english slideInUp wow" data-wow-delay="0.5s" data-wow-iteration="1" @click="selectCategory('po-anglijskomu')">
							<img src="@/assets/img/quest7.png" alt="alt">
							<span>Английский</span>
						</a>
						<div class="parent_more" @mouseover="showHiddenItem()">
							<a href="#" class="item_question question_more slideInUp wow" data-wow-delay="0.5s" data-wow-iteration="1">
								<img src="@/assets/img/quest8.png" alt="alt">
								<span>Еще</span>
							</a>
							<div class="hidden_questions_items">
								<div class="questions_items">
									<a href="javascript:void(0)" class="item_question question_hobi" @click="selectCategory('po-hobbi')">
										<img src="@/assets/img/bicycle.svg" alt="alt">
										<span>Хобби</span>
									</a>
									<a href="javascript:void(0)" class="item_question question_business" @click="selectCategory('po-biznesu')">
										<img src="@/assets/img/umbrella.svg" alt="alt">
										<span>Бизнес</span>
									</a>
									<a href="javascript:void(0)" class="item_question question_religion" @click="selectCategory('po-religii')">
										<img src="@/assets/img/church.svg" alt="alt">
										<span>Религия</span>
									</a>
									<a href="javascript:void(0)" class="item_question question_tech" @click="selectCategory('po-tehnologii')">
										<img src="@/assets/img/antenna.svg" alt="alt">
										<span>Технологии</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

		<div class="section_steps">
			<div class="container">
				<div class="title_section slideInUp wow" data-wow-iteration="1">Как это работает</div>
				<div class="row">
					<div class="col-md-4">
						<div class="item_step flipInY wow" data-wow-delay="0.5s" data-wow-iteration="1">
							<div class="number_step">1</div>
							<div class="name_step">Выберите категорию</div>
							<img src="@/assets/img/work1.png" alt="alt">
						</div>
					</div>
					<div class="col-md-4">
						<div class="item_step flipInY wow" data-wow-delay="0.8s" data-wow-iteration="1">
							<div class="number_step">2</div>
							<div class="name_step">Задайте вопрос</div>
							<img src="@/assets/img/work2.png" alt="alt">
						</div>
					</div>
					<div class="col-md-4">
						<div class="item_step flipInY wow" data-wow-delay="1s" data-wow-iteration="1">
							<img src="@/assets/img/work3.png" alt="alt">
							<div class="name_step">Получите ответ</div>
							<div class="number_step">3</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section_advantages">
			<div class="container">
				<h2 class="title_section align_center slideInUp wow" data-wow-iteration="1">Чем мы лучше штатных или оффлайн специалистов</h2>
				<div class="row">
					<div class="col-md-4 col-sm-4">
						<div class="item_advantages advant_simple flipInX wow" data-wow-delay="0.5s" data-wow-iteration="1">
							<div class="name_advantages">Просто<span>.</span></div>
							<p>Получить ответ на важный вопрос - просто! Достаточно всего лишь зарегистрироваться на нашем сайте и адресовать свою проблему эксперту в нужной категории. Ответ будет представлен в удобной форме - в видеочате или сообщением.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item_advantages flipInX wow" data-wow-delay="0.8s" data-wow-iteration="1">
							<div class="name_advantages">Быстро<span>.</span></div>
							<p>Скорость получения ответа на важный вопрос порадует наших клиентов. Эксперты готовы придти на помощь сразу после получения вопроса, так как хорошо понимают важность своевременного ответа. </p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item_advantages advant_vigodno flipInX wow" data-wow-delay="1s" data-wow-iteration="1">
							<div class="name_advantages">Выгодно<span>.</span></div>
							<p>Квалифицированные специалисты в различных областях знаний бесплатно, быстро и доступно ответят на любой вопрос. Мы гарантируем отсутствие на сайте скрытых платежей и комиссионных сборов.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section_numbers">
			<div class="container">
				<div class="row">
					<div class="col-md-5 col-sm-4">
						<div class="img_number zoomIn wow" data-wow-iteration="1">
							<img src="@/assets/img/img_number.png" alt="alt">
						</div>
					</div>
					<div class="col-md-offset-1 col-md-6 col-sm-8 right_numbers">
						<h2 class="title_section slideInUp wow" data-wow-iteration="1">«Спроси Онлайн» в цифрах</h2>
						<div class="descr_number">Мы дорожим доверием клиентов — никаких скрытых платежей и комиссий за выдачу.</div>
						<div class="row">
							<div class="col-xs-4">
								<div class="item_number">
									<strong>300+</strong>
									<span>экспертов</span>
								</div>
							</div>
							<div class="col-xs-4">
								<div class="item_number">
									<strong>1000+</strong>
									<span>вопросов</span>
								</div>
							</div>
							<div class="col-xs-4">
								<div class="item_number">
									<strong>600+</strong>
									<span>клиентов</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section_clients">
			<div class="container">
				<h2 class="title_section slideInUp wow" data-wow-iteration="1">Клиенты «Спроси Онлайн» говорят</h2>
				<ul class="slider_clients">
					<slick
						ref="slick"
						:options="slickOptions"
						@setPosition="handleSetPosition"
					>
					<comments
						v-for="(item, index) in comments"
						:name="item.name"
						:desc="item.desc"
						:img = "item.img"
						:key="index"
					/>
					</slick>
				</ul>
				<div class="pagingInfo"><span>{{currentSlideComment}}/{{comments.length}}</span></div>
			</div>
		</div>

		<div class="section_journal">
			<div class="container">
				<h3 class="title_section slideInUp wow" data-wow-iteration="1">Журнал</h3>
				<div class="row">
					<journalItem
						v-for="(item, index) in 4"
						:key="index"
					/>
				</div>
			</div>
		</div>

		<div class="section_buttons">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="block_button flipInY wow" data-wow-delay="0.5s" data-wow-iteration="1">
							<div class="name_block_button">Подпишитесь на рассылку</div>
							<p>Будем информировать об акциях важных изменениях и прочем.</p>
							<form class="form_subscription">
								<input type="text" required placeholder="ваша почта" v-model="emailSend">
								<button class="btn_subscription" @click.prevent="setSubscription()"></button>
							</form>
						</div>
					</div>
					<div class="col-md-4">
						<div class="block_button flipInY wow" data-wow-delay="0.8s" data-wow-iteration="1">
							<div class="name_block_button">Зарегистрируйтесь</div>
							<p>Регистрация позволит задавать вопросы и получать ним ответы.</p>
							<a href="javascript:void(0)" @click="register = !register" class="btn_blue">Зарегистрироваться</a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="block_button flipInY wow" data-wow-delay="1s" data-wow-iteration="1">
							<div class="name_block_button">Разместите свои услуги</div>
							<p>Размещение услуг позвоит вам как эксперту повысить узнаваемость</p>
							<a href="javascript:void(0)" class="btn_blue" @click="registerExpert = !registerExpert">Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<registration
      v-if="register"
      @close="register = !register"
      @gotologin="showLogin()"
    />
    <registration
      v-if="registerExpert"
      :expert="true"
      @close="registerExpert = !registerExpert"
      @gotologin="showLogin()"
    />
    <login
      v-if="login"
      @close="login = !login"
      @gotoregister="showRegister()"
    />
    <recovery
			v-if="recoveryPass"
			@close="recoveryPass = !recoveryPass"
    />
  </div>
</template>

<script>
import Slick from 'vue-slick';
import comments from '../components/Home/Comments'
import registration from '@/components/Registration'
import recovery from '@/components/recovery'
import login from '@/components/Login'
import $ from 'jquery';
export default {
name: 'Home',
components: {Slick, comments, registration, login, recovery},
props: {},
    metaInfo () {
        return{
            title: ' Задать вопрос эксперту онлайн | Круглосуточные бесплатные консультации ',
            meta: [
                { name: 'description', content: ' Задать вопрос и получить бесплатную онлайн консультацию от наших экспертов, можно на сервисе СпросиОнлайн. У нас исключительно лучшие эксперты. ' }
            ]
        }
    },
data() {
  return {
  	register: false,
  	registerExpert: false,
  	login: false,
  	emailSend: null,
  	slickOptions: {
  		arrows: true,
  		dots: false,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear',
  		slidesToShow: 1,
  		slidesToScroll: 1
  	},
  	currentSlideComment: 1,
  	showHidden: false,
  	componentsList: null,
  	recoveryPass: false
  }
},
created() {
	},
mounted() {
	new WOW().init();
	if (document.documentElement.clientWidth > 746) {
		$('.parent_more').hover(
			function(){
			$(".hidden_questions_items").fadeIn(400);
					return false;
			},
		function(){
		$(".hidden_questions_items").fadeOut(400);
				return false;
		});
	}else{
			$(".question_more").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().parent().parent().parent().toggleClass("active_questions");
	});
	}

$(".question_med").on("mouseover", function () {
		$(".image_section_top").not('.img_question_med').fadeOut(400);
		$(".section_top .img_question_med").fadeIn(400);
		return false;
	});
	$(".question_psihology").on("mouseover", function () {
		$(".image_section_top").not('.img_question_psihology').fadeOut(400);
		$(".section_top .img_question_psihology").fadeIn(400);
		return false;
	});
	$(".question_yrist").on("mouseover", function () {
		$(".image_section_top").not('.img_question_yrist').fadeOut(400);
		$(".section_top .img_question_yrist").fadeIn(400);
		return false;
	});
	$(".question_science").on("mouseover", function () {
		$(".image_section_top").not('.img_question_science').fadeOut(400);
		$(".section_top .img_question_science").fadeIn(400);
		return false;
	});
	$(".question_ezot").on("mouseover", function () {
		$(".image_section_top").not('.img_question_ezot').fadeOut(400);
		$(".section_top .img_question_ezot").fadeIn(400);
		return false;
	});
	$(".question_beautiful").on("mouseover", function () {
		$(".image_section_top").not('.img_question_beautiful').fadeOut(400);
		$(".section_top .img_question_beautiful").fadeIn(400);
		return false;
	});
	$(".question_english").on("mouseover", function () {
		$(".image_section_top").not('.img_question_english').fadeOut(400);
		$(".section_top .img_question_english").fadeIn(400);
		return false;
	});

	$(".question_hobi").on("mouseover", function () {
		$(".image_section_top").not('.img_question_hobi').fadeOut(400);
		$(".section_top .img_question_hobi").fadeIn(400);
		return false;
	});
	$(".question_business").on("mouseover", function () {
		$(".image_section_top").not('.img_question_business').fadeOut(400);
		$(".section_top .img_question_business").fadeIn(400);
		return false;
	});
	$(".question_religion").on("mouseover", function () {
		$(".image_section_top").not('.img_question_religion').fadeOut(400);
		$(".section_top .img_question_religion").fadeIn(400);
		return false;
	});
	$(".question_tech").on("mouseover", function () {
		$(".image_section_top").not('.img_question_tech').fadeOut(400);
		$(".section_top .img_question_tech").fadeIn(400);
		return false;
	});
	this.getComments()
	if(this.$route.path == '/confirm'){
		let item = this.$route.query.id.split('code=')
		this.confrimUser(item[0], item[1])
	}
	if(this.$route.path == '/password/recovery'){
		this.recoveryPass = true
	}
  },
methods: {
	confrimUser(id, token){
		this.$http({
          method: 'GET',
          url: 'user/confirm/'+id+'/'+token,
        })
        .then(() =>{
        	this.$toast.success({
            title:'Успешно',
            message: ' Ваш аккаунт подтвержден '
          })
        })
	},
	handleSetPosition(event, slick) {
		this.currentSlideComment = slick.currentSlide + 1;
	},
	showRegister(){
		this.login = false;
		this.register = true
	},
	showLogin(){
		this.login = true;
		this.register = false;
		this.registerExpert = false;
	},
	getComments(){
        this.$http({
          method: 'GET',
          url: 'comments/comments/all',
        })
        .then(response =>{
        	this.commentsList = response.data
        })
		},
	selectCategory(id){
		 this.$store.dispatch('changeSelectCategory', id);
		 this.$router.push('/zadat-vopros-' + id);
	},
	setSubscription(){
			if(!this.emailSend){
				this.$toast.error({
					title:'Ошибка',
    			message:'Вы не указали email'
				})
			}else{
				let params = new URLSearchParams();
        params.append('email', this.emailSend);

        this.$http({
          method: 'POST',
          url: 'support/subscription/subscription-add',
          data: params,
          headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
        	if(response.status === 200){
					this.$toast.success({
						title:'Успешно',
    				message:'Вы подписались на рассылку'
					})
					}
        })
			}
	}
},
computed: {
	comments(){
		return this.$store.getters.COMMENTS;
	}
},
}
</script>
<style scoped>
.questions_items{
	justify-content: flex-start;
}
</style>
