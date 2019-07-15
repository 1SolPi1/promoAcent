<template>
<div class="container">
  <breadcrumbs
        :wayPages="[
          {
            name: 'Главная',
            route: '/',
          }
        ]"
        currentPage="Условия программы 'Пригласи друга'"
        />
  <div class="title_section slideInUp wow" data-wow-iteration="1">
    Условия программы "Пригласи друга"
  </div>
</div>
</template>

<script>
export default {
  name: "ProgramShareFriends",
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