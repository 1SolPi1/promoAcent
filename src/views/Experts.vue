<template>
	<div>
		<div class="section_category_top">
			<div class="container">
				<div class="wrap_category">
					<ul class="list_category">
			<slick
				ref="slick"
              :options="slickOptions"
            >
			<ItemCategory
				v-for="item in categoryItem"
				:key="item.id"
				:name="item.name"
				:image="item.image"
				:clases="item.class"
				:active="item.id === selectCategory.id ? true:false"
				@changeitem="changeCategory(item)"
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
						/>
					</div>
					<div class="col-lg-5 col-md-4">
						<div class="images_category_experts zoomIn wow" data-wow-iteration="1">
							<img src="@/assets/img/img_category_experts.png" alt="alt">
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
						<div class="number_pagination">1</div>
						<div class="all_numbers"><span>из</span> 1</div>
						<button class="btn_pagination prev_pagination disabled"></button>
						<button class="btn_pagination next_pagination"></button>
					</div>
				</div>

				<expertItem
					v-for="(item, index) in experts"
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

				<div class="bottom_pagination">
					<div class="pagination_page">
						<div class="number_pagination">1</div>
						<div class="all_numbers"><span>из</span> 1</div>
						<button class="btn_pagination prev_pagination disabled"></button>
						<button class="btn_pagination next_pagination"></button>
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
  name: "Partners",
  data(){
	return{
		selectCategory: null,
		experts:[],
		slickOptions: {
				arrows: true,
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
      selectCategory: null,
      sortItem:{
      	sex: null
      }
    }
	},
	created(){
		this.selectCategory = this.categoryItem[0]
	},
	methods:{
		getParentCategory(id){
        this.category = this.$store.getters.CATEGORIES.map(map => map.category);
        this.childCategory = this.$store.getters.CATEGORIES.map(map => map.child);
        this.getSelectCategory(id);
      },
      getSelectCategory(id){
        this.selectCategory = this.category.find(item => item.id === id)
        this.getChildCategory(this.selectCategory)
      },
      getChildCategory(arr){
        this.selectChildCategory = this.childCategory.filter(map => map.parent_id === arr.id)
      },
		changeCategory(item){
			this.selectCategory = item
		},
		getExpert(sex){
			this.sortItem.sex = sex
			this.getExperts()
		},
		getExperts(){
        let params = new URLSearchParams();
        params.append('sex', this.sortItem.sex);

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
          for (let key in response.data){
             expert.push(response.data[key])
          }

          this.experts = expert.slice(0,-1);
        })
		}
	},
	mounted(){
		new WOW().init();
		// eslint-disable-next-line
		$('select').styler();
		this.getParentCategory(1)
		this.getExperts()
	},
	computed:{
		categoryItem(){
			return this.$store.getters.CATEGORYITEM
		}
	}
}
</script>
<style scoped>
	
</style>