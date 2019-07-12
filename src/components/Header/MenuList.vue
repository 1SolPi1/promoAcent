<template>
<ul>
  <li
    v-for="item in categories"
    :key="item.id"
    @click="selectCategory(item.id)"
  >
    <a href="javascript:void(0)">{{item.name}}</a>
  </li>
  <li class="mi_m"><a href="#">О проекте</a></li>
  <li class="mi_m"><a href="#">Описание партнерства</a></li>
</ul>
</template>

<script>
	export default {
    name: "MenuList",
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
      selectCategory(id){
        this.$store.dispatch('changeSelectCategory', id);
        this.$router.push('/questions/category/' + id);
        this.$emit('close')
      }
		},
		computed: {
      categories(){
        return this.$store.getters.CATEGORI
      },
    },
	}
</script>

<style scoped>

</style>