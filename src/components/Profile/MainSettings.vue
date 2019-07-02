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
							<div class="buttons">
								<a class="akcii" href="#">Мои акции</a>
								<a class="pro" href="#">Стать PRO</a>
							</div>
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
														<input id="uved-zvuk" name="zvuk" type="checkbox">
														<label for="uved-zvuk">Проигрывать звуковое уведомление о новых сообщениях</label>
													</div>
													<p>Уведомления на E-mail:</p>
													<div class="checkbox">
														<input id="uved-email-1" name="uved-email-chat" type="checkbox">
														<label for="uved-email-1">О новых сообщениях в чате когда я не онлайн</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-2" name="uved-email-otvet" type="checkbox">
														<label for="uved-email-2">О новых ответах на мои вопросы</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-3" name="uved-email-specs" type="checkbox">
														<label for="uved-email-3">О персональных бонусах и спецпредложениях (раз в месяц)</label>
													</div>
													<div class="checkbox">
														<input id="uved-email-4" name="uved-email-news" type="checkbox">
														<label for="uved-email-4">О новостях и услугах сайта (раз в неделю)</label>
													</div>
													<p>О новых вопросах?</p> 
													<div class="checkbox">
														<input id="uved-email-5" name="uved-email-quest-inobl-all" type="checkbox">
														<label for="uved-email-5">Да, о всех вопросах в областях знаний:</label>
														<select name="oblast" class="select_main select_stag">
															<option value='1'>Учеба и наука.</option>
															<option value='2'>Область знаний</option>
															<option value='3'>Область знаний</option>
															<option value='4'>Область знаний</option>
															<option value='5'>Область знаний</option>
															<option value='6'>Область знаний</option>
															<option value='7'>Область знаний</option>
														</select>
													</div>
													<div class="checkbox">
														<input id="uved-email-6" name="uved-email-quest-incat" type="checkbox">
														<label for="uved-email-6">Да, только на вопросы в категориях:</label>
														<select name="cat" class="select_main select_stag">
															<option value='1'>Информатика.</option>
															<option value='2'>Область знаний</option>
															<option value='3'>Область знаний</option>
															<option value='4'>Область знаний</option>
															<option value='5'>Область знаний</option>
															<option value='6'>Область знаний</option>
															<option value='7'>Область знаний</option>
														</select>
													</div>
													<div class="checkbox">
														<input id="uved-email-7" name="uved-email-quest-inobl-buy" type="checkbox">
														<label for="uved-email-7">Только о платных вопросах в области знаний</label>
														<select name="oblast-2" class="select_main select_stag">
															<option value='1'>Учеба и наука.</option>
															<option value='2'>Область знаний</option>
															<option value='3'>Область знаний</option>
															<option value='4'>Область знаний</option>
															<option value='5'>Область знаний</option>
															<option value='6'>Область знаний</option>
															<option value='7'>Область знаний</option>
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
													<input type="password" placeholder="старый пароль">
													<input type="password" placeholder="новый пароль">
													<button class="save-button">Сохранить</button>
													<button class="reset-button">Сбросить</button>
													</form>
												</div>
										</div>
										<div class="border"></div>
										<button class="save-button">Сохранить</button>
										<button class="cancel-button">Отменить</button>
										<button class="delete-button">удалить профиль</button>
									</div>
									<div class="tab-pane autoanswer " id="tab2">
										<div class="row">
											<div class="col-xs-12 col-lg-5 pr-5">
												<p>Автоответ гостю</p>
												<textarea name="autoanswer" id="autoanswer">Здравствуйте! Напишите Ваш вопрос и мы начнем консультацию. Чтобы мой ответ не потерялся, рекомендую зарегистрироваться.</textarea>
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
										<button class="save-button">Сохранить</button>
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
		} 
	},
	mounted(){
		 $('select:not([id^="multi"]), input[type=number]').styler();
	}
}
</script>
<style scoped>
	
</style>