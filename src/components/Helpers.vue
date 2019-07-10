<template>
  <div>
    <div class="helps_right" :class="{'active': active}">
      <a href="javascript:void(0)" class="btn_help" @click="active = !active" ><span>помощь</span></a>
      <div class="helps_block">
        <div class="title_section">Задайте вопрос</div>
        <form class="form_help">
          <input type="text" required placeholder="Ваше имя">
          <input type="text" required placeholder="Ваш телефон">
          <button class="btn_blue">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Helpers",
        components: {},
        props: {},
        data() {
            return {
                active: false
                }
        },
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {},
    }
</script>

<style scoped>
    
</style>