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
 		<div class="your_question">Главная — <span>Журнал</span></div>
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
