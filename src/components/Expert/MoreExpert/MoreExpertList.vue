<template>
  <div class="section_experts">
    <div class="container">
      <div class="title_experts slideInUp wow" data-wow-iteration="1">Смотрите также других экспертов категории</div>
      <div class="row">
        <moreExpertItem

        />
      </div>
    </div>
  </div>
</template>

<script>
  import moreExpertItem from '@/components/Expert/MoreExpert/MoreExpertItem'
	export default {
    name: "MoreExpertList",
    components: {
      moreExpertItem
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