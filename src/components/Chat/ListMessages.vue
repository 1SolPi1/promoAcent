<template>
<div class="modal-body">
  <p class="notPay" v-if="activechat[0].counter < 1 && activechat[0].client_id === $store.getters.PROFILE.user_id">Для продолжения общения оплатите чат</p>
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

.hide{
  display: none;
}

.notPay{
  width: 100%;
  height: 25px;
  text-align: center;
  background: red;
  color: white;
  position: absolute;
  line-height: 25px;
  top: 0;
}
</style>