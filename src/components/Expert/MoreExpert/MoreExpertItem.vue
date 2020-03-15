<template>
<div class="col-md-3 col-sm-6">
  <div class="item_expert flipInY wow" data-wow-iteration="1">
    <div class="premium_expert"><span>входит в ТОП-25</span></div>
    <div class="image_expert">
      <div class="rating_expert">10</div>
      <ul class="rating_item value-5">
        <li><i class="glyphicon glyphicon-star"></i></li>
        <li><i class="glyphicon glyphicon-star"></i></li>
        <li><i class="glyphicon glyphicon-star"></i></li>
        <li><i class="glyphicon glyphicon-star"></i></li>
        <li><i class="glyphicon glyphicon-star"></i></li>
      </ul>
       <img src="@/assets/img/expert1.png" alt="alt">
    </div>
    <div class="name_expert">Николай Тамбровский <a href="#" class="link_share"></a></div>
    <div class="price_expert">от <span>400 ₽</span></div>
    <a href="#" class="reviews_expert"><span>1 200</span> отзывов</a>
    <div class="btn_chat_wrap">
      <a href="#" class="btn_chat">написать в чат</a>
    </div>
  </div>
</div>
</template>

<script>
	export default {
    name: "MoreExpertItem",
    components: {
    },
    props: {},
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