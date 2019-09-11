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
 				v-for="(item, index) in 14"
 				:key="index"
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
.section_journal{
	padding-top: 5px;
}
</style>
