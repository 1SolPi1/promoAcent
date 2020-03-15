<template>
 <div class="section_journal">
 	<div class="container">
 		<breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Журнал"
        />
 		<div class="title_section slideInUp wow" data-wow-iteration="1">
 			Журнал
 		</div>
 		<div class="row">
 			<journalItem
        v-for="item in questList"
        :key="item.id"
        :title="item.title"
        :id="item.id"
      />
 		</div>
 	</div>
 </div>
</template>

<script>
export default {
	name: "Journal",
	components: {},
	props: {},
    metaInfo () {
        return{
            title: ' Журнал достижений и новостей СпросиОнлайн | Онлайн консультация 24/7 ',
            meta: [
                { name: 'description', content: ' Журнал свежих новостей и событий сервиса СпросиОнлайн. Задай вопрос эксперту онлайн бесплатно и крулосуточно 24/7 ' }
            ]
        }
    },
	data() {
		return {
		    questList: []
    }
	},
	created() {},
	mounted() {
		new WOW().init();
		this.getAllQuestion()
	},
	methods: {
      getAllQuestion(){
          this.$http({
              method: 'GET',
              url: 'pages/pages/journal-category'
          })
              .then(response=>{
                  this.questList = response.data[1]
              })
      }
  },
	computed: {},
}
</script>

<style scoped>
.section_journal{
	padding-top: 5px;
}
</style>
