<template>
		<div class="section_main_expert_cab">
			<div class="container">
				<div class="row">
					<div class="col-md-3 lc">
						<userProfileMenu/>
					</div>
					<div class="col-md-9">
						<userContentHeader/>
						<div class="profile-content">
							<div class="section_nav_expert">
								<div class="head_nav_expert">
									<ul class="nav nav-tabs">
										<li class="active"><a href="#tab1" data-toggle="tab">Профиль</a></li>
										<li><a href="#tab2" data-toggle="tab">Мои бонусы</a></li>
									</ul>
								</div>
							</div>
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane settings active" id="tab1">
										<div class="row">
											<div class="col-xs-12 main-info-user">
												<span>Зарегистрирован: {{dateRegistration}}</span>
												<span>Последний раз был в сети: {{userInfo.data_last_login}}</span>
												<span>Статус: Стандарт<span class="info"></span></span>
											</div>
											<div class="col-xs-12 col-md-4 mb-us-20">
												<p>Имя</p>
												<input type="text" placeholder="Ваше имя" v-model="fullname">
											</div>
											<div class="col-xs-12 col-md-4 mb-us-20">
												<p>Email</p>
												<input type="text" placeholder="Ваш e-mail" v-model="email">
											</div>
											<button class="delete-button user-inblock">удалить профиль</button>
										</div>
										<div class="border"></div>
										<button class="save-button" @click="save()">Сохранить</button>
										<button class="cancel-button">Отменить</button>
									</div>
									<div class="tab-pane bonuses_users" id="tab2">
										<div class="row">
											<div class="col-xs-12">
												<p>Мой статус: <b>Стандарт</b></p>
												<p>Мои VIP кредиты: <b>0</b></p>
												<span>Чтобы достичь следующего уровня вам нужно потратить еще <b>50 руб.</b></span>
												<div class="table-header user">
													<div>Статус</div>
													<div>VIP-вопросы</div>
													<div>Жалобы в арбитраж в течение</div>
													<div>Ваши отзывы об экспертах показываются первыми</div>
												</div>
												<div class="table-header tbl color user">
													<div><b>o</b>Стандарт</div>
													<div>0</div>
													<div>3 дней</div>
													<div>0</div>
												</div>
												<div class="table-header tbl color user">
													<div><b>+</b>Стандарт плюс</div>
													<div>0</div>
													<div>3 дней</div>
													<div>0</div>
												</div>
												<div class="table-header tbl color user">
													<div><b>s</b>Серебрянный</div>
													<div>2</div>
													<div>3 дней</div>
													<div>0</div>
												</div>
												<div class="table-header tbl color user">
													<div><b>g</b>Золотой</div>
													<div>20</div>
													<div>7 дней</div>
													<div>0</div>
												</div>
												<div class="table-header tbl color user">
													<div><b>d</b>Бриллиантовый</div>
													<div>1000</div>
													<div>7 дней</div>
													<div>30 дней</div>
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
	name: "UserProfile",
	components: {},
	props: {},
	data() {
		return {
			fullname: null,
			email: null
		}
	},
	created() {},
	mounted() {
		this.email = this.userInfo.email
		this.fullname = this.profile.first_name
	},
	methods: {
		save(){
			let data = {name: this.fullname, surname: '', email: this.email};
			this.$store.dispatch('saveSettings', data);

        let params = new URLSearchParams();
        params.append('first_name', this.fullname);
        params.append('last_name', '');
        params.append('email', this.email);

        this.$http({
          method: 'POST',
          url: 'user/profile/edit',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        	this.$toast.success({
						title:'Успешно',
						message:'Новая информация сохранена'
					})
        })
		}
	},
	computed: {
		profile(){
			return this.$store.getters.PROFILE
		},
		userInfo(){
			return this.$store.getters.USERINFO
		},
		dateRegistration(){
			return new Date(this.$store.getters.USERINFO.created_at * 1000).getFullYear()
		}
	},
}
</script>

<style scoped>
    
</style>
