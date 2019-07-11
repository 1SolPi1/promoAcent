<template>
  <div id="app">
	<headers/>
    <router-view/>
    <footers/>
  </div>
</template>
<script>
export default {
	name: "App",
	components: {},
	props: {},
	data() {
		return {
		}
	},
	created() {
	},
	mounted() {
		if (localStorage.getItem('token')) {
			this.$store.dispatch('getProfile');
		}else if(localStorage.getItem('falsetoken')){
			this.$store.dispatch('setFalseId', localStorage.getItem('falsetoken'));
		}else{
			let token = this.getRandom(2000000, 999999999);
			 localStorage.setItem('falsetoken', token);
			 this.$store.dispatch('setFalseId', token);
		}
		this.$store.dispatch('getCategories');
	},
	methods: {
		getRandom(min, max){
  		return Math.floor(Math.random() * (max - min)) + min
		}
	},
	computed: {},
}
</script>
<style>

</style>
