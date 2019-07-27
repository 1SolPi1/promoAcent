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
      this.createChat()
     },
		methods: {
      createChat(){
        this.$http({
          method: 'GET',
          url: 'user/profile/add-chat?expert_id=' + this.$chatinfo.expert_id,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          if (response.status === 200) {
            this.$store.dispatch('getChats');
          }
        })
    }
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