<template>
	<div class="container">
		<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          },
          {
            name: 'Журнал',
            route: '/journal',
          }
        ]"
        currentPage="Статья"
        />
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
    metaInfo () {
        return{
            title: ' Топ-6 экспертов января 2019г|СпросиОнлайн ',
            meta: [
                { name: 'description', content: ' Статья почета, лучших экспертов круглосуточного бесплатного онлайн сервиса СпросиОнлайн 24/7 за январь 2019 года ' }
            ]
        }
    },
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
