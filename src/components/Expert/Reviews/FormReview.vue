<template>
 <div>
    <div class="helps_block boxLogin">
      <div @click="$emit('close')" class="closeButton btn_add"></div>
      <div class="title_section">Оставьте отзыв</div>
        <form class="form_help">
          <input type="text" placeholder="Название" v-model="title" required class="titleReview">
          <textarea placeholder="Отзыв" v-model="description" class="descReview"></textarea>
          <button class="btn_blue"  @click.prevent="submit()">Отправить</button>
        </form>
    </div>
    <span class="closeBackground" @click="$emit('close')"></span>
  </div>
</template>

<script>
	export default {
    name: "FormReview",
    components: {
    },
    props: {
      id:{
        type: Number,
        default: 0
      }
    },
    data() {
			return {
        title: null,
        description: null
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      submit(){
        let params = new URLSearchParams();
            params.append('expert_id', this.id);
            params.append('title', this.title);
            params.append('description', this.description);

            this.$http({
                method: 'POST',
                url: 'expert/comment/add',
                data: params,
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                Authorization: "Bearer " + localStorage.getItem('token')
              }
            })
                .then(response => {
                  this.$toast.success({
                      title:'Успешно',
                      message: ' Ваш отзыв добавлен '
                    })
                  this.$emit('refresh')
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
.boxLogin{
  position: fixed;
  left: 50%;
  top: 20%;
  z-index: 900;
  margin-left: -150px;
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
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 890;
}

.titleReview{
  width: 100%;
    border: none;
    padding: 12px;
    background: #f7f7f7;
    border-radius: 5px;
}

.descReview{
  width: 100%;
    background: #f7f7f7;
    border: none;
    padding: 12px;
    resize: none;
    border-radius: 5px;
    height: 100px;
}
</style>