<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="open">
    <div class="modal-dialog" role="document">
      <chatWindow/>
    </div>
  </div>
</template>

<script>
  import chatWindow from '@/components/Chat/ChatWindow'
	export default {
    name: "Launcher",
    components: {
      chatWindow
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
		computed: {
    open(){
      return this.$chatinfo.open
      },
    },
	}
</script>

<style scoped>
.modal{
  display: block;
  overflow: scroll;
}

.modal-dialog{
  margin-top: 150px;
  height: 500px;
}
</style>