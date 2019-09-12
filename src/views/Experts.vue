<template>
	<div>
		<div class="section_category_top">
			<div class="container">
        <breadcrumbs
          :wayPages="
          [
            {
              name: 'Главная',
              route: '/',
            }
           ]"
          currentPage="Эксперты"
        />
				<div class="wrap_category">
					<ul class="list_category">
			<slick
				ref="slick"
				:options="slickOptions"
        v-if="categories"
            >
			<ItemCategory
				v-for="item in categoryItem"
				:key="item.id"
				:name="item.name"
				:image="item.image"
				:clases="item.class"
				:active="item.id === selectCategory.id"
				@changeitem="changeCategory(item.id)"
              />  
            </slick>
					</ul>
				</div>
			</div>
		</div>

		<div class="section_category_experts">
			<div class="container">
				<div class="row">
					<div class="col-lg-7 col-md-8">
						<div class="title_section">Эксперты по {{selectCategory.name}}</div>
						<sortField
							:childcategory="selectChildCategory"
							@getexperts="getExpert"
							@selectsubcategory="changeSubCategory"
						/>
					</div>
					<div class="col-lg-5 col-md-4">
						<div class="images_category_experts zoomIn wow" data-wow-iteration="1">
							<img :src="bigImage" alt="alt">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section_main_experts">
			<div class="container">
				<div class="head_pagination">
					<div class="result_search">По вашему запросу найдено <span>{{experts.length}}</span> эксперт</div>
					<div class="pagination_page">
						<div class="number_pagination">{{pageNumber}}</div>
						<div class="all_numbers"><span>из</span> {{pageCount}}</div>
						<button class="btn_pagination prev_pagination" @click="prevPage" :class="{'disabled': pageNumber === 1}" :disabled="pageNumber === 1"></button>
						<button class="btn_pagination next_pagination" @click="nextPage" :class="{'disabled': pageNumber >= pageCount}" :disabled="pageNumber >= pageCount"></button>
					</div>
				</div>
				<div v-if="experts.length > 0">
				<expertItem
					v-for="(item, index) in experts"
					:key="index"
					:expert="item"
					@openchat="$chatinfo.opens({
							name: item.name || 'Имя Фамилия',
							avatar: item.avatar,
							activechat: {
								0:{
									client_id: $store.getters.PROFILE.user_id,
									expert_id: item.id,
								},
								opponent:{
									avatar: item.avatar,
									fullName: item.name || 'Имя Фамилия'
								}
							},
							user_id: $store.getters.PROFILE.user_id,
							expert_id: item.id,
							author: 0 
						})"
				/>
				</div>
				<div class="bottom_pagination">
					<div class="pagination_page">
						<div class="number_pagination">{{pageNumber}}</div>
						<div class="all_numbers"><span>из</span> {{pageCount}}</div>
						<button class="btn_pagination prev_pagination" @click="prevPage" :class="{'disabled': pageNumber === 1}" :disabled="pageNumber === 1"></button>
						<button class="btn_pagination next_pagination" @click="nextPage" :class="{'disabled': pageNumber >= pageCount}" :disabled="pageNumber >= pageCount"></button>
					</div>
				</div>

			</div>
		</div>
    </div>
