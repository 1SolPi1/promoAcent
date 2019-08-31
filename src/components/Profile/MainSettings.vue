<template>
<div>
		<div class="section_main_expert_cab">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-3 lc">
						<expertProfile/>
					</div>
					<div class="col-xs-12 col-md-9">
						<div class="profile-header">
							<h3>Настройки</h3>
							<!-- <div class="buttons">
								<a class="akcii" href="#">Мои акции</a>
								<a class="pro" href="#">Стать PRO</a>
							</div> -->
						</div>
						<div class="profile-content">
							<div class="section_nav_expert">
								<div class="head_nav_expert">
									<ul class="nav nav-tabs">
										<li class="active"><a href="#tab1" data-toggle="tab">Настройки</a></li>
										<li><a href="#tab2" data-toggle="tab">Автоответы</a></li>
									</ul>
								</div>
							</div>
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane settings active" id="tab1">
									
										<div class="row">
													<div class="col-xs-12 col-md-8 col-lg-7">
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
													<p>О новых вопросах?</p> 
													<div class="checkbox">
														<input id="uved-email-5" name="uved-email-quest-inobl-all" type="checkbox">
														<label for="uved-email-5">Да, о всех вопросах в областях знаний:</label>
														<select id="allquestion" name="oblast" class="select_main select_stag">
															<option
																      v-for="item in category"
																      :key="item.id"
																      :value="item.id"
																     >
																       {{item.name}}
																     </option>
														</select>
													</div>
													<div class="checkbox">
														<input id="uved-email-6" name="uved-email-quest-incat" type="checkbox">
														<label for="uved-email-6">Да, только на вопросы в категориях:</label>
														<select id="categoryquestion" name="cat" class="select_main select_stag">
															<option
																      v-for="item in category"
																      :key="item.id"
																      :value="item.id"
																     >
																       {{item.name}}
																     </option>
														</select>
													</div>
													<div class="checkbox">
														<input id="uved-email-7" name="uved-email-quest-inobl-buy" type="checkbox">
														<label for="uved-email-7">Только о платных вопросах в области знаний:</label>
														<select id="paysquestion" name="oblast-2" class="select_main select_stag">
															     <option
																      v-for="item in category"
																      :key="item.id"
																      :value="item.id"
																     >
																       {{item.name}}
																     </option>
														</select>
													</div>
													<div class="checkbox">
														<input id="uved-email-8" name="uved-email-quest-no" type="checkbox">
														<label for="uved-email-8">Нет</label>
													</div>
												</div>
												<div class="col-xs-12 col-md-4 col-lg-4 col-lg-offset-1">
													<form class="change-class">
													<p>Изменить пароль</p>
													<input type="password" placeholder="старый пароль" v-model="oldPassword">
													<input type="password" placeholder="новый пароль" v-model="newPassword">
													<button class="save-button" @click.prevent="changePassword()">Сохранить</button>
													<button class="reset-button">Сбросить</button>
													</form>
												</div>
										</div>
										<div class="border"></div>
										<button class="save-button" @click.prevent="save()">Сохранить</button>
										<button class="cancel-button">Отменить</button>
										<button class="delete-button">удалить профиль</button>
									</div>
									<div class="tab-pane autoanswer " id="tab2">
										<div class="row">
											<div class="col-xs-12 col-lg-5 pr-5">
												<p>Автоответ гостю</p>
												<textarea name="autoanswer" id="autoanswer" v-model="profiles.greeting_question_chat"></textarea>
												<span class="txt ml-0">до 200 символов</span>
											</div>
											<div class="col-xs-12 col-lg-7 pl-5">
												<p>Автоматическое приветствие новому пользователю</p>
												<textarea name="autoanswer" id="autoanswer">Здравствуйте! Напишите Ваш вопрос и мы начнем консультацию. Чтобы мой ответ не потерялся, рекомендую зарегистрироваться.</textarea>
												<span class="txt ml-0">до 200 символов</span>
											</div>
											<div class="col-xs-12 maru">
												<p>Блокировать бесплатную консультацию</p>
												<select name="free-cons" class="select_main select_stag">
															<option value='1'>после 10 сообщений клиента</option>
															<option value='2'>после 15 сообщений клиента</option>
															<option value='3'>после 20 сообщений клиента</option>
															<option value='4'>после 25 сообщений клиента</option>
															<option value='5'>после 30 сообщений клиента</option>
															<option value='6'>после 35 сообщений клиента</option>
															<option value='7'>после 40 сообщений клиента</option>
														</select>
											</div>
										</div>
										<div class="border"></div>
										<button class="save-button" @click="saveGreeting() ">Сохранить</button>
										<button class="cancel-button">Отменить</button>
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
  name: "MainSettings",
  data(){
		return{
			oldPassword: null,
			newPassword: null,
			selectcategoryes:{
				pay: null,
				all: null,
				category: null
			},
			profiles:{
				audio_signal:false,
				mail_answer:false,
				mail_bonus:false,
				mail_chat:false,
				mail_news:false
			}
		} 
	},
	mounted(){
		this.profiles = this.profile
		  var vm = this;
		  $('select').styler()
       $('#paysquestion').styler({
        onSelectClosed: function() {
            vm.checkPay($(this).find(":selected").val())
            }
       });
       $('#allquestion').styler({
        onSelectClosed: function() {
            vm.checkAll($(this).find(":selected").val())
            }
       });
       $('#categoryquestion').styler({
        onSelectClosed: function() {
 						vm.checkCategory($(this).find(":selected").val())
        }
       });
	},
	methods:{
		checkPay(id){
			alert('pay')
			alert(id)
		},
		checkAll(id){
			alert('all')
			alert(id)
		},
		checkCategory(id){
			alert('categiry')
			alert(id)
		},
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
          url: 'expert/profile/edit',
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
		},
		changePassword(){
				let params = new URLSearchParams();
        params.append('oldPassword', this.oldPassword);
        params.append('newPassword', this.newPassword);

        this.$http({
          method: 'POST',
          url: 'user/profile/change-password',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response =>{
					if (response.status === 200) {
						this.$toast.success({
						title:'Успешно',
						message:'Пароль изменен'
					})
					}
        })
        .catch(error =>{
        	this.$toast.error({
						title:'Ошибка',
						message: error.response.data.return
        })
        })
      },
      saveGreeting(){
      	let params = new URLSearchParams();
        params.append('greeting_question_chat', this.profiles.greeting_question_chat);

        this.$http({
          method: 'POST',
          url: 'expert/profile/edit',
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
	 watch:{
      category(){
      	setTimeout(()=>{
      		$('#paysquestion').trigger('refresh');  
        	$('#categoryquestion').trigger('refresh');  
        	$('#allquestion').trigger('refresh');  
      	}, 100)
      },
    profile(){
			this.profiles = this.profile
		}
    },
	computed:{
		profile(){
			return this.$store.getters.EXPERT
		},
		category(){
			return this.$store.getters.CATEGORI
		}
	}
}
</script>
<style scoped>
	
</style>