<template>
	<div class="section_main_expert_cab" v-if="expert">
			<div class="container">
				<div class="row">
					<div class="col-md-3 lc">
						<expertProfile/>
					</div>
					<div class="col-md-9">
						<div class="profile-header" v-if="expert.is_confirmed">
							<h3>Редактировать профиль</h3>
							<div class="buttons" v-if="$route.path == '/profile'">
								<a class="akcii" href="javascript:void(0)" @click="changeShow('akcii')">Мои акции</a>
								<a class="pro" href="javascript:void(0)" @click="changeShow('pro')">Стать PRO</a>
							</div>
						</div>
							<div class="profile-header boxNotConfirmed" v-else>
									<p class="textNotConfirmed">Ваш профиль ожидает подтверждение модератором, после подтверждения вы сможете пользоваться всеми возможностями сервиса</p>
						</div>
						<div class="profile-content">
							<div class="section_nav_expert">
								<div class="head_nav_expert">
									<ul class="nav nav-tabs">
										<li :class="{active: listSectionMenu.home}"><a href="javascript:void(0)" @click="changeShow('home')">Редактировать</a></li>
										<li :class="{active: listSectionMenu.akcii}"><a href="javascript:void(0)" @click="changeShow('akcii')">Мои акции</a></li>
										<li :class="{active: listSectionMenu.pro}"><a href="javascript:void(0)" @click="changeShow('pro')">Стать PRO</a></li>
									</ul>
									<a 
										v-if="expert.status !== 3"
									href="javascript:void(0)" class="vacation" @click="goToVacation(3)">
										<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="23" x2="17" y1="11" y2="11" />
										</svg>
										Уйти в отпуск<span class="info"></span>
									</a>
									<a 
										v-else
									href="javascript:void(0)" class="vacation" @click="goToVacation(1)">
										<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="23" x2="17" y1="11" y2="11" />
										</svg>
										Вернутся из отпуска<span class="info"></span>
									</a>
								</div>
							</div>
							<div class="section_content_tabs">
								<div class="tab-content">
									<div class="tab-pane edit" :class="{active: listSectionMenu.home}" id="tab1">
									<div class="clearfix">
										<div class="col-xs-12 col-md-4">
											<p>ФИО<span>*</span></p>
											<input type="text" placeholder="введите ФИО" v-model="name">
										</div>
										<div class="col-xs-12 col-md-4 mar-left">
											<p>Логин<span>*</span></p>
											<input type="text" placeholder="укажите логин" v-model="login">
										</div>
											<experience
												@changevalue="changeExperience"
												:experience="expert.experience"
											/>
										<div class="col-xs-12">
											<p class="no-marg ">Длительность консультирования<span>*</span></p>
											<input id="minute" type="number" min="0" step="5" value="0" v-model.number="minute" ref="minute"/>
											<span class="txt">мин.</span>
											<div class="tme">
											<p class="no-marg scnd">Время консультирования</p>
											<span class="timeline">
												<input type="text" :value="timeStart" class="timeRange" id="timeFrom" ref="timeFrom">
											</span>
											<span class="txt">-</span>
											<span class="timeline">
												<input type="text" :value="timeEnd" class="timeRange" id="timeTo" ref="timeTo">
											</span>
											</div>
										</div>
										<div class="col-xs-12">
											<p class="no-marg">Стоимость консультации<span>*</span></p>
											<span class="txt">от</span>
											<input class="lil-inp" type="text" v-model="startPrice">
											<span class="txt">до</span>
											<input class="lil-inp" type="text" v-model="endPrice">
											<span class="txt">руб.</span>
											<span class="txt ml-0">Укажите от 0 до 0, если Вы даете только бесплатные консультации.</span>
										</div>
										<categoryExpert
											@changeKnowledge="changeKnowledge"
											@changeSubKnowledge="changeSubKnowledge"
											:childcategory="selectChildCategory"
											:selectedCategory="selectCategory"
											:category="categori"
											:mysubcategori = "mysubcategories"
											v-if="categori"
										/>
										<div class="col-xs-12">
											<p>Текст визитка<span>*</span></p>
											<textarea name="akcia-text" v-model="baseText"></textarea>
											<span class="txt ml-0">Ваше описание в списке экспертов, яркое и краткое (до 200 символов)</span>
										</div>
										<div class="col-xs-12">
											<p>О себе</p>
											<textarea name="akcia-text" v-model="about"></textarea>
											<span class="txt ml-0">Текст о вас и вашей деятельности(до 400 символов)</span>
										</div>
										<div class="col-xs-12 obrazov">
											<p>Образование</p>
											
											<div class="clearfix">
												<div class="col-xs-12 col-md-7 col-lg-8">
													<p>Учебное заведение</p>
													<input type="text" placeholder="укажите название" v-model="education.nameUniversity">
												</div>
												<degreeExpert
													@changeDegree="changeDegree"
													:selectdegree="education.degree"
												/>
												<div class="col-xs-12 col-md-7 col-lg-8">
													<p>Специальность</p>
													<input type="text" placeholder="укажите специальность" v-model="education.specialty">
												</div>
												<yearEducation
													@changeStartYear="changeStartYear"
													@changeEndYear="changeEndYear"
													:selectstart="education.startYear"
													:selectend="education.endYear"
												/>
											</div>											
											<span class="txt ml-0">Чтобы образование было подверждено <a href="javascript:void(0)"><label for="AddFile" style="cursor: pointer;">прикрепите</label> </a> копии документов подтверждающие получение образования.<span>*</span></span>
											<input type='file' @change="loadFiles" id="AddFile" style="display: none">
											<span 
												class="txt ml-0"
												v-for="item in filesData"
												:key="item.name"
											>
												{{item.name}}
											</span>
										</div>
										</div>
										<button class="save-button" @click="changeExpert()">Сохранить</button>
										<button class="cancel-button">Отменить</button>
									</div>
									<div class="tab-pane akcii" :class="{active: listSectionMenu.akcii}" id="tab2">
									<share

									/>
									</div>
									<div class="tab-pane pro" :class="{active: listSectionMenu.pro}" id="tab3">
										<div class="clearfix">
										<div class="col-xs-12 col-md-8 col-lg-8">
											<p>Статус PRO позволяет привлечь гораздо больше клиентов за счет того что:</p>
											<ul>
												<li>- Вы показываетесь одним из первых в списке экспертов</li>
												<li>- Ваш профиль показывается на главной, ротируясь в равных пропорциях с остальными PRO экспертами</li>
												<li>- Иконка PRO делает Ваш профиль более привлекательным для клиентов</li>
											</ul>
											<p>По статистике эксперты со статусом PRO зарабатывают <b>в 6 раз больше.</b></p>
										</div>
										<div class="col-xs-12 col-md-4 col-lg-4">
											<div class="buy">
												<p>статус PRO на 7 дней</p>
												<div class="price first">
													<span>390₽</span>
													<a href="javascript:void(0)" @click="alert()">Приобрести</a>
												</div>
												<p>статус PRO на 30 дней</p>
												<div class="price">
													<span>990₽</span>
													<a href="javascript:void(0)" @click="alert()">Приобрести</a>
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
		</div>
