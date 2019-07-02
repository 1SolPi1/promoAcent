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
										<button class="save-button">Сохранить</button>
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
		return {}
	},
	created() {},
	mounted() {},
	methods: {},
	computed: {},
}
</script>

<style scoped>
    
</style>
