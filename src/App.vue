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
	beforeCreate() {

	},
	mounted() {
		if (localStorage.getItem('token')) {
			this.$store.dispatch('getProfile');
			this.$store.dispatch('getChats');
		}else if(localStorage.getItem('falsetoken')){
			this.$store.dispatch('setFalseId', localStorage.getItem('falsetoken'));
		}else{
			let token = this.getRandom(2000000, 999999999);
			 localStorage.setItem('falsetoken', token);
			 this.$store.dispatch('setFalseId', token);
		}
		this.$store.dispatch('getCategories');
      this.$store.dispatch('getPagesInfo');
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
