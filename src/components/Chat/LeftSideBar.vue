<template>
	<div class="boxListChats" :class="{'showList': showList}">
   <listChats
    :chatlist="chatlist"
    @selectchat="selectChat"
   />
  </div>
</template>

<script>
  import EventBus from '@/scripts/eventBus';
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
        showList: false
      }
    },
    created() {
    },
    mounted() {
    EventBus.$on('showListChat', ()=> {
      this.showList = !this.showList
    });
     },
     beforeDestroy() {
      EventBus.$off('showListChat', ()=> {
          this.showList = !this.showList
        });
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
.boxListChats{
  width: 40%;
}

.showList{
  width: 0% !important;
}
</style>