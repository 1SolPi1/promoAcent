<template>
<div class="container">
	<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Политика конфиденциальности"
        />
	<div class="title_section slideInUp wow" data-wow-iteration="1">
		Политика конфиденциальности
	</div>
</div>
</template>

<script>
export default {
	name: "Policy",
	components: {},
	props: {},
    metaInfo () {
        return{
            title: ' Политика конфиденциальности сервиса СпросиОнлайн 24/7 ',
            meta: [
                { name: 'description', content: ' Политика конфиденциальности сервиса СпросиОнлайн отвечает за обработку персональных данных наших клиентов.' }
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