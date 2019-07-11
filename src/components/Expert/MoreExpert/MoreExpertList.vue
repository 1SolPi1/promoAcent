<template>
  <div class="section_experts">
    <div class="container">
      <div class="title_experts slideInUp wow" data-wow-iteration="1">Смотрите также других экспертов категории</div>
      <div class="row">
        <profItem
          v-for="(item, index) in experts"
          :key="item.id"
          :avatar="item.avatar"
          :id="item.id"
          :name="item.name"
          :price="item.price_from"
          :rating="item.rating"
          :reviews="item.comment_count"
          :tops="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import profItem from '@/components/Questions/ProfItem'
	export default {
    name: "MoreExpertList",
    components: {
      profItem
    },
    props: {},
    data() {
			return {
        experts: null
      }
    },
    created() {
    },
    mounted() {
      new WOW().init();
      this.getExperts()
     },
		methods: {
      getExperts(){
        this.$http({
          method: 'POST',
          url: 'expert/profile/find',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          let expert = [];
          for (let key in response.data){
             expert.push(response.data[key])
          }

          this.experts = expert.slice(0,4);
        })
    }
		},
		computed: {},
	}
</script>

<style scoped>

</style>