</template>
<script>
import Slick from 'vue-slick';
import ItemCategory from '../components/Partner/ItemCategory'
import expertItem from '@/components/Expert/ExpertItem'
import sortField from '@/components/Expert/SortField'
export default {
	components:{
		Slick, 
		ItemCategory,
		expertItem,
		sortField
	},
    metaInfo () {
        return{
            title: this.titlePage,
            meta: [
                { name: 'description', content: this.descriptionPage },
                {name: 'keywords', content: this.keywordsPage}
            ]
        }
    },
  name: "Partners",
  data(){
	return{
	    titlePage: ' Эксперты ',
      descriptionPage: '',
      keywordsPage: '',
		experts:[],
		pageNumber: 1,
		pageCount: 1,
		slickOptions: {
				// arrows: true,
        dots: false,
        slidesToShow: 6,
        variableWidth: false,
        slidesToScroll: 1,
		responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
					}
          },
          {
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
            }
          }
        ]
      },
      category: null,
      childCategory: null,
      selectChildCategory: null,
      selectCategory: {
          description:"",
          expert_slug:"psiholog",
          id:1,
          image:"/file/category/psihologia/1231d487d9ac27b6579556329bf2a71b.png",
          meta_id:null,
          parent_id:null,
          slug:"psihologu",
          url:"/zadat-vopros-psihologu"
      },
      selectSubCategory: null,
      bigImage: null,
      sortItem:{
      		online: null,
          rating: null,
          akcii: null,
          price: null,
          date: null,
          sex: 1
      }
    }
	},
	created(){
	},
    beforeRouteUpdate (to, from, next) {
        this.pageCount = 1;
        this.pageNumber = 1;
        this.experts = [];
        setTimeout(()=> {
               this.getExperts();
        }, 500);
        next()
    },
	methods:{
			getBigImage(id){
				this.bigImage = this.categoryItem.find(item => item.id == id).bigImage
			},
      getMeta(){
			    let currentCategory = this.categories.find(item => item.expert_slug === this.$route.params.experts);
			    this.titlePage = currentCategory.meta_exert.title;
			    this.descriptionPage = currentCategory.meta_exert.description;
      },
      changeCategory(item){
      this.selectCategory = this.categories.find(map => map.id === item);
          this.$router.push('/' + this.selectCategory.expert_slug);
      this.getBigImage(item);
      setTimeout(()=>{  
        this.getChildCategory(this.selectCategory);
        this.pageNumber = 1;
        this.selectSubCategory = null;
      }, 300)
      this.getExperts()
    },
    changeSubCategory(item){
    	this.pageNumber = 1;
      this.selectSubCategory= this.selectChildCategory.find(map => map.id == item)
    },
    getSelectCategory(id){
      this.selectCategory = this.categories.find(item => item.id === id);
      this.getChildCategory(this.selectCategory)
    },
    getChildCategory(arr){
      this.selectChildCategory = this.childCategories.filter(map => map.parent_id === arr.id)
    },
		getExpert(data){
			this.sortItem.sex = data.sex
			this.sortItem.online = data.online
			this.sortItem.akcii = data.akcii
			this.sortItem.price = data.price
			this.sortItem.date = data.date
			this.sortItem.rating = data.rating
			this.pageNumber = 1
			this.getExperts()
		},
		getExperts(){
			    this.getMeta();
        let params = new URLSearchParams();
       params.append('category_id', this.selectCategory.expert_slug);
       if (this.selectSubCategory !== null) {
       	params.append('sub_category_id', this.selectSubCategory.id)
       }
        // params.append('sex', this.sortItem.sex);
        params.append('page', this.pageNumber);
        if (this.sortItem.online !== null) {
        	params.append('online', this.sortItem.online)
        }
        if (this.sortItem.date !== null) {
        	params.append('create_at', this.sortItem.date)
        	params.append('sort', 'create_at')
        }
        if (this.sortItem.rating !== null) {
        	params.append('rating', this.sortItem.rating)
        	// params.append('sort', 'create_at')
        }
         if (this.sortItem.akcii !== null) {
        	params.append('action', this.sortItem.akcii)
        	// params.append('sort', 'action')
        }
        // params.append('percent', this.sortItem.online)
        if (this.sortItem.price !== null) {
        	params.append('price_from', this.sortItem.price)
        	params.append('sort', 'price_from')
        }
        // params.append('online', this.sortItem.online)

        this.$http({
          method: 'POST',
          url: 'expert/profile/find',
          data: params,
          headers: { 
						'Content-Type': 'application/x-www-form-urlencoded', 
						Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
					let expert = [];
					this.pageCount = response.data.page
          for (let key in response.data){
             expert.push(response.data[key])
          }

          this.experts = expert.slice(0,-1);
        })
		},
		nextPage () {
			this.pageNumber++
			this.getExperts()
		},
		prevPage () {
			this.pageNumber--
			this.getExperts()
		},
	},
	mounted(){
		// eslint-disable-next-line
    setTimeout(()=> {
        let category = this.categories.find(item => item.expert_slug === this.$route.params.experts);
          this.getSelectCategory(category.id)
        }, 500);
		this.getExperts();
		this.getBigImage(1);
		$('select').styler();
	},
	watch:{
		categories(){
        let category = this.categories.find(item => item.expert_slug === this.$route.params.experts);
			this.getSelectCategory(category.id);
			this.getExperts()
		}
	},
	computed:{
		categoryItem(){
			return this.$store.getters.CATEGORYITEM
		},
		categories(){
      return this.$store.getters.CATEGORI
    },
    childCategories(){
      return this.$store.getters.CHILDCATEGORI
    }
	}
}
</script>
<style scoped>
</style>