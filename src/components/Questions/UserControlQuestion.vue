<template>
  <div class="col-xs-12 col-md-2">
    <div class="user-red-menu">
      <button>
        <svg fill="none" height="24" stroke="#4d2ed1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" x2="12" y1="5" y2="19"/>
          <line x1="5" x2="19" y1="12" y2="12"/>
        </svg>
        Дополнить
      </button>
      <button @click="removeQuestion()">
        <svg fill="#4d2ed1" viewBox="0.5 0.5 96 96" xmlns="http://www.w3.org/2000/svg">
          <path d="M84.5,20.5h-16v-4c0-6.63-5.37-12-12-12h-16c-6.63,0-12,5.37-12,12v4h-16c-2.209,0-4,1.791-4,4s1.791,4,4,4h4v48  c0,6.63,5.37,12,12,12h40c6.63,0,12-5.37,12-12v-48h4c2.209,0,4-1.791,4-4S86.709,20.5,84.5,20.5z M36.5,16.5c0-2.21,1.79-4,4-4h16  c2.21,0,4,1.79,4,4v4h-24V16.5z M72.5,76.5c0,2.21-1.79,4-4,4h-40c-2.21,0-4-1.79-4-4v-48h48V76.5z" />
        </svg>
        Удалить
      </button>
      <button>
        <svg fill="none" height="24" stroke="#4d2ed1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" x2="6" y1="6" y2="18"/>
          <line x1="6" x2="18" y1="6" y2="18"/>
        </svg>
        Закрыть
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserControlQuestion",
    components: {},
    props: {
      questionId:{
        type: String
      }
    },
    data() {
      return {
      }
    },
    created() {},
    mounted() {},
    methods: {
      removeQuestion(){
        this.$http({
            method: 'DELETE',
            url: 'question/question/remove?id=' + this.questionId,
           headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
             Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(response =>{
            if (response.status === 200){
                this.$router.push('/zadat-vopros-psihologu')
            }
          })
            .catch(error =>{
                this.$toast.error({
                    title:'Ошибка',
                    message: ' У вопроса уже есть ответы '
                })
            })
      }
    },
    computed: {},
  }
</script>

<style scoped>
    
</style>