</template>
<script>
	import experience from '@/components/User/CreateExpert/Experience'
	import categoryExpert from '@/components/User/CreateExpert/Category'
	import degreeExpert from '@/components/User/CreateExpert/Degree'
	import yearEducation from '@/components/User/CreateExpert/YearEducation'
	import share from '@/components/Profile/Share'
export default {
  name: "Profile",
  components: {
		experience,
		categoryExpert,
		degreeExpert,
		yearEducation,
		share
	},
  data(){
		return{
			category: null,
	        childCategory: null,
	        selectCategory: {
	        	id: 1
	        },
	        selectSubCategory: null,
	        selectChildCategory: null,
			name: null,
			login: null,
			minute: 0,
			timeStart: '00:00',
			timeEnd: '00:00',
			startPrice: 0,
			endPrice: 0,
			experience: 2005,
			knowledge:[],
			subKnowledge:[],
			baseText: null,
			about: null,
			education:{
				nameUniversity: null,
				specialty: null,
				degree: null,
				startYear: 2005,
				endYear: 2005
			},
			listSectionMenu:{
				home: true,
				akcii: false,
				pro: false
			},
			filesData: [],
			actions:{
				id:0,
				name: null,
				description: null,
				price_to: null,
				price_from: null
			}
		} 
	},
	watch:{
	expert(){
		this.experience = this.expert.experience;
		this.name = this.profile.first_name + " " + this.profile.last_name;
		this.login = this.userinfo.username;
		this.minute = this.expert.duration_consultation;
		this.startPrice = this.expert.price_from;
		this.endPrice = this.expert.price_to;
		this.baseText = this.expert.cutaway;
		this.about = this.expert.about_us;
		this.timeStart = this.expert.work_time_from;
		this.timeEnd = this.expert.work_time_to;
	},
	experteducation(){
		this.education.nameUniversity = this.experteducation.institution_name;
		this.education.specialty = this.experteducation.specialization;
		this.education.degree = this.experteducation.name_educational;
		this.education.startYear = this.experteducation.educate_start;
		this.education.endYear = this.experteducation.educate_finish
	},
	categori(){
		// setTimeout(() => {  
  //         this.getSelectCategory(this.mycategory.id)
  //   }, 500)
  if (this.mycategory !== undefined) {
  	this.getSelectCategory(this.mycategory.id)
  this.knowledge = this.mycategory.id
  }
	}
	},
	mounted(){
		// const vm = this;
		// eslint-disable-next-line
		$('select:not([id^="multi"]), input[type=number]').styler();
		// eslint-disable-next-line
		$('#multi,#multi-2').multiselect();
		// eslint-disable-next-line
		$('.timeRange').timeEntry({
      show24Hours: true,
      beforeShow: customRange,
      spinnerImage: 'img/spinnerUpDown.png',
      spinnerSize: [20, 30, 0],
      spinnerBigSize: [30, 32, 0],
      spinnerIncDecOnly: true
    });
    function customRange(input) {
      return {
        minTime: (input.id === 'timeTo' ?
		// eslint-disable-next-line
          $('#timeFrom').timeEntry('getTime') : null),
        maxTime: (input.id === 'timeFrom' ?
		// eslint-disable-next-line
          $('#timeTo').timeEntry('getTime') : null)
      };
    }

		this.experience = this.expert.experience;
		this.name = this.profile.first_name + " " + this.profile.last_name;
		this.login = this.userinfo.username;
		this.minute = this.expert.duration_consultation;
		this.startPrice = this.expert.price_from;
		this.endPrice = this.expert.price_to;
		this.baseText = this.expert.cutaway;
		this.about = this.expert.about_us;
		this.timeStart = this.expert.work_time_from;
		this.timeEnd = this.expert.work_time_to;
		this.education.nameUniversity = this.experteducation.institution_name;
		this.education.specialty = this.experteducation.specialization;
		this.education.degree = this.experteducation.name_educational;
		this.education.startYear = this.experteducation.educate_start;
		this.education.endYear = this.experteducation.educate_finish
		if (this.mycategory !== null ) {
			this.getSelectCategory(this.mycategory.id)
		}
		this.getStatusAnswer()
	},
	methods: {
		changeExperience(item){
			this.experience = item
		},
		changeKnowledge(item){
	      this.selectCategory = this.categori.find(map => map.id == item)
	      setTimeout(()=>{  
	        this.getChildCategory(this.selectCategory);
	        this.selectSubCategory = null;
	      }, 300)
	    },
	    getSelectCategory(id){
	      this.selectCategory = this.categori.find(item => item.id === id)
	      this.getChildCategory(this.selectCategory)
	    },
	    getChildCategory(arr){
	      this.selectChildCategory = this.childCategories.filter(map => map.parent_id === arr.id)
	    },
		changeSubKnowledge(item){
			this.addSubCategory(item)
		},
		changeDegree(item){
			this.education.degree = item
		},
		changeStartYear(item){
			this.education.startYear = item
		},
		changeEndYear(item){
			this.education.endYear = item
		},
		changeExpert(){

			let params = new URLSearchParams();
        params.append('experience', this.experience);
        params.append('duration_consultation', this.$refs.minute.value);
        params.append('about_us', this.about);
        params.append('cutaway', this.baseText);
        params.append('work_time_from', this.$refs.timeFrom.value);
        params.append('work_time_to', this.$refs.timeTo.value);
        params.append('price_from', this.startPrice);
        params.append('price_to', this.endPrice);

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
					this.createEducationExpert()
					if (this.filesData.length > 0) {
						this.filesData.forEach(item => this.setDocument(item.file))
					}
					this.editName()
					this.addCategoryExpert()
        })
		},
		createEducationExpert(){
			let params = new URLSearchParams();
        params.append('institution_name', this.education.nameUniversity);
        params.append('name_educational', this.education.degree);
        params.append('educational_type_id', this.education.startYear);
        params.append('specialization', this.education.specialty);
        params.append('educate_start', this.education.startYear)
        params.append('educate_finish', this.education.endYear)

        this.$http({
          method: 'POST',
          url: 'expert/education/add',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
		},
		addSubCategory(id){
			let params = new URLSearchParams();
        params.append('sub_category_id', id);

        this.$http({
          method: 'POST',
          url: 'expert/sub-category/add',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        	this.$toast.success({
						title:'Успешно',
						message:'Подкатегория добавлена'
					})
        })
        .catch(e=>{
        	this.$toast.error({
						title:'Ошибка',
						message: e.response.data.return
					})
        })
		},
		addCategoryExpert(){
			let params = new URLSearchParams();
        params.append('expert_id', this.expert.id);
        params.append('category_id', this.selectCategory.id);

        this.$http({
          method: 'POST',
          url: '/expert/category/add',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        })
		},
		editName(){
			let params = new URLSearchParams();
        params.append('first_name', this.name);
        params.append('last_name', '');
        params.append('login', this.login);

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
					this.$store.dispatch('getProfile');
					this.$toast.success({
						title:'Успешно',
						message:'Новая информация сохранена'
					})
        })
		},
		getStatusAnswer(){
        this.$http({
          method: 'GET',
          url: 'question/answer/status-field',
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        })
		},
		changeShow(item){
			for (let i in this.listSectionMenu){
				this.listSectionMenu[i] = false
			}
			this.listSectionMenu[item] = true
		},
		alert(){
			this.$toast.error({
						title:'Ошибка',
						message:'Не достаточно денег на счету'
					})
			setTimeout(()=>{
				this.$router.push('/userpays')
			}, 1000)
		},
		loadFiles: function(event) {
            let files = event.target.files[0];
            let type = files.name.split(".");
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.filesData.push({
                    	file: e.target.result,
                    	type: type[type.length - 1],
                    	size: (files.size / 1000).toFixed(2),
                    	name: files.name
                    });
                    console.log(e.target.result)
                }
                reader.readAsDataURL(files);
        },
     setDocument(file){

			let params = new URLSearchParams();
        params.append('file', file);

        this.$http({
          method: 'POST',
          url: 'expert/file/set-document',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
		},
		goToVacation(id){
			let params = new URLSearchParams();
        params.append('status', id);

        this.$http({
          method: 'POST',
          url: 'expert/profile/change-status',
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
						message:'Информация изменена'
					})
        })
		}
	},
	computed: {
		categori(){
			return this.$store.getters.CATEGORI
		},
		expert(){
			return this.$store.getters.EXPERT
		},
		profile(){
			return this.$store.getters.PROFILE
		},
		userinfo(){
			return this.$store.getters.USERINFO
		},
		experteducation(){
			return this.$store.getters.EXPERTEDUCATION
		},
	  childCategories(){
	      return this.$store.getters.CHILDCATEGORI
	  },
	  mycategory(){
	  	return this.$store.getters.MYCATEGORY
	  },
	  mysubcategories(){
	  	return this.$store.getters.MYSUBCATEGORIES
	  }
	},
}
</script>
<style scoped>
.boxNotConfirmed{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 5px;
	background: red;
}	

.textNotConfirmed{
	color: white;
}
</style>