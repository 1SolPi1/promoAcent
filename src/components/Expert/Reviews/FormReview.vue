<template>
 <div>
    <div class="helps_block boxLogin">
      <div @click="$emit('close')" class="closeButton btn_add"></div>
      <div class="title_section">Оставьте отзыв</div>
        <form class="form_help">
          <div class="title_section tittle_icon">Выберите оценку</div>
          <div>
            <ul class="summary_reviews_list">
              <li class="review_list_item" :class="{active: select === 1}" @click="select = 1"></li>
              <li class="review_list_item" :class="{active: select === 2}" @click="select = 2"></li>
              <li class="review_list_item" :class="{active: select === 3}" @click="select = 3"></li>
              <li class="review_list_item" :class="{active: select === 4}" @click="select = 4"></li>
              <li class="review_list_item" :class="{active: select === 5}" @click="select = 5"></li>
            </ul>
          </div>
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
        description: '',
        select: 0
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      submit(){
        if (this.select === 0) {
          this.$toast.error({
            title:'Ошибка',
            message: ' Выберите оценку '
          })
        }else if (this.description.length < 15) {
          this.$toast.error({
            title:'Ошибка',
            message: ' Напишите отзыв, минимум 15 символов '
          })
        }else{
          let params = new URLSearchParams();
            params.append('expert_id', this.id);
            params.append('description', this.description);
            params.append('score', this.select)

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

.summary_reviews_list{
  display: flex;
  flex-direction: row;
}

.review_list_item{
  cursor: pointer;
  opacity: 0.3;
}

.active{
  border-radius: 50%;
  opacity: 1;
}

.active::before{
  content: "";
  opacity: 1;
  border-radius: 50%;
}

.tittle_icon{
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  
}
</style>