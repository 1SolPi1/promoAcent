<template>
<div class="col-md-2 md_pr">
  <div class="summary_reviews" v-if="stats">
    <div class="title_experts">Сводка отзывов</div>
    <ul class="summary_reviews_list">
      <li>{{percent.one}}% <span>({{statistic.one}})</span></li>
      <li>{{percent.two}}% <span>({{statistic.two}})</span></li>
      <li>{{percent.three}}% <span>({{statistic.three}})</span></li>
      <li>{{percent.four}}% <span>({{statistic.four}})</span></li>
      <li>{{percent.five}}% <span>({{statistic.five}})</span></li>
    </ul>
  </div>
</div>
</template>

<script>
	export default {
    name: "ReviewsStats",
    components: {
    },
    props: {
      stats:{
        type: Array,
        default: () => []
      }
    },
    data() {
			return {
        statistic:{
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0
        },
        percent:{
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0
        }
      }
    },
    watch:{
      stats(){
         this.getStatistic()
      }
    },
    created() {
    },
    mounted() {
        setTimeout(()=>{
          this.getStatistic()
        }, 500)
     },
		methods: {
      getStatistic(){
        if (this.stats.length > 0) {
          let count = this.stats.length
        let five = this.stats.filter(map => map === 5)
        this.percent.five = ((five.length/count)*100).toFixed(0);
        this.statistic.five = five.length
         let four = this.stats.filter(map => map === 4)
        this.percent.four = ((four.length/count)*100).toFixed(0);
        this.statistic.four = four.length
         let three = this.stats.filter(map => map === 3)
        this.percent.three = ((three.length/count)*100).toFixed(0);
        this.statistic.three = three.length
         let two = this.stats.filter(map => map === 2)
        this.percent.two = ((two.length/count)*100).toFixed(0);
        this.statistic.two = two.length
         let one = this.stats.filter(map => map === 1)
        this.percent.one = ((one.length/count)*100).toFixed(0);
        this.statistic.one = one.length
        }
      },
		},
		computed: {},
	}
</script>

<style scoped>

</style>