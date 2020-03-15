<template>
  <div>
<div class="your_question" v-if="!question">
  <router-link 
    v-for="(item, index) in wayPages"
    :key = "index"
    :to="item.route"
  >
    {{item.name}} -
  </router-link>
  <span>
    {{currentPage}}
  </span>
</div>
<div class="your_question" v-else>
  <a 
    href="javascript:void(0)"
    v-for="(item, index) in wayPages"
    :key = "index"
    :to="item.route"
    @click.prevent="selectCategory($store.getters.SELECTCATEGORY)"
  >
    {{item.name}} -
  </a>
  <span>
    {{currentPage}}
  </span>
</div>
</div>
</template>

<script>
	export default {
    name: "Breadcrumbs",
    components: {},
    props: {
      wayPages:{
        type: Array
      },
      currentPage:{
        type: String
      },
      question:{
        type: Boolean,
        default: false
      },
      idCat:{
        type: Number
      }
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
    selectCategory(id){
        this.$store.dispatch('changeSelectCategory', id);
        this.$router.push('/questions?category=' + id);
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>