<template>
<div class="col-md-3 col-sm-6" @click="pushToJournalItem(1)">
  <a href="javascript:void(0)" class="item_journey flipInX wow" data-wow-delay="0.5s" data-wow-iteration="1">
    <div class="head_journey">
      <span class="link_black">ТОП-6 экспертов января</span>
    </div>
    <div class="date_journey">10 января 2019</div>
  </a>
</div>
</template>

<script>
  export default {
    name: "JournalItem",
    components: {},
    props: {       
    },
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {
      pushToJournalItem(id){
        this.$router.push(`/info/journal/article/${id}`)
      }
    },
    computed: {},
  }
</script>

<style scoped>
    
</style>