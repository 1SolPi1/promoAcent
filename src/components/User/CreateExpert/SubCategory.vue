<template>
	<select :id="'multi' + id"> 
    <option value="0">Выберите подкатегорию</option>
    <option 
     v-for="item in childcategory"
     :value="item.id"
     :key="item.id"
     :selected="item.id === id"
     >
     {{item.name}}
   </option>
 </select>
</template>

<script>
	export default {
    name: "SubCategory",
    components: {
    },
    props: {
      childcategory: Array,
      id: Number
    },
    data() {
			return {
        count: 1
      }
    },
    watch:{
      childcategory(){
        setTimeout(() =>{  
         $('select').multiselect('rebuild');
        }, 100) 
      },
    },
    created() {
    },
    mounted() {
      const vm = this
       $('#multi' + this.id).multiselect({
        onChange: function(element) {
              vm.$emit('selectsub', element.val())
            },
      });
     },
		methods: {
    
		},
		computed: {},
	}
</script>

<style scoped>

</style>