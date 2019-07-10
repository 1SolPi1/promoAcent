<template>
<div class="boxSearch">
  <div class="searchField">
    <img src="@/assets/img/closeSearch.png" alt="close" class="closeIcon" @click="$emit('close')">
    <p class="title_section">Поиск</p>
    <div class="boxInputSearch">
      <input type="text" placeholder="Введите запрос" class="searchInput">
      <button class="btn_blue">Показать</button>
    </div>
  </div>
  <span class="close" @click="$emit('close')"></span>
</div>
</template>

<script>
	export default {
    name: "Search",
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
.close{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 900;
}

.closeIcon{
  float: right;
  margin: 8px 7px 0 0;
  cursor: pointer;
}
.boxSearch{
  display: flex;
  align-items: center;
  justify-content: center;
}
.searchField{
  height: 125px;
  min-width: 300px;
  width: 50%;
  background: white;
  z-index: 1900;
  margin: 0 15px;
  border-radius: 10px;
  padding: 10px;
}

.title_section{
font-size: 24px;
color: #2F2F32;
letter-spacing: 0;
line-height: 45px;
margin-left: 6%;
}

.boxInputSearch{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: self-end;
}

.searchInput{
    width: 75%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px #d5d5d6 solid;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: #000;
    margin-left: 6%;
}

.btn_blue{
  border-radius: 6px;
  margin-left: 20px;
}
</style>