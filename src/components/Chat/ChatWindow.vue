<template>
<div class="modal-content row">
  <leftSideBar 
    v-if="showChatList"
    :chatlist="chatList"
    @selectchat="selectChat"
  />
  <mains
    @visiblelist="showChatList = !showChatList"
    :expertId="expertId"
    :clientId="clientId"
    :activechat="activeChat"
  />
</div>
</template>

<script>
  import leftSideBar from '@/components/Chat/LeftSideBar'
  import mains from '@/components/Chat/Main'
	export default {
    name: "ChatWindow",
    components: {
      leftSideBar,
      mains
    },
    props: {},
    data() {
			return {
        showChatList: true,
        expertId: null,
        clientId: null,
        activeChat: null
      }
    },
    created() {
    },
    mounted() {
      this.getChats()
     },
		methods: {
    selectChat(data){
      this.expertId = data.expertId;
      this.clientId = data.clientId;
      this.activeChat = data.chats;
    },
    getChats(){
      this.expertId = this.$chatinfo.expert_id
      this.clientId = this.$chatinfo.user_id
      this.activeChat = this.$chatinfo.activechat
    }
		},
		computed: {
      chatList(){
        return this.$store.getters.CHATS
      }
    },
	}
</script>

<style scoped>
.modal-content{
  display: flex;
  flex-direction: row;
}
</style>