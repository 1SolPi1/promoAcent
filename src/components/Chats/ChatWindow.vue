<template>
  <div class="sc-chat-window">
    <Header
      :title="title"
      :imageUrl="titleImageUrl"
      :colors="colors"
    />
    <MessageList
      v-if="messages"
      :messages="messages"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
    />
    <UserInput
      v-if="!showUserList"
      :showEmoji="showEmoji"
      :onSubmit="onUserInputSubmit"
      :suggestions="getSuggestions()"
      :showFile="showFile"
      :placeholder="placeholder"
      :colors="colors" 
      @addmessage="addMessages"
      />
  </div>
</template>

<script>
import Header from './Header.vue'
import MessageList from './MessageList.vue'
import UserInput from './UserInput.vue'

export default {
  name:'ChatWindows',
  components: {
    Header,
    MessageList,
    UserInput
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function
    },
    onClose: {
      type: Function
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: 'Напишите сообщение '
    },
    showTypingIndicator: {
      type: String
    },
    colors: {
      type: Object
    },
    alwaysScrollToBottom: {
      type: Boolean
    },
    messageStyling: {
      type: Boolean
    }
  },
  data() {
    return {
      showUserList: false,
      messages: [],
      mess: null
    }
  },
  sockets: {
  addMessage(message) {
   this.messages.push({
    author: message.author,
    client_id: message.client_id,
    date: message.date,
    expert_id: message.expert_id,
    message: message.content,
    room_id: message.room
   })
  },
  // removeUser(data){
  //   alert(data)
  // },
  // updateUsersList(data){
  //   alert(data)
  // },
 historyUsers(data){
     this.mess = data;
     let arr = this.messages
     // for (let i =0; i<data.length; i++){
     //     let author;
    //     if(data[i].user_id === this.idForUser){
     //               author = 'me';
    //     }else{
    //         author = data[i].user_id.toString();
    //     }
    data.forEach(function(entry) {arr.push(entry)});
    }
  },
  mounted(){
    this.createChat()
    this.connect()
    setTimeout(()=>{
      this.getHistory()
    }, 500)
  },
  computed: {

  },
  methods: {
    addMessages(data){
      // this.$socket.emit('newMessageUsers', message);
      this.messages.push(data);
    },
    handleUserListToggle(showUserList) {
      this.showUserList = showUserList
    },
    connect(){
      this.$socket.emit('joinUsers',this.$chatinfo.user_id, this.$chatinfo.expert_id);
    },
    getHistory(){
      this.$socket.emit('historyUsers',
        {
         client_id: this.$chatinfo.user_id,
         expert_id: this.$chatinfo.expert_id
        });
    },
    getSuggestions(){
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
    },
    createChat(){
      // let params = new URLSearchParams();
        // params.append('first_name', names[0]);
        // params.append('last_name', names[1]);
        // params.append('email', this.email);

        this.$http({
          method: 'GET',
          url: 'user/profile/add-chat?expert_id=' + this.$chatinfo.expert_id,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.expertinfo = response.data
        })
    }
  }
}
</script>
<style scoped>
.sc-chat-window {
  width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.1);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  z-index: 1000;
}

.sc-chat-window.closed {
  opacity: 0;
  visibility: hidden;
  bottom: 90px;
}

.sc-message--me {
  text-align: right;
}
.sc-message--them {
  text-align: left;
}

@media (max-width: 450px) {
  .sc-chat-window {
    width: 100%;
    height: 100%;
    max-height: 100%;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
  }
  .sc-chat-window {
    transition: 0.1s ease-in-out;
  }
  .sc-chat-window.closed {
    bottom: 0px;
  }
}
</style>
