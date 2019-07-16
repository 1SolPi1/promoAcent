<template>
  <form class="form_category">
     <select id="subcategory" class="select_main select_subcategory">
      <option value="1">Выберите подкатегорию</option>
      <option 
        v-for="(item, index) in childcategory"
        :value="item.id"
      >
        {{item.name}}
      </option>
    </select>
    <select id='sex' class="select_main select_gender">
      <option value="0">пол</option>
      <option value="1">Мужской</option>
      <option value="2">Женский</option>
    </select>
    <!-- <select id="rating" class="select_main select_rating">
      <option value="0">рейтинг от</option>
      <option value="10">10</option>
      <option value="9">9</option>
      <option value="8">8</option>
      <option value="7">7</option>
      <option value="6">6</option>
     </select> -->
    <div class="sorting_questions">
      <span class="title_sorting">Сортировать:</span>
      <div class="item_sorting">
        <input type="radio" name="radio" value="online" class="radio" id="radio1" v-model="items" />
        <label for="radio1" ><img src="@/assets/img/sort5.png" alt="alt">на сайте</label>
      </div>
      <div class="item_sorting">
        <input type="radio" checked name="radio" value="rating" class="radio" id="radio2" v-model="items"/>
        <label for="radio2"><img src="@/assets/img/sort6.png" alt="alt">рейтингу</label>
      </div>
<!--       <div class="item_sorting">
        <input type="radio" name="radio" value="akcii" class="radio" id="radio3"  v-model="items"/>
        <label for="radio3"><img src="@/assets/img/sort7.png" alt="alt">акции</label>
      </div> -->
      <div class="item_sorting">
        <input type="radio" name="radio" value="price" class="radio" id="radio4"  v-model="items"/>
        <label for="radio4"><img src="@/assets/img/sort2.png" alt="alt">стоимости</label>
      </div>
      <div class="item_sorting">
        <input type="radio" name="radio" value="date" class="radio" id="radio5"  v-model="items"/>
        <label for="radio5"><img src="@/assets/img/sort1.png" alt="alt">дате</label>
      </div>
      <!-- <div class="item_sorting">
        <input type="radio" name="radio" value="1" class="radio" id="radio6"/>
        <label for="radio6"><img src="@/assets/img/svg/favorite-heart-button.svg" alt="alt">мои эксперты</label>
      </div> -->
    </div>
     <a href="javascript:void(0)" class="btn_blue" @click="getExperts()">Показать</a>
  </form>
</template>

<script>
	export default {
    name: "SortField",
    components: {
    },
    props: {
      childcategory: Array
    },
    data() {
			return {
        sex: 1,
        rating: 6,
        items: null,
        child: null,
        sortItems:{
          online: null,
          rating: null,
          akcii: null,
          price: null,
          date: null
        }
      }
    },
    watch:{
      items(item){
        for (let i in this.sortItems){
          this.sortItems[i] = null
        }
        this.sortItems[item] = 1
      },
      childcategory(){
        setTimeout(function() {  
         $('#subcategory').trigger('refresh'); 
        }, 100) 
      },
    },
    created() {
    },
    mounted() {
      var vm = this;
      $('#subcategory').styler({
        onSelectClosed: function() {
           vm.$emit('selectsubcategory', $(this).find(":selected").val())
            }
       });
       $('#sex').styler({
        onSelectClosed: function() {
            vm.sex = $(this).find(":selected").val();
            vm.sex = $(this).find(":selected").val();
            }
       });
       $('#rating').styler({
        onSelectClosed: function() {
            vm.rating = $(this).find(":selected").val();
            vm.rating = $(this).find(":selected").val();
            }
       });
        setTimeout(function() {  
          $('select').trigger('refresh');  
        }, 1)
     },
		methods: {
      getExperts(){
        this.$emit('getexperts', {
          sex: this.sex,
          online: this.sortItems.online,
          rating: this.sortItems.rating,
          akcii: this.sortItems.akcii,
          price: this.sortItems.price,
          date: this.sortItems.date
        })
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>