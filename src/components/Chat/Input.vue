<template>
  <div>
   <textarea 
    name="chat" 
    id="chat" 
    cols="30" 
    rows="10" 
    v-model="newMessage" 
    @keydown="handleKey" 
    :disabled="activechat[0].counter < 1"
    v-if="activechat[0].client_id === $store.getters.PROFILE.user_id"
  >
  </textarea>
   <textarea name="chat" id="chat" cols="30" rows="10" v-model="newMessage" @keydown="handleKeyExpert" v-else></textarea>
   <div class="modal-footer" style="justify-content: flex-end;" >
  <!-- <button type="button" class="btn btn-secondary" @click="$emit('visiblelist')">
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.615,48l22.627-22.627c1.562-1.562,1.562-4.095,0-5.657c-1.562-1.562-4.094-1.562-5.656,0L17.13,45.171  c-1.562,1.562-1.562,4.095,0,5.657l25.456,25.456c1.562,1.562,4.095,1.562,5.656,0c1.562-1.562,1.562-4.095,0-5.657L25.615,48z"/>
      <path d="M53.656,48l22.628-22.627c1.562-1.562,1.562-4.095,0-5.657c-1.562-1.562-4.095-1.562-5.657,0L45.172,45.171  c-1.562,1.562-1.562,4.095,0,5.657l25.455,25.456c1.562,1.562,4.095,1.562,5.657,0c1.562-1.562,1.562-4.095,0-5.657L53.656,48z"/>
    </svg> 
    cкрыть чаты
  </button> -->
  <button 
    type="button" 
    class="btn btn-primary btn_chat" 
    @click="_submitText()" 
    :class="{hide: activechat[0].counter < 1}"
    v-if="activechat[0].client_id === $store.getters.PROFILE.user_id"
  >
    Отправить
  </button>
  <button type="button" class="btn btn-primary btn_chat" @click="submitTextExpert()" v-else>Отправить</button>
</div>
</div>
</template>

<script>
  import EventBus from '@/scripts/eventBus';
	export default {
    name: "Input",
    components: {
    },
    props: {
      activechat:{
        required: true
      }
    },
    data() {
			return {
        newMessage: null
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
    handleKey (event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this._submitText(event)
        event.preventDefault()
      }
    },
    handleKeyExpert (event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this.submitTextExpert(event)
        event.preventDefault()
      }
    },
    showChatList () {
       EventBus.$emit('showListChat');
    },
    _submitText () {
      const text = this.newMessage
     
        if (text && text.length > 0) {
          this.$socket.emit('newMessageUsers',{
            client_id: this.activechat[0].client_id,
            expert_id: this.activechat[0].expert_id,
            author: 0,
            writer: this.$store.getters.USERINFO.id,
            content: text
          });
          this.$emit('addmessage',{
            _id:'',
            date: new Date(),
            client_id: this.activechat[0].client_id,
            expert_id: this.activechat[0].expert_id,
            author: 0,
            writer: this.$store.getters.USERINFO.id,
            message:text
          })
          }
          this.newMessage = null
    },
    submitTextExpert () {
      const text = this.newMessage
     
        if (text && text.length > 0) {
          this.$socket.emit('newMessageUsers',{
            client_id: this.activechat[0].client_id,
            expert_id: this.activechat[0].expert_id,
            author: 1,
            writer: this.$store.getters.USERINFO.id,
            content: text
          });
          this.$emit('addmessage',{
            _id:'',
            date: new Date(),
            client_id: this.activechat[0].client_id,
            expert_id: this.activechat[0].expert_id,
            author: 1,
            writer: this.$store.getters.USERINFO.id,
            message:text
          })
          }
          this.newMessage = null
    },
		},
		computed: {},
	}
</script>

<style scoped>
.hide{
  display: none !important;
}
</style>