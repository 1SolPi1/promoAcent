<template>
<div class="row">
  <div class="table-header user">
    <div>Статус</div>
    <div>VIP-вопросы</div>
    <div>Жалобы в арбитраж в течение</div>
    <div>Ваши отзывы об экспертах показываются первыми</div>
  </div>
  <div class="table-header tbl color user">
    <div><b>o</b>Стандарт</div>
    <div>0</div>
    <div>3 дней</div>
    <div>0</div>
  </div>
  <div class="table-header tbl color user">
    <div><b>+</b>Стандарт плюс</div>
    <div>0</div>
    <div>3 дней</div>
    <div>0</div>
  </div>
  <div class="table-header tbl color user">
    <div><b>s</b>Серебрянный</div>
    <div>2</div>
    <div>3 дней</div>
    <div>0</div>
  </div>
  <div class="table-header tbl color user">
    <div><b>g</b>Золотой</div>
    <div>20</div>
    <div>7 дней</div>
    <div>0</div>
  </div>
  <div class="table-header tbl color user">
    <div><b>d</b>Бриллиантовый</div>
    <div>1000</div>
    <div>7 дней</div>
    <div>30 дней</div>
  </div>
</div>
</template>

<script>
	export default {
    name: "BonusModal",
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
.row{
  position: absolute;
}
</style>