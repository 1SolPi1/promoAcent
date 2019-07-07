<template>
  <div class="col-xs-12 col-md-4 col-lg-3">
    <p>Укажите степень</p>
    <select id="degree" name="obrazovanie" class="select_main select_stag">
      <option value="среднее специальное" :selected="selectdegree === 'среднее специальное'">среднее специальное</option>
      <option value="высшее бакалаврат" :selected="selectdegree === 'высшее бакалаврат'">высшее бакалаврат</option>
      <option value="высшее специалитет" :selected="selectdegree === 'высшее специалитет'">высшее специалитет</option>
      <option value="высшее магистрат" :selected="selectdegree === 'высшее магистрат'">высшее магистрат</option>
    </select>
  </div>
</template>

<script>
    /* eslint-disable */
    let item = 0;
	export default {
    name: "Degree",
    components: {
    },
    props: {
      selectdegree:{
        type: String
      }
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
      var vm = this;
       $('#degree').styler({
        onSelectClosed: function() {
            vm.$emit('changeDegree', $(this).find(":selected").val())
            }
       });
       setTimeout(function() {  
      $('select').trigger('refresh');  
    }, 1)
     },
		methods: {
		},
		computed: {
    },
	}
</script>

<style scoped>

</style>