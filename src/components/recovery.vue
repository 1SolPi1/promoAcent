<template>
  <div class="containerRecovery">
		<div class="helps_block boxRecovery">
      <div @click="$emit('close')" class="closeButton btn_add"></div>
      <div class="title_section">Восстановление пароля</div>
				<form class="form_help">
          <input type="password" class="passInput" placeholder="Пароль" v-model="password">
          <button class="btn_blue"  @click.prevent="submit()">Восстановить</button>
        </form>
    </div>
  </div>
</template>

<script>
	export default {
    name: "Recovery",
    components: {},
    props: {},
    data() {
			return {
        password: null,
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      submit(){
      	let item = this.$route.query.id.split('code=')
        let params = new URLSearchParams();
        params.append('password', this.password);

        this.$http({
          method: 'POST',
          url: 'user/recovery/reset?id='+item[0]+'&code='+item[1],
          data: params,
        })
        .then(() => {
          this.$toast.success({
            title:'Успешно',
            message: 'Ваш пароль изменен '
          })
          this.$emit('close')
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
.containerRecovery{
	position: fixed;
	z-index: 900;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0, .4);
	overflow: hidden;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.boxRecovery{
  z-index: 903;
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