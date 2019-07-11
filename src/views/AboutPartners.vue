<template>
  <div class="container">
 		<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Описание партнерства"
        />
 		<div class="title_section slideInUp wow" data-wow-iteration="1">
 			Описание партнерства
 		</div>
 	</div>
</template>

<script>
export default {
	name: "AboutPartners",
	components: {},
	props: {},
	data() {
		return {}
	},
	created() {},
	mounted() {
		new WOW().init();
	},
	methods: {},
	computed: {},
}
</script>

<style scoped>
.container{
	height: calc(100vh - 237px);
}  
</style>
