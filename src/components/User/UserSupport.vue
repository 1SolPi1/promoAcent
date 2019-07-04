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
												<p>Возможно, ответ на Ваш вопрос уже готов и Вы найдете его в разделе <a href="#">Помощь</a></p>
											</div>
											<div class="col-xs-12 col-md-4">
												<p>Имя</p>
												<input type="text" placeholder="введите имя">
											</div>
											<div class="col-xs-12 col-md-4">
												<p>Email<span>*</span></p>
												<input type="text" placeholder="введите e-mail" >
											</div>
											<div class="col-xs-5">
												<p>Цель обращения</p>
												<select id="multi" multiple="multiple">
													<option value="1">знание1</option>
													<option value="2">знание2</option>
													<option value="3">знание3</option>
													<option value="4">знание4</option>
													<option value="5">знание5</option>
													<option value="6">знание6</option>
												</select>
											</div>
											<div class="col-xs-8">
												<p>Тема обращения<span>*</span></p>
												<input type="text" placeholder="укажите тему">
											</div>
											<div class="col-xs-12">
												<p>Описание<span>*</span></p>
												<textarea name="opis" placeholder="опишите вопрос"></textarea>
											</div>
										</div>
										<div class="border"></div>
										<button class="save-button">Отправить</button>
										<button class="cancel-button">Отменить</button>
									</div>
								</div>
							</div>
						</div>
						<div class="help-man">
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
						</div>
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
		return {}
	},
	created() {},
	mounted() {
		// eslint-disable-next-line
		 $('select:not([id^="multi"]), input[type=number]').styler();
// eslint-disable-next-line
		$('#multi,#multi-2').multiselect();
	},
	methods: {},
	computed: {},
}
</script>

<style scoped>
    
</style>

