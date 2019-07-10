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
		}
		this.$store.dispatch('getCategories');
	},
	methods: {
	},
	computed: {},
}
</script>
<style>

</style>
