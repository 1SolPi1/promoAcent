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
            title: ' О проекте СпросиОнлайн | Бесплатная онлайн консультация круглосуточно ',
            meta: [
                { name: 'description', content: ' Краткая история развития и миссия по созданию сервиса СпросиОнлайн, предоставляющие бесплатные и круглосуточные онлайн консультации 24/7 ' }
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
.container{
	height: calc(100vh - 237px);
}  
</style>