<template>
<div class="container">
  <div class="title_section slideInUp wow" data-wow-iteration="1">
    <div class="error">
      <div>  ОШИБКА 404 - Страница не найдена</div>
      <div><a href="/">Перейти на главную</a></div>
</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "QuestionItem",
    components: {},
    props: {},
    data() {
      return {}
    },
    created() {},
    mounted() {
      new WOW().init();
    },
    methods: {
        goHome(){
            this.$router.push('/');
        }
    },
    computed: {},
    }
</script>

<style scoped>
.container{
  height: calc(100vh - 237px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_blue{
  border-radius: 10px;
  font-size: 27px;
  font-weight: lighter;
  font-family: "SFUIDisplay-Regular", sans-serif;
  margin-top: 40px;
}
.title_section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>