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
    watch:{
      chatList(){
        this.setActiveChat()
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
      this.checkCreatingChat()
    },
    checkCreatingChat(){
      let chats = [];
      for(let key in this.chatList){
        this.chatList[key].forEach(item => chats.push(item))
      }

      let chatuser = chats.find(item => item[0].expert_id === this.$chatinfo.expert_id)
      if (chatuser === undefined) {
        this.createChat()
      }else{
        this.setActiveChat()
      }
    },
    setActiveChat(){
      let chats = [];
      for(let key in this.chatList){
        this.chatList[key].forEach(item => chats.push(item))
      }
      let chatuser = chats.filter(item => item[0].expert_id === this.$chatinfo.expert_id)
      let expertchat = chatuser.find(item => item[0].client_id === this.$chatinfo.user_id)
      this.activeChat = expertchat;
    },
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