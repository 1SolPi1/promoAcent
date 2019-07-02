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
							<div class="section_nav_expert">
								<div class="head_nav_expert">
									<ul class="nav nav-tabs">
										<li class="active"><a href="#tab1" data-toggle="tab">Мои сообщения</a></li>
										<li><a href="#tab2" data-toggle="tab">Мои вопросы</a></li>
										<li><a href="#tab3" data-toggle="tab">Мои эксперты</a></li>
									</ul>
								</div>
							</div>
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane chat-tab active" id="tab1">
										<div class="row">
											<div class="col-xs-12">
												<div class="sorting_questions">
								<span class="title_sorting">Сортировать:</span>
								<div class="item_sorting">
									<input type="radio" checked name="radio" value="1" class="radio" id="radio1">
									<label for="radio1">последние</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio" value="1" class="radio" id="radio2">
									<label for="radio2">с оценками</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio" value="1" class="radio" id="radio3">
									<label for="radio3">ждут оценку</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio" value="1" class="radio" id="radio4">
									<label for="radio4">избранные</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio" value="1" class="radio" id="radio5">
									<label for="radio5">черный список</label>
								</div>
							</div>
										<p>У Вас <span>2</span> чата</p>
										<userchatitem/>
											</div>
											
										</div>
									</div>
									<div class="tab-pane chat-tab" id="tab2">
										<div class="row">
											<div class="col-xs-12">
												<div class="sorting_questions">
								<span class="title_sorting">Сортировать:</span>
								<div class="item_sorting">
									<input type="radio" checked name="radio1" value="1" class="radio" id="radio6">
									<label for="radio6">последние</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio1" value="1" class="radio" id="radio7">
									<label for="radio7">платные</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio1" value="1" class="radio" id="radio8">
									<label for="radio8">vip</label>
								</div>
								<div class="item_sorting">
									<input type="radio" name="radio1" value="1" class="radio" id="radio9">
									<label for="radio9">решены</label>
								</div>
							</div>
										<p>У Вас <span>1</span> вопрос</p>
										<div class="block_question slideInUp wow" data-wow-iteration="1">
							<div class="name_question">Лень и прокрастинация - как справиться и обрести силу воли?</div>
							<div class="price_question">0 ₽</div>
							<div class="category_question">Психология / Дети и подростки</div>
							
							<div class="wrap_link_question">
								<a href="#" class="link_gray">Читать полностью</a>
							</div>
							<div class="bottom_question clearfix">
								<div class="data_question">10 февраля 2018</div>
								<div class="user_question">Анонимно</div>
								<a href="#" class="all_questions_user">всего <span>4</span> ответа</a>
							</div>
							<p>Оплатите ваш вопрос, для гарантированного и ускоренного получения ответа <a href="#">Оплатить</a></p>
						</div>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="tab3">
										<div class="row">

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
	name: "UserConsultation",
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
