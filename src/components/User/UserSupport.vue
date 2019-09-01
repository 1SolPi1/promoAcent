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
						<userContentHeader/>
						<div class="profile-content">
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane settings_user active" id="tab1">
										<div class="row">
											<div class="col-xs-12">
												<p>Возможно, ответ на Ваш вопрос уже готов и Вы найдете его в разделе <a data-offcanvas-trigger="right" href="#right">Помощь</a></p>
											</div>
											<div class="col-xs-12 col-md-4">
												<p>Имя</p>
												<input type="text" placeholder="введите имя" v-model="name">
											</div>
											<div class="col-xs-12 col-md-4">
												<p>Email<span>*</span></p>
												<input type="text" placeholder="введите e-mail" v-model="email">
											</div>
											<div class="col-xs-5">
												<p>Цель обращения</p>
												<select id="multi">
													<option value="0">Выберите цель обращения</option>
													<option value="1">Необходима помощь</option>
													<option value="2">Предложение по улучшению сервиса</option>
													<option value="3">Сообщение о неполадке на сайте</option>
													<option value="4">Проблема с олпатой услуги</option>
													<option value="5">Добавить новую категорию</option>
													<option value="6">Пожаловаться на нарушителя</option>
													<option value="7">Совместное сотрудничество</option>
												</select>
											</div>
											<div class="col-xs-8">
												<p>Тема обращения<span>*</span></p>
												<input type="text" placeholder="укажите тему" v-model="type">
											</div>
											<div class="col-xs-12">
												<p>Описание<span>*</span></p>
												<textarea name="opis" placeholder="опишите вопрос" v-model="quest"></textarea>
											</div>
										</div>
										<div class="border"></div>
										<button class="save-button" @click="send()">Отправить</button>
										<!-- <button class="cancel-button">Отменить</button> -->
									</div>
								</div>
							</div>
						</div>
<!-- 					<div class="help-man">
							<h3>Обратитесь к сотруднику поддержки в чате</h3>
							<div class="answ-wrap">
									<div class="image_expert ">
							<div class="status__expert online_expert"></div>
							<div class="rating_expert">8.9</div>
							<ul class="rating_item value-4">
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
								<li><i class="glyphicon glyphicon-star"></i></li>
							</ul>
							<img src="img/expert2.png" alt="alt">
						</div>
							<div class="info-blk">
								<p class="name">Игорь Летучий<a href="#" class="link_share" tabindex="0"></a></p>
								<p class="text-descr"><b>Модератор</b>Поддержка работает для Вас бесплатно. Обращайтесь. Помогу справиться с вопросами по оплате, функционалу сайта и по вопросам нарушений или несоответствия качества консультации. Обязательно отвечу на все вопросы и обращения.</p>
								<div class="btn_chat_wrap">
								<a href="#" class="btn_chat">написать в чат</a>
							</div>
							</div>
								</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
   </div>
</template>

<script>
export default {
	name: "UserSupport",
	components: {},
	props: {},
	data() {
		return {
			name: null,
			email: null,
			type: '',
			quest: '',
			category: null
		}
	},
	created() {},
	mounted() {
		// eslint-disable-next-line
		 $('select:not([id^="multi"]), input[type=number]').styler();
		 $( document ).trigger( "enhance" );
// eslint-disable-next-line
		var vm = this;
      $('#multi').multiselect({
        onChange: function(element) {
              vm.change(element.val())
            },
      });
	},
	methods: {
		send(){
			if (!this.name) {
			this.$toast.error({
				title:'Ошибка',
				message:'Укажите имя'
			})
			}else if (!this.email) {
			this.$toast.error({
				title:'Ошибка',
				message:'Укажите email'
			})
			}else if (!this.category) {
				this.$toast.error({
				title:'Ошибка',
				message:'Укажите цель обращения'
			})
			}else if (this.type.length < 10) {
			this.$toast.error({
				title:'Ошибка',
				message:'Тема должна содержать не меньше 10 символов'
			})
			}else if (this.quest.length < 20) {
				this.$toast.error({
				title:'Ошибка',
				message:'Описание должно содержать не меньше 20 символов'
			})
			}else{
        let params = new URLSearchParams();
        params.append('', this.name);
        params.append('', this.email);
        params.append('', this.type);
        params.append('', this.quest);
        params.append('', this.category);

        this.$http({
          method: 'POST',
          url: 'user/profile/edit',
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
						message:'Ваша заявка отправлена в тех поддержку, ожидайте обратной связи'
					})
						this.name = null;
						this.email = null;
						this.type = '';
						this.quest = '';
						this.category = null;
        	}
        })
      }  
		},
		change(id){
			this.category = id
		}
	},
	computed: {},
}
</script>

<style scoped>
    
</style>

