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
            route: '/info/journal',
          }
        ]"
        :currentPage="desc.title"
        />
		<div class="title_section slideInUp wow" data-wow-iteration="1">
			{{desc.title}}
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
            title: this.desc.title,
            meta: [
                { name: 'description', content: ' Статья почета, лучших экспертов круглосуточного бесплатного онлайн сервиса СпросиОнлайн 24/7 за январь 2019 года ' }
            ]
        }
    },
	data() {
		return {
		    desc:{
		        title: ''
        }
    }
	},
	created() {},
	mounted() {
		new WOW().init();
		this.getItem()
	},
	methods: {
      getItem(){
          this.$http({
              method: 'GET',
              url: 'pages/pages/journal-one?id=' + this.$route.params.id
          })
              .then(response=>{
                  this.desc = response.data
              })
      }
  },
	computed: {},
}
</script>

<style scoped>
.container{
	height: calc(100vh - 237px);
}  
</style>
