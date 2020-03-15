<template>
	<div class="col-md-5 col-sm-4">
		<div class="right_header">
			<a href="javascript:void(0)" class="btn_add" @click="registerExpert = !registerExpert"><span>добавить эксперта</span></a>
			<a href="javascript:void(0)" class="btn_border btn_sign" @click="login = !login"><span>личный кабинет</span></a>
		</div>
		<registration 
      v-if="register" 
      @close="register = !register"
      @gotologin="showLogin()"
    /> 
    <registration 
      v-if="registerExpert"
      :expert="true" 
      @close="registerExpert = !registerExpert"
      @gotologin="showLogin()"
    /> 
    <login 
      v-if="login" 
      @close="login = !login"
      @gotoregister="showRegister()"
    /> 
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
        login: false,
        registerExpert: false
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      showRegister(){
        this.login = false;
        this.register = true
      },
      showLogin(){
        this.login = true;
        this.register = false;
        this.registerExpert = false;
      }
		},
		computed: {},
	}
</script>

<style scoped>

</style>