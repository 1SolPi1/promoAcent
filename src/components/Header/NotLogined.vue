<template>
	<div class="col-md-5 col-sm-4">
		<div class="right_header">
			<a href="#" class="btn_add" @click="register = !register"><span>добавить эксперта</span></a>
			<a href="#" class="btn_border btn_sign" @click="login = !login"><span>личный кабинет</span></a>
		</div>
		<registration v-if="register" @close="register = !register"/> 
    <login v-if="login" @close="login = !login"/> 
	</div>  
</template>

<script>
	import registration from '@/components/Registration'
  import login from '@/components/Login'
	export default {
    name: "NotLogined",
    components: {
      registration, 
      login,
    },
    props: {},
    data() {
			return {
				register: false,
        login: false
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
		},
		computed: {},
	}
</script>

<style scoped>

</style>