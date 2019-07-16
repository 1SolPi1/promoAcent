<template>
<div class="choose_question">
  <span style="margin-right: 10px;">Вопросы по</span>
    <select id="basecategory" class="select_category">
     <option
      v-for="(item, index) in category"
      :key="item.id"
      :value="item.id"
      :selected="item.id === select"
     >
       {{item.name}}
     </option>
    </select>
    <select id="subcategory" class="select_main">
      <option value="0">Выберите подкатегорию</option>
      <option 
        v-for="(item, index) in childcategory"
        :value="item.id"
      >
        {{item.name}}
      </option>
    </select>
</div>
</template>

<script>
  export default {
    name: "Categories",
    components: {},
    props: {
      category: Array,
      childcategory: Array
    },
    data() {
      return {
      }
    },
    watch:{
      childcategory(){
        setTimeout(()=>{
          $('#subcategory').trigger('refresh');  
        }, 400)
        $('#subcategory').trigger('refresh');  
      },
      select(){
        setTimeout(()=>{
          $('#basecategory').trigger('refresh');  
        }, 400)
        $('#basecategory').trigger('refresh');  
      }
    },
    created() {},
    mounted() {
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
    methods: {
      
    },
    computed: {
      select(){
        return this.$store.getters.SELECTCATEGORY
      }
    },
  }
</script>

<style scoped>
    
</style>