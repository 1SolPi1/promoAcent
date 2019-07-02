<template>
  <div class="col-xs-12">
    <p>Область знаний<span>*</span></p>
    <div class="clearfix">
      <div class="znanie first">
        <p>Основная<span>*</span></p>
        <select id="multi" multiple="multiple">
          <option 
            v-for="(item, index) in category"
            :key="index"
            :value="item.id"
          >
            {{item.name}}
          </option>
        </select>
      </div>
      <div class="znanie">
        <p>Дополнительная</p>
        <select id="multi-2" multiple="multiple"> 
          <option value="знание1">знание1</option>
          <option value="знание2">знание2</option>
          <option value="знание3">знание3</option>
          <option value="знание4">знание4</option>
          <option value="знание5">знание5</option>
          <option value="знание6">знание6</option>
        </select>
      </div>
      <button class="add_new"></button>
    </div>
    <span class="txt ml-0">Несколько категорий в одной области знаний можно выбрать, удерживая клавишу Ctrl.<br/><a href="#">Сообщите нам</a>, если области Вашей экспертизы нет в списке.</span>
  </div>
</template>

<script>
    /* eslint-disable */
	export default {
    name: "Category",
    components: {
    },
    props: {
      category:{
        required: true
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
      $('#multi').multiselect({
        onChange: function(element) {
              vm.changeKnowledge(element.val())
            },
      });
      $('#multi-2').multiselect({
        onChange: function(element) {
              vm.changeSubKnowledge(element.val())
            },
      });
      setTimeout(function() {  
        $('select').trigger('refresh');  
      }, 1)
     },
		methods: {
      changeKnowledge(item){
        this.$emit('changeKnowledge', item)
      },
      changeSubKnowledge(item){
        this.$emit('changeSubKnowledge', item)
      }
		},
		computed: {
    },
	}
</script>

<style scoped>

</style>