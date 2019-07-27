<template>
<div class="modal-body">
  <div class="boxMessages" ref="scrollList">
  <messageItem
    v-for="message in messages"
    :key="message._id"
    :message="message"
    :user="user"
  />
  </div>
  <inputs
    :activechat="activechat"
    @addmessage="addMessage"
  />
</div>
</template>

<script>
  import inputs from '@/components/Chat/Input'
  import messageItem from '@/components/Chat/MessageItem'
	export default {
    name: "ListMessage",
    components: {
      messageItem,
      inputs
    },
    props: {
      messages:{
        required: true
      },
      user:{
        required: true
      },
      activechat:{
        required: true
      }
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
      this._scrollDown()
     },
		methods: {
    _scrollDown () {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
    },
      addMessage(data){
        this.$emit('addmessage', data)
      }
		},
    updated () {
      this.$nextTick(this._scrollDown())
    },
		computed: {},
	}
</script>

<style scoped>
.boxMessages{
  height: 300px;
  overflow-y: auto;
}
</style>