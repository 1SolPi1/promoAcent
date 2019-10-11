<template>
<div class="col-md-3 col-sm-6" @click="pushToJournalItem(id)">
  <a href="javascript:void(0)" class="item_journey flipInX wow" data-wow-delay="0.5s" data-wow-iteration="1">
    <div class="head_journey">
      <span class="link_black">{{title}}</span>
    </div>
<!--    <div class="date_journey">10 января 2019</div>-->
  </a>
</div>
</template>

<script>
  export default {
    name: "JournalItem",
    components: {},
    props: {
        title:{
            type: String,
            default: ''
        },
        dates: String,
        id: Number,
        help:{
          type: Boolean,
          default: false
        }
    },
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {
      pushToJournalItem(id){
        if (this.help) {
          this.$router.push(`/info/help/article/${id}`);  
        }else{
          this.$router.push(`/info/journal/article/${id}`);
        }
      }
    },
    computed: {},
  }
</script>

<style scoped>
    
</style>