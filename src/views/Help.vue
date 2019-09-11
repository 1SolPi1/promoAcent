<template>
  <div class="container">
 		<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Помощь"
        />
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
    metaInfo () {
        return{
            title: ' Помощь сервиса СпросиОнлайн | Круглосуточные бесплатные консультации ',
            meta: [
                { name: 'description', content: ' Здесь вы можете задать вопрос о пользовании сервисом СпросиОнлайн, а также ознакомиться с уже предоставленной информацией. ' }
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