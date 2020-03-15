<template>
	<div class="boxListChat">
    <div v-if="chatlist.expertExpertChat.length > 0" class="chatlist">
      <chatsItem
        v-for="item in chatlist.expertExpertChat"
        :key="item[0].room_id"
        :item="item"
        :active="item[0].room_id == activeChat[0].room_id ? true : false"
        @selectchat="selectChat"
      />
    </div>
    <div v-if="chatlist.clientExpertChat.length > 0" class="chatlist">
      <chatsItem
        v-for="item in chatlist.clientExpertChat"
        :key="item[0].room_id"
        :item="item"
        @selectchat="selectChat"
      />
    </div>
  </div>
</template>

<script>
  import chatsItem from '@/components/Chat/ChatsItem'
	export default {
    name: "ListChats",
    components: {
      chatsItem
    },
    props: {
      chatlist:{
        type: Object,
        default: () => {}
      }
    },
    data() {
			return {
        activeChat: {
          0:{
            room_id: 0
          }
        }
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      selectChat(data){
        this.$emit('selectchat',
          {expertId:data.expertId , clientId:data.clientId, chats: data.chats }
          )
        this.activeChat = data.chats
      }
		},
		computed: {},
	}
</script>

<style scoped>
.chatlist{
  display: flex;
  flex-direction: column;
}

.boxListChat{
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 640px;
}
</style>