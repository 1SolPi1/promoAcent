<template>
  <div>
		<div class="helps_block boxLogin">
      <div @click="$emit('close')" class="closeButton btn_add"></div>
      <div class="title_section">Логин</div>
				<form class="form_help">
          <input type="text" placeholder="Логин" v-model="login">
          <input type="password" class="passInput" placeholder="Пароль" v-model="password">
          <button class="btn_blue"  @click.prevent="submit()">Войти</button>
          <div style="display: flex; margin-top: 20px; flex-direction: column;">
          <a href="javascript:void(0)" @click="$emit('gotoregister')">Регистрация</a>
          <a href="javascript:void(0)" @click="showRecovery = !showRecovery">Восстановить пароль</a>
          <input type="text" placeholder="Email" v-model="recoveryEmail" v-if="showRecovery">
          <button class="btn_blue"  @click.prevent="recovery()" v-if="showRecovery">Восстановить</button>
          </div>
        </form>
    </div>
    <span class="closeBackground" @click="$emit('close')"></span>
  </div>
</template>

<script>
	export default {
    name: "Login",
    components: {},
    props: {},
    data() {
			return {
        login: null,
        password: null,
        showRecovery: false,
        recoveryEmail: null
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
			submit(){
				let params = new URLSearchParams();
            params.append('login', this.login);
            params.append('password', this.password);

            this.$http({
                method: 'POST',
                url: 'user/security/login',
                data: params,
            })
                .then(response => {
                  localStorage.setItem('token', response.data.token);
                  this.$store.dispatch('getProfile');
                  this.$store.dispatch('getCategories');
                })
                .catch(error =>{
                  this.$toast.error({
                      title:'Ошибка',
                      message: error.response.data.error.password[0]
                    })
                })
			},
      recovery(){
        let params = new URLSearchParams();
        params.append('email', this.recoveryEmail);

        this.$http({
          method: 'POST',
          url: 'user/recovery/request',
          data: params,
        })
        .then(response => {
          this.$toast.success({
            title:'Успешно',
            message: ' Перейдите на свою почту для восстановления пароля '
          })
        })
        .catch(error =>{
          this.$toast.error({
            title:'Ошибка',
            message: error.response.data.error
          })
        })
      }
		},
		computed: {},
	}
</script>

<style scoped>
.boxLogin{
  position: fixed;
  right: 260px;
  top: 70px;
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

.closeButton{
  position: absolute;
  right: 0;
  top: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}

.btn_add::before{
  margin-right: 3px;
}

.closeBackground{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 890;
}
@media only screen and (max-width: 480px) {
  .boxLogin{
    right: calc(100%/2 - 125px);
    top: 40vw;
}
}
</style>