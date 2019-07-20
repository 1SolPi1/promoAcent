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
										<userchatitem
											v-for="item in chatList.clientExpertChat"
											:key="item[0].room_id"
											:oponnent="item.opponent"
											:lastmessage="item.last_message"
											:notRead="item.not_read"
											@openchat="$chatinfo.opens({
																		name: 'Имя Фамилия',
																		avatar: 'null',
																		user_id: item[0].client_id,
																		expert_id: item[0].expert_id,
																		author: 0 
																	})"
										/>
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
							<div v-if="listQuestions.length > 0">
										<p>У Вас <span>{{listQuestions.length}}</span> вопрос</p>
											<questionItem
                        v-for="(item, index) in listQuestions"
                        :key="item.question.id"
                        :category="item.category"
                        :countAnswer="item.answer_count"
                        :date="item.question.create_at"
                        :person="item.question.anonim? ' Анонимно ': item.user_name"
                        :price="item.question.price"
                        :status="item.question.status"
                        :title="item.question.title"
                        :id="item.question.id"
                    />
              </div>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="tab3">
										<div class="row">
											<expertItem
											v-for="(item, index) in expertList"
											:key="index"
											:expert="item"
											@openchat="$chatinfo.opens({
													name: item.name || 'Имя Фамилия',
													avatar: item.avatar,
													user_id: $store.getters.PROFILE.user_id,
													expert_id: item.id,
													author: 0 
												})"
										/>
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
	import expertItem from '@/components/Expert/ExpertItem'
export default {
	name: "UserConsultation",
	components: {
		expertItem
	},
	props: {},
	data() {
		return {
			listQuestions:{},
			chatList: {
				clientExpertChat: [],
				expertExpertChat:[]
			},
		}
	},
	created() {},
	mounted() {
		this.getProfile()
		this.getChats();
		this.getExpert()
	},
	methods: {
		getProfile(){
			this.$http({
          method: 'GET',
          url: 'user/profile/show',
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response =>{
					this.getQuestions(response.data.user.id)
        })
		},
		getQuestions(id){
				let params = new URLSearchParams();
        params.append('client_id', id);

        this.$http({
          method: 'POST',
          url: 'question/question/find',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response =>{
					this.listQuestions = response.data[0]
        })
		},
		getChats(){
        this.$http({
          method: 'GET',
          url: 'chat/chat/chats',
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response =>{
					this.chatList = response.data
        })
		},
		getExpert(){
        // let params = new URLSearchParams();
        // params.append('first_name', names[0]);
        // params.append('last_name', names[1]);
        // params.append('email', this.email);

        this.$http({
          method: 'GET',
          url: 'user/profile/get-favorites',
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
					this.expertList = response.data
        })
      },
	},
	computed: {},
}
</script>

<style scoped>
    
</style>
