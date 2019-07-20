<template>
<div class="akcia-in-profile clearfix">
  <p class="label-akcia">Акция</p>
  <div class="left-side">
    <p class="akcia-header">{{action.name}}</p>
    <span class="akcia-body">{{action.description}}</span>
    <div class="price">
      <span class="new-price">200 ₽</span>
      <span class="old-price">1 000 ₽</span>
    </div>
  </div>
  <div class="right-side">
    <p>До конца акции:</p>
    <div data-countdown="2019/05/01"></div>
    <button class="change-button">Изменить акцию</button>
  </div>
</div> 
</template>

<script>
	export default {
    name: "ExpertBonus",
    components: {

    },
    props: {
      action:{
        required: true
      }
    },
    data() {
			return {
				
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