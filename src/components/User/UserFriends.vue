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
										<!-- 	<div class="col-xs-12 col-md-5">
												<div class="fr-block">
													<p>Приглашайте из социальных сетей</p>
													<div class="social_btns">
														<socialButton
															linkVk="http://sprosi-online.ru/?token="
															:idVk="client.friend_token"
														/>
													</div>
													
												</div>
											</div> -->
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
									<confirmFriend
										v-for="item in usersList"
										:key="item.created_at"
										:friend="item"
									/>
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
	import confirmFriend from '@/components/User/UserFriends/ConfirmFriends'
export default {
	name: "UserFriends",
	components: {
		confirmFriend
	},
	props: {},
	data() {
		return {
			email: null,
			usersList: []
		}
	},
	created() {},
	mounted() {
		 new Clipboard('#copy-button');
		 this.getUsersFriend()
	},
	methods: {
		getUsersFriend(){
			this.$http({
          method: 'GET',
          url: 'client/friend/all',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
              Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.usersList = response.data
        })
		},
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
