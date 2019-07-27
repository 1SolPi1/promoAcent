<template>
	<div class="boxListChats">
   <listChats
    :chatlist="chatlist"
    @selectchat="selectChat"
   />
  </div>
</template>

<script>
  import listChats from '@/components/Chat/ListChats'
	export default {
    name: "LeftSidebar",
    components: {
      listChats
    },
    props: {
      chatlist:{
        type: Object,
        default: () => {}
      }
    },
    data() {
			return {
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
      }
		},
		computed: {},
	}
</script>

<style scoped>
</style>