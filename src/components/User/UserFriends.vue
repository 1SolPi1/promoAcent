<template>
   <div>
   	<div class="section_main_expert_cab">
			<div class="container">
				<div class="row">
					<div class="col-md-3 lc">
						<userProfileMenu v-if="!$store.getters.USERINFO.expert"/>
						<expertProfile v-else/>
					</div>
					<div class="col-md-9">
						<userContentHeader 

						/>
						<div class="profile-content">
							<div class="section_nav_expert">
								<div class="head_nav_expert">
									<ul class="nav nav-tabs">
										<li class="active"><a href="#tab1" data-toggle="tab">Пригласить друзей</a></li>
										<li><a href="#tab2" data-toggle="tab">Мои друзья</a></li>
									</ul>
								</div>
							</div>
							<div class="section_content_tabs">
								<div class="tab-content">
										<div class="clearfix friends_bonuses">
											<div class="ritem">Вы пригласили <span>0</span> друзей</div>
											<div class="ritem">Заработали <span>0₽</span></div>
											<div class="ritem">Получили <span>0</span> бесплатных VIP вопросов</div>
										</div>
									<div class="tab-pane user_friends active" id="tab1">
										<div class="row">
											<div class="col-xs-12">
												<div class="fr-block main">
													<p>Пригласи друга и получит бесплатный VIP вопрос, а также до 500 рублей за каждого</p>
													<a href="#">Ознакомится с условиями программы</a>
												</div>
											</div>
											<div class="col-xs-12 col-md-5 no-mr">
												<div class="fr-block">
													<input id="post-shortlink" :value="'http://sprosi-online.ru/?token=' + client.friend_token">
													<p>Публикуйте ссылку на Ваш профиль</p>
													<a href="javascript:void(0)" @click="alert()" id="copy-button" data-clipboard-target="#post-shortlink">Скопировать ссылку</a>
												</div>
											</div>
											<div class="col-xs-12 col-md-7">
												<div class="fr-block">
													<p>Отправить приглашение другу</p>
													<form>
														<input placeholder="адрес получателя" type="text" v-model="email">
														<button @click.prevent="send()">Отправить приглашение</button>
													</form>
												</div>
											</div>
											<div class="col-xs-12 col-md-7 no-mr">
												<div class="fr-block">
													<p>Размещайте кнопку с приглашением на форумах</p>
													<a href="javascript:void(0)" id="copy-button" @click="alert()" data-clipboard-target="#post-shortlink">Скопировать ссылку</a>
												</div>
											</div>
											<div class="col-xs-12 col-md-5">
												<div class="fr-block">
													<p>Приглашайте из социальных сетей</p>
													<div class="soc-btns">
														<img src="img/social_btns.jpg" alt="">
													</div>
													
												</div>
											</div>
											<div class="col-xs-12">
												<p>Всего пользователи «Спроси Онлайн» приглашая друзей: заработали <span>4 439 916 руб.</span></p>
											</div>
										</div>
									</div>
									<div class="tab-pane my_friends" id="tab2">
										<div class="row">
											<div class="col-xs-12">
												<div class="table-header">
													<div>дата регистрации</div>
													<div>имя пользователя</div>
													<div>статус</div>
													<div>мои бонусы</div>
												</div>
<!-- 									<div class="table-header tbl color">
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
			V168.15h0.002C160.373,168.212,160.355,168.274,160.355,168.337z"></path>
</svg>
												10 февраля 12:45
											</div>
											<div><a href="#">Алексей Миронов</a></div>
											<div><span>Серебряный<span class="info"></span></span></div>
											<div><span>20₽</span></div>
										</div> -->
										<router-link href="javascript:void(0)" to="/programsharefriends">Ознакомится с условиями программы</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   </div>
</template>

<script>
export default {
	name: "UserFriends",
	components: {},
	props: {},
	data() {
		return {
			email: null
		}
	},
	created() {},
	mounted() {
		 new Clipboard('#copy-button');
	},
	methods: {
		alert(){
			this.$toast.success({
				title:'Успешно',
				message:'Ссылка скопирована'
			})
		},
		send(){
			if (!this.email) {
				this.$toast.error({
						title:'Ошибка',
						message:'Укажите email'
					})
			}else{
				this.$toast.success({
						title:'Успешно',
						message:'Письмо отправлено другу'
					})
			}
		}
	},
	computed: {
		client(){
			return this.$store.getters.CLIENT
		}
	},
}
</script>

<style scoped>
#post-shortlink{
	position: absolute;
	right: 9999999px;
}
</style>
