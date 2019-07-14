<template>
   <div>
		<div class="section_main_expert_cab">
			<div class="container">
				<div class="row">
					<div class="col-md-3 lc">
						<userProfileMenu/>
					</div>
					<div class="col-md-9">
						<userContentHeader/>
						<div class="profile-content">
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane settings active" id="tab1">
										<div class="row">
													<div class="col-xs-12 col-md-7">
													<p>Звуковое сопровождение:</p>
													<div class="checkbox">
														<input id="uved-zvuk" name="zvuk" type="checkbox" v-model="profiles.audio_signal">
														<label for="uved-zvuk">Проигрывать звуковое уведомление о новых сообщениях</label>
													</div>
													<p>Уведомления на E-mail:</p>
													<div class="checkbox">
														<input id="uved-email-1" name="uved-email-chat" type="checkbox" v-model="profiles.mail_chat">
														<label for="uved-email-1">О новых сообщениях в чате когда я не онлайн</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-2" name="uved-email-otvet" type="checkbox" v-model="profiles.mail_answer">
														<label for="uved-email-2">О новых ответах на мои вопросы</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-3" name="uved-email-specs" type="checkbox" v-model="profiles.mail_bonus">
														<label for="uved-email-3">О персональных бонусах и спецпредложениях (раз в месяц)</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-4" name="uved-email-news" type="checkbox" v-model="profiles.mail_news">
														<label for="uved-email-4">О новостях и услугах сайта (раз в неделю)</label>
													</div>
												</div>
												<div class="col-xs-12 col-md-4 col-md-offset-1">
													<p>Изменить пароль</p>
													<input type="password" placeholder="старый пароль">
													<input type="password" placeholder="новый пароль">
													<button class="save-button">Сохранить</button>
													<button class="reset-button">Сбросить</button>
												</div>
										</div>
										<div class="border"></div>
										<button class="save-button" @click="save()">Сохранить</button>
										<button class="cancel-button">Отменить</button>
										<button class="delete-button">удалить профиль</button>
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
	name: "UserSettings",
	components: {},
	props: {},
	data() {
		return {
			profiles:{
				audio_signal:false,
				mail_answer:false,
				mail_bonus:false,
				mail_chat:false,
				mail_news:false
			}
		}
	},
	watch:{
		profile(){
			this.profiles = this.profile
		}
	},
	created() {},
	mounted() {
		this.profiles = this.profile
	},
	methods: {
		save(){
        let audio_signal; 
				this.profiles.audio_signal ? audio_signal = 1 : audio_signal = 0
        let mail_answer; 
        this.profiles.mail_answer ? mail_answer = 1 : mail_answer = 0
        let mail_bonus; 
        this.profiles.mail_bonus ? mail_bonus = 1 : mail_bonus = 0
        let mail_chat; 
        this.profiles.mail_chat ? mail_chat = 1 : mail_chat = 0
        let mail_news; 
        this.profiles.mail_news ? mail_news = 1 : mail_news = 0


        let params = new URLSearchParams();
        params.append('audio_signal', audio_signal);
        params.append('mail_answer', mail_answer);
        params.append('mail_bonus', mail_bonus);
        params.append('mail_chat', mail_chat);
        params.append('mail_news', mail_news);

        this.$http({
          method: 'POST',
          url: 'client/profile/edit',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        	this.$store.dispatch('getProfile');
        	this.$toast.success({
						title:'Успешно',
						message:'Новая информация сохранена'
					})
        })
		}
	},
	computed: {
		profile(){
			return this.$store.getters.CLIENT
		}
	},
}
</script>

<style scoped>
    
</style>
