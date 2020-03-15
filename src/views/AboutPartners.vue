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
      <span style="margin-top: 50px" v-html="pageInfo.description"></span>
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
            title: this.pageInfo.meta.title,
            meta: [
                { name: 'description', content: this.pageInfo.meta.description}
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
      pages(){
          return this.$store.getters.PAGEINFO
      },
      pageInfo(){
        return this.pages.find(item => item.id === 2)
      }
  },
}
</script>

<style scoped>

</style>
