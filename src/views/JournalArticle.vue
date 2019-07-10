<template>
	<div class="container">
		<div class="your_question">Главная — Журнал - <span>Журнал</span></div>
		<div class="title_section slideInUp wow" data-wow-iteration="1">
			Статья
		</div>
	</div>
</template>

<script>
export default {
	name: "JournalArticle",
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
