<template>
  <div class="type_text-wrap">
    <p>Ваш ответ</p>
    <textarea name="answer" id="type_answ" cols="30" rows="10" v-model="answer"></textarea>
    <a href="javascript:void(0)" class="btn_chat btn_chat_big" @click="setAnswer()">отправить</a>
    <a class="need_known" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.6 437.6">
        <path d="M194,142.8c0.8,1.6,1.6,3.2,2.4,4.4c0.8,1.2,2,2.4,2.8,3.6c1.2,1.2,2.4,2.4,4,3.6c1.2,0.8,2.8,2,4.8,2.4
        c1.6,0.8,3.2,1.2,5.2,1.6c2,0.4,3.6,0.4,5.2,0.4c1.6,0,3.6,0,5.2-0.4c1.6-0.4,3.2-0.8,4.4-1.6h0.4c1.6-0.8,3.2-1.6,4.8-2.8
        c1.2-0.8,2.4-2,3.6-3.2l0.4-0.4c1.2-1.2,2-2.4,2.8-3.6s1.6-2.4,2-4c0-0.4,0-0.4,0.4-0.8c0.8-1.6,1.2-3.6,1.6-5.2
        c0.4-1.6,0.4-3.6,0.4-5.2s0-3.6-0.4-5.2c-0.4-1.6-0.8-3.2-1.6-5.2c-1.2-2.8-2.8-5.2-4.8-7.2c-0.4-0.4-0.4-0.4-0.8-0.8
        c-1.2-1.2-2.4-2-4-3.2c-1.6-0.8-2.8-1.6-4.4-2.4c-1.6-0.8-3.2-1.2-4.8-1.6c-2-0.4-3.6-0.4-5.2-0.4c-1.6,0-3.6,0-5.2,0.4
        c-1.6,0.4-3.2,0.8-4.8,1.6H208c-1.6,0.8-3.2,1.6-4.4,2.4c-1.6,1.2-2.8,2-4,3.2c-1.2,1.2-2.4,2.4-3.2,3.6
        c-0.8,1.2-1.6,2.8-2.4,4.4c-0.8,1.6-1.2,3.2-1.6,4.8c-0.4,2-0.4,3.6-0.4,5.2c0,1.6,0,3.6,0.4,5.2
        C192.8,139.6,193.6,141.2,194,142.8z" />
        <path d="M249.6,289.2h-9.2v-98c0-5.6-4.4-10.4-10.4-10.4h-42c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h8.4v66.4
        H188c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h61.6c5.6,0,10.4-4.4,10.4-10.4V300
        C260,294,255.2,289.2,249.6,289.2z" />
        <path d="M218.8,0C98,0,0,98,0,218.8s98,218.8,218.8,218.8s218.8-98,218.8-218.8S339.6,0,218.8,0z M218.8,408.8
        c-104.8,0-190-85.2-190-190s85.2-190,190-190s190,85.2,190,190S323.6,408.8,218.8,408.8z" />
      </svg>
      Узнай как заработать на ответах
    </a>
  </div>
</template>

<script>
  export default {
    name: "ExpertAnswer",
    components: {},
    props: {
      id: Number
    },
    data() {
      return {
        answer: null
      }
    },
    created() {},
    mounted() {},
    methods: {
      setAnswer(){
        const date = new Date();
        let days = date.getDate();
        let months = date.getMonth() + 1;
        let year = date.getFullYear();
        
        let day;
        days < 10 ? day = "0"+ days: day = days;
        let month;
        months < 10 ? month = "0"+ months: month =months;

        let dates = month + "."+day+"."+year;

        let params = new URLSearchParams();
        params.append('title', '');
        params.append('description', this.answer);
        params.append('create_at', dates);
        params.append('question_id', this.id);

        this.$http({
          method: 'POST',
          url: 'question/answer/add',
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
      }
    },
    computed: {},
  }
</script>

<style scoped>
    
</style>