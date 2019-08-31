<template>
<div class="container">
  <div class="title_section slideInUp wow" data-wow-iteration="1">
    404
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
    methods: {},
    computed: {},
    }
</script>

<style scoped>
.container{
  height: calc(100vh - 237px);
}    
</style>