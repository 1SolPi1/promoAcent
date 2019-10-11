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
        currentPage="Помощь"
        />
        <div class="title_section slideInUp wow" data-wow-iteration="1">
            Помощь
        </div>
        <div class="row">
        <journalItem
        v-for="item in questList"
        :key="item.id"
        :title="item.title"
        :help="true"
        :id="item.id"
      />
        </div>
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
                    url: 'pages/pages/help-category'
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
.container{
	height: calc(100vh - 237px);
}  
</style>