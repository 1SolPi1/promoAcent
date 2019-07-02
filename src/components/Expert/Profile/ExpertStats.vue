<template>
<div class="section_statistics">
  <div class="container">
    <div class="block_statistics">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="item_statistics">
            <img src="@/assets/img/statistics_icon1.png" alt="alt">
            <p>Рейтинг <strong>{{rating || 0}}</strong> из 10</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="item_statistics">
            <img src="@/assets/img/statistics_icon2.png" alt="alt">
            <p><strong>{{comment}}</strong> отзывов</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="item_statistics">
            <img src="@/assets/img/statistics_icon3.png" alt="alt">
            <p><strong>{{answer.length}}</strong> ответов <span>({{answerbest}} лучших)</span></p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="item_statistics">
            <img src="@/assets/img/statistics_icon4.png" alt="alt">
            <p><strong>{{startprice}}₽  - {{endprice}}₽ </strong></p>
            <span>(стоимость консультации)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
	export default {
    name: "ExpertStats",
    components: {
    },
    props: {
      rating: String,
      comment: Number,
      answer: {
        type: Array,
        default: []
      },
      answerbest: Number,
      startprice: Number,
      endprice: Number
    },
    data() {
			return {
				register: false,
        login: false
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
		},
		computed: {},
	}
</script>

<style scoped>

</style>