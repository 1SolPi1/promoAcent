<template>
	<div class="container">
		<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          },
          {
            name: 'Помощь',
            route: '/info/help',
          }
        ]"
        :currentPage="desc.title"
        />
		<div class="title_section slideInUp wow" data-wow-iteration="1">
			
			<p style="margin-bottom: 50px;">{{desc.title}}</p>
			<p>{{desc.description}}</p>
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
              url: 'pages/pages/one-help?id=' + this.$route.params.id
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
</style>
