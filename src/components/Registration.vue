<template>
	<div>
	<div class="helps_block boxRegister">
		<div @click="$emit('close')" class="closeButton btn_add"></div>
		<div class="title_section" v-if="!expert">Регистрация</div>
		<div class="title_section" v-else>Регистрация Експерта</div>
			<form class="form_help">
				<input type="text" placeholder="Логин" v-model="username">
				<input type="email" class="passInput" placeholder="Почта" v-model="email">
				<input type="password" class="passInput" placeholder="Пароль" v-model="password">
				<select id='sex' class="select_main select_gender">
					<option value="0">пол</option>
					<option value="1">Мужской</option>
					<option value="2">Женский</option>
    		</select>
				<button class="btn_blue"  @click.prevent="submit()" v-if="!expert">Зарегистрироваться</button>
				<button class="btn_blue"  @click.prevent="submitExpert()" v-else>Зарегистрироваться</button>
				<div style="display: flex; margin-top: 20px">
          <a href="javascript:void(0)" @click="$emit('gotologin')">Логин</a>
        </div>
			</form>
	</div>
	<span class="closeBackground" @click="$emit('close')"></span>
	</div>    
</template>

<script>
	export default {
    name: "Registration",
    components: {},
    props: {
    	expert:{
    		type: Boolean,
    		default: false
    	}
    },
    data() {
			return {
        username: null,
        email: null,
        password: null,
        sex: 0,
      }
    },
    created() {
    },
    mounted() {
    	var vm = this;
       $('#sex').styler({
        onSelectClosed: function() {
            vm.sex = $(this).find(":selected").val();
            vm.sex = $(this).find(":selected").val();
            }
       });
     },
		methods: {
			submit(){
				if(!this.username){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите логин'
					})
				}else if(!this.email){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите email'
					})
				}else if(!this.password){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите пароль'
					})
				}else if(this.sex === 0){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Выберите пол'
					})
				}else{
					let params = new URLSearchParams();
            params.append('username', this.username);
            params.append('email', this.email);
            params.append('password', this.password);
            params.append('sex', this.sex);

            this.$http({
                method: 'POST',
                url: 'user/registration/register',
                data: params,
            })
                .then(response => {
                	if(response.status === 200){
										this.$toast.success({
											title:'Успешно',
					    				message:'Вы успешно прошли регистрацию, просьба перейти на почту указанную при регистрации, для продолжения.'
										})
										this.$emit('close')
									}
                })
                .catch(error =>{
                	let mass = error.response.data.error
                	for (let i in mass){
         	 					this.$toast.error({
											title:'Ошибка',
					    				message: mass[i][0]
										})
        					}
                })
				}
			},
			submitExpert(){
				if(!this.username){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите логин'
					})
				}else if(!this.email){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите email'
					})
				}else if(!this.password){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Укажите пароль'
					})
				}else if(this.sex === 0){
					this.$toast.error({
						title:'Ошибка',
					   message: 'Выберите пол'
					})
				}else{
					let params = new URLSearchParams();
            params.append('username', this.username);
            params.append('email', this.email);
            params.append('password', this.password);
            params.append('sex', this.sex);

            this.$http({
                method: 'POST',
                url: 'user/registration/register-expert',
                data: params,
            })
                .then(response => {
                	if(response.status === 200){
										this.$toast.success({
											title:'Успешно',
					    				message:'Вы успешно прошли регистрацию, просьба перейти на почту указанную при регистрации, для продолжения.'
										})
										this.$emit('close')
									}
                })
                .catch(error =>{
                	this.$toast.error({
											title:'Ошибка',
					    				message: error.response.data.message
										})
                })
				}
			},
		// changeExperience(item){
		// 	this.experience = item
		// },
		},
		computed: {},
	}
</script>

<style scoped>
.boxRegister{
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

.btn_blue{
	margin-top: 10px;
}

.closeBackground{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 890;
}

</style>