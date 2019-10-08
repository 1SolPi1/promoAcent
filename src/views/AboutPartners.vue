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
      {{pageInfo.title}}
 		</div>
 	</div>
</template>

<script>
export default {
	name: "AboutPartners",
	components: {},
	props: {},
    metaInfo () {
        return{
            title: ' Описание партнерства сервиса СпросиОнлайн 24/7 ',
            meta: [
                { name: 'description', content: ' Описание условий партнерства для экспертов с сервисом СпросиОнлайн' }
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
	computed: {
      pageInfo(){
          return this.$store.getters.PAGEINFO[1]
      }
  },
}
</script>

<style scoped>
.container{
	height: calc(100vh - 237px);
}  
</style>
