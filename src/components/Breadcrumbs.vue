<template>
<div class="your_question">
  <router-link 
    v-for="(item, index) in wayPages"
    :key = "index"
    :to="item.route"
  >
    {{item.name}} -
  </router-link>
  <span>
    Журнал
  </span>
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
		},
		computed: {},
	}
</script>

<style scoped>

</style>