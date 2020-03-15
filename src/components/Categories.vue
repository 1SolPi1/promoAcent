<template>
<div class="choose_question">
  <h1 style="margin-right: 10px;">Вопросы по</h1>
    <select id="basecategory" class="select_category">
     <option
      v-for="item in category"
      :key="item.id"
      :value="item.slug"
      :selected="item.slug === select"
     >
       {{item.name}}
     </option>
    </select>
    <select id="subcategory" class="select_main">
      <option :value="select">Выберите подкатегорию</option>
      <option
        v-for="item in childcategory"
        :key="item.id"
        :selected="item.slug === subcategory"
        :value="item.slug"
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
          value: 0
      }
    },
    watch:{
      childcategory(){
        setTimeout(()=>{
          $('#subcategory').trigger('refresh');
        }, 400);
        $('#subcategory').trigger('refresh');
      },
      select(){
        setTimeout(()=>{
          $('#basecategory').trigger('refresh');  
        }, 400);
        $('#basecategory').trigger('refresh');  
      }
    },
    created() {},
    mounted() {
       var vm = this;
        $('#basecategory').styler();
        $('#basecategory').change(function() {
                     vm.$emit('selectcategory', $(this).find(":selected").val());
                     });
        $('#subcategory').styler();
        $('#subcategory').change(function() {
            vm.$emit('selectsubcategory', $(this).find(":selected").val());
        });
        setTimeout(function() {  
          $('select').trigger('refresh');  
        }, 1)
    },
    methods: {
      
    },
    computed: {
      select(){
        return this.$route.params.category
      },
      subcategory(){
          return this.$route.params.subcategory
      }
    },
  }
</script>

<style scoped>
    
</style>