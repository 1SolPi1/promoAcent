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
											<div class="tab-pane edit active user_exp" id="tab1">
											<div class="alert_users_exp">
												<h5>В сервисе LiveExpert.ru запрещено:</h5>
												<p>Регистрация экспертов без профильного высшего или средне-специального образования в разделах "Юриспруденция", "Психология", "Медицина".</p>
												<p>Регистрация экспертов в разделе "Эзотерика" без подтверждения своей фотографии.</p>
												<p>Размещение в профиле эксперта контактных данных: E-mail, телефон, ICQ, Skype, ссылка на социальные сети, веб-сайты.</p>
												<p>Регистрация с чужими или фиктивными данными.</p>
												<p>Регистрация нескольких учетных записей для одного пользователя.</p>
											</div>
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
											/>
										<div class="col-xs-12">
											<p class="no-marg ">Длительность консультирования<span>*</span></p>
											<input id="minute" type="number" min="0" step="5" value="0" v-model.number="minute" ref="minute"/>
											<span class="txt">мин.</span>
											<div class="tme">
											<p class="no-marg scnd">Время консультирования</p>
											<span class="timeline">
												<input type="text" value="00:00" class="timeRange" id="timeFrom" ref="timeFrom">
											</span>
											<span class="txt">-</span>
											<span class="timeline">
												<input type="text" value="00:00" class="timeRange" id="timeTo" ref="timeTo">
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
												/>
												<div class="col-xs-12 col-md-7 col-lg-8">
													<p>Специальность</p>
													<input type="text" placeholder="укажите специальность" v-model="education.specialty">
												</div>
												<yearEducation
													@changeStartYear="changeStartYear"
													@changeEndYear="changeEndYear"
												/>
											</div>											
											<span class="txt ml-0">Чтобы образование было подверждено <a href="javascript:void(0)"><label for="AddFile" style="cursor: pointer;">прикрепите</label> </a> копии документов подтверждающие получение образования.</span>
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
										<button class="save-button" @click="convertUserToExpert()">Стать экспертом</button>
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
	/* eslint-disable */
	import experience from '@/components/User/CreateExpert/Experience'
	import categoryExpert from '@/components/User/CreateExpert/Category'
	import degreeExpert from '@/components/User/CreateExpert/Degree'
	import yearEducation from '@/components/User/CreateExpert/YearEducation'
export default {
	name: "User",
	components: {
		experience,
		categoryExpert,
		degreeExpert,
		yearEducation
	},
	props: {},
	data() {
		return {
			name: null,
			login: null,
			minute: 0,
			startPrice: 0,
			endPrice: 0,
			experience: 2005,
			childCategory: null,
	    selectCategory: {
	    	id: 1
	    },
	    selectSubCategory: null,
	    selectChildCategory: null,
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
			filesData: []
		}
	},
	watch:{
		categori(){
			this.getSelectCategory(1)
	}
	},
	created() {},
	mounted() {
		new WOW().init();
		// eslint-disable-next-line
		 $('#minute').styler();
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
          $('#timeFrom').timeEntry('getTime') : null),
        maxTime: (input.id === 'timeFrom' ?
          $('#timeTo').timeEntry('getTime') : null)
      };
    }
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
			let arr = this.subKnowledge;
        if (arr.find(map => map === item) == undefined) {
          arr.push(item)
        }else{
          arr.splice(arr.indexOf(item), 1);
        }
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
		convertUserToExpert(){
			this.$http({
				method: 'GET',
				url: 'user/profile/to-expert',
				headers: { 
					'Content-Type': 'application/x-www-form-urlencoded', 
					Authorization: "Bearer " + localStorage.getItem('token')
				}
			})
			.then(()=>{
				this.createExpert()
			})
			.catch(error=>{
				this.$toast.error({
						title:'Ошибка',
						message: error.response.data.error
					})
			})
		},
		createExpert(){

			let params = new URLSearchParams();
        params.append('experience', this.experience);
        params.append('duration_consultation', this.$refs.minute.value);
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
        .then(response=>{
        	// alert('Expert Create');
        	if (this.filesData.length > 0) {
						this.filesData.forEach(item => this.setDocument(item.file))
					}
        	this.createEducationExpert()
        	this.subKnowledge.forEach(item => this.addSubCategory(item))
        	this.addCategoryExpert()
        	 this.$toast.success({
						title:'Успешно',
						message:'Вы успешно стали экспертом, ожидайте подтверждения модератора'
					})
        	 setTimeout(()=>{
        	 	this.$store.dispatch('getProfile');
        	 	this.$router.push('/profile')
        	 }, 2000)
        })
		},
		createEducationExpert(){
			let params = new URLSearchParams();
        params.append('institution_name', this.education.nameUniversity);
        params.append('name_educational', this.education.degree);
        params.append('educational_type_id', this.education.startYear);
        params.append('specialization', this.education.specialty);

        this.$http({
          method: 'POST',
          url: 'expert/education',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
		},
		addCategoryExpert(){
			let params = new URLSearchParams();
        params.append('category_id', this.selectCategory.id);
        
        this.$http({
          method: 'POST',
          url: 'expert/category/add',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(()=>{
        	
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
	},
	computed: {
		categori(){
			return this.$store.getters.CATEGORI
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
    
</style>
