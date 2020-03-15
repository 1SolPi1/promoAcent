<template>
<ul>
  <li
    v-for="item in categories"
    :key="item.id"
    @click="selectCategory(item.slug)"
  >
    <a href="javascript:void(0)">{{item.name}}</a>
  </li>
  <li class="mi_m"><router-link to="/info/about">О проекте</router-link></li>
  <li class="mi_m"><router-link to="/info/aboutpartners">Описание партнерства</router-link></li>
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
        this.$router.push('/zadat-vopros-' + id);
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