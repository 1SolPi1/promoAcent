<template>
  <div class="section_category_experts question">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-8">
            <div class="title_section">Задайте вопрос прямо сейчас</div>
            <form class="form_category">
              <select id="basecategory" class="select_main select_category">
                <option value="1">Выберите категорию</option>
                <option
						      v-for="(item, index) in category"
						      :key="item.id"
						      :value="item.id"
						      :selected="item.id === selectedCategory.id"
						     >
						       {{item.name}}
						     </option>
              </select>
              <select id="subcategory" class="select_main select_subcategory">
                <option value="1" selected>Выберите подкатегорию</option>
					      <option 
					        v-for="(item, index) in childcategory"
					        :value="item.id"
					      >
					        {{item.name}}
					      </option>
              </select>
            </form>
          </div>
          <div class="col-lg-5 col-md-4">
            <div class="images_category_experts zoomIn wow" data-wow-iteration="1">
              <img src="@/assets/img/image_ask.png" alt="alt">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: "TopFieldCategory",
	components: {},
	props: {
      category: Array,
      childcategory: Array,
      selectedCategory: Object,
      selectedSubCategory:{
        type: Object,
        default:()=>{
          id: 0
        }
      }
    },
	data() {
		return {}
	},
	watch:{
      childcategory(){
        setTimeout(function() {  
         $('#subcategory').trigger('refresh'); 
        }, 100) 
      },
      selectedCategory(){
			setTimeout(function() {  
          $('#basecategory').trigger('refresh');
        }, 100)
      }
  },
	created() {},
	mounted() {
		new WOW().init();
		 var vm = this;
       $('#basecategory').styler({
        onSelectClosed: function() {
            vm.$emit('selectcategory', $(this).find(":selected").val())
            vm.$emit('selectcategory', $(this).find(":selected").val())
            }
       });
       $('#subcategory').styler({
        onSelectClosed: function() {
            vm.$emit('selectsubcategory', $(this).find(":selected").val())
            }
       });
        setTimeout(function() {  
          $('select').trigger('refresh');  
        }, 1)
	},
	methods: {},
	computed: {},
}
</script>

<style scoped>

</style>
