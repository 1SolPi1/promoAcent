<template>
<div class="container">
	<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="О проекте"
        />
	<div class="title_section slideInUp wow" data-wow-iteration="1">
		{{pageInfo.title}}
		<div style="margin-top: 50px">{{pageInfo.description}}</div>
	</div>
</div>
</template>

<script>
export default {
	name: "About",
	components: {},
	props: {},
    metaInfo () {
        return{
            title: this.pageInfo.meta.title,
            meta: [
                { name: 'description', content: this.pageInfo.meta.description}
            ]
        }
    },
	data() {
		return {
    }
	},
	created() {},
	mounted() {
		new WOW().init();
	},
	methods: {},
	computed: {
	    pageInfo(){
	        return this.$store.getters.PAGEINFO[0]
      }
  },
}
</script>

<style scoped>
</style>