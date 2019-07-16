<template>
  <div class="col-xs-12">
    <p>Область знаний<span>*</span></p>
    <div class="clearfix">
      <div class="znanie first">
        <p>Основная<span>*</span></p>
        <select id="multi">
          <option 
            v-for="(item, index) in category"
            :key="index"
            :value="item.id"
            :selected="item.id === selectedCategory.id"
          >
            {{item.name}}
          </option>
        </select>
      </div>
      <div class="znanie">
        <p>Дополнительная</p>
        <subCategory
          v-if="mysubcategories"
          v-for="item in mysubcategories"
          :key="item.id"
          :id="item.id"
          @selectsub="changeSubKnowledge"
          :childcategory = "childcategory"
        />
      </div>
      <button class="add_new" @click="addNewItem()"></button>
    </div>
    <span class="txt ml-0">Несколько категорий в одной области знаний можно выбрать, удерживая клавишу Ctrl.<br/><a href="#">Сообщите нам</a>, если области Вашей экспертизы нет в списке.</span>
  </div>
</template>

<script>
    /* eslint-disable */
    import subCategory from '@/components/User/CreateExpert/SubCategory'
	export default {
    name: "Category",
    components: {
      subCategory
    },
    props: {
      category:{
        required: true
      },
      childcategory: Array,
      selectedCategory:{
        type: Object,
        default:()=>{
          id: 1
        }
      },
      selectedSubCategory:{
        type: Object,
        default:()=>{
          id: 0
        }
      },
      mysubcategori:{
        type: Array,
        default: () => []
      }
    },
    data() {
			return {
        count: 1,
        mysubcategories: null
      }
    },
    watch:{
      category(){
        setTimeout(function() {  
         $('#multi').multiselect('rebuild');
        }, 100) 
      },
      selectedCategory(){
        setTimeout(() => {  
         $('#multi').multiselect('rebuild');
         this.getSubCategories()
        }, 100) 

      },
    },
    created() {
    },
    mounted() {
      var vm = this;
      $('#multi').multiselect({
        onChange: function(element) {
              vm.changeKnowledge(element.val())
            },
      });
      this.getSubCategories()
     },
		methods: {
      changeKnowledge(item){
        this.$emit('changeKnowledge', item)
      },
      changeSubKnowledge(item){
        this.$emit('changeSubKnowledge', item)
      },
      addNewItem(){
        this.mysubcategories.push({})
      },
      getSubCategories(){
        this.mysubcategories = this.mysubcategori.filter(map => map.parent_id === this.selectedCategory.id)
      }
		},
		computed: {
    },
	}
</script>

<style scoped>

</style>