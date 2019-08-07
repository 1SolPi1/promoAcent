<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="open">
    <div class="modal-dialog" role="document">
      <chatWindow/>
    </div>
    <!-- <span class="close"></span> -->
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
      close(){
        this.$store.dispatch('getChats');
        this.$chatinfo.close();
      }
    },
	}
</script>

<style scoped>
.modal{
  display: block;
  overflow: scroll;
}

.close{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 900;
}

.modal-dialog{
  margin-top: 150px;
  height: 500px;
  z-index: 1500;
}
</style>