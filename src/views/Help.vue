<template>
  <div class="container">
 		<div class="your_question">Главная — <span>Помощь</span></div>
 		<div class="title_section slideInUp wow" data-wow-iteration="1">
 			Помощь
 		</div>
 	</div>
</template>

<script>
export default {
	name: "Help",
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