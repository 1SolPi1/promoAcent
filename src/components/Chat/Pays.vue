<template>
<form action="">
  <input type="text" :value="activechat.opponent.sum" disabled="true">
  <button @click.prevent="payToExpert()">заплатить</button>
</form>
</template>

<script>
  export default {
    name: "Pays",
    components: {
    },
    props: {
      activechat:{
        type: Object,
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
     },
    methods: {
      payToExpert(){
        let params = new URLSearchParams();
        params.append('expert_id', this.activechat[0].expert_id);

        this.$http({
          method: 'POST',
          url: 'chat/chat/transfer',
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          if (response.status === 200) {
            this.$toast.success({
              title:'Успешно',
              message:'Оплата подтверждена, вы можете продолжить общение'
            })
             this.$store.dispatch('getChats');
             this.$store.dispatch('getProfile');
          }
        })
        .catch(error =>{
          this.$toast.error({
            title:'Ошибка',
            message:'Не достаточно денег на счету'
          })
        })
      }
    },
    computed: {},
  }
</script>

<style scoped>

</style>