<template>
	<div class="helps_block boxRegister">
		<div class="title_section">Регистрация</div>
			<form class="form_help">
				<input type="text" placeholder="Логин" v-model="username">
				<input type="email" class="passInput" placeholder="Почта" v-model="email">
				<input type="password" class="passInput" placeholder="Пароль" v-model="password">
				<button class="btn_blue"  @click.prevent="submit()">Зарегистрироваться</button>
			</form>
	</div>    
</template>

<script>
	export default {
    name: "Registration",
    components: {},
    props: {},
    data() {
			return {
        username: null,
        email: null,
        password: null
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
			submit(){
				let params = new URLSearchParams();
            params.append('username', this.username);
            params.append('email', this.email);
            params.append('password', this.password);

            this.$http({
                method: 'POST',
                url: 'user/registration/register',
                data: params,
            })
                .then(() => {
									alert('яхуу');
                });
			}
		},
		computed: {},
	}
</script>

<style scoped>
.boxRegister{
	position: fixed;
	right: 260px;
	top: 65px;
	z-index: 900;
}

.passInput{
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin-bottom: 20px;
	padding: 0 15px;
	font-size: 14px;
	border-radius: 4px;
	border: 1px #d5d5d6 solid;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	color: #000;
}
</style>