<template>
<div class="col-xs-12 col-sm-8">
  <headers
    :activechat="activechat"
  />
  <listMessage
    :messages="messages"
    :user="activechat.opponent"
    :activechat="activechat"
    @addmessage="addMessages"
  />
<!--   <footerMain
    @visiblelist="$emit('visiblelist')"
  /> -->
</div>
</template>

<script>
  import listMessage from '@/components/Chat/ListMessages'
  import headers from '@/components/Chat/Header'
  import footerMain from '@/components/Chat/FooterMain'
	export default {
    name: "Main",
    components: {
      listMessage,
      headers,
      footerMain
    },
    props: {
      expertId:{
        type: Number
      },
      clientId:{
        type: Number
      },
      activechat:{
        required: true
      }
    },
    data() {
			return {
        messages:[],
      }
    },
    watch:{
      expertId(){
        this.connect()
        setTimeout(()=>{
          this.getHistory()
        }, 500)
      },
      clientId(){
        this.connect()
        setTimeout(()=>{
          this.getHistory()
        }, 500)
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
    writer: message.writer,
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
     this.messages = []
     if (data.length > 0) {
      this.readMessage(data[0].room_id)
     }
     // const that = this
     // for (let i =0; i<data.length; i++){
     //     let author;
    //     if(data[i].user_id === this.idForUser){
     //               author = 'me';
    //     }else{
    //         author = data[i].user_id.toString();
    //     }
    data.forEach((entry) => {
      // if (entry.writer !== that.$store.getters.USERINFO.id && entry.read !== true) {
      //   that.$socket.emit('readUser',
      //   {
      //    message: entry.message,
      //    room_id: entry.room_id,
      //    date: entry.date,
      //    id: entry._id
      //   });
      // }
     this.messages.push(entry)
    });
    }
  },
    created() {
    },
    mounted() {
     },
		methods: {
    readMessage(roomId){
      // let params = new URLSearchParams();
        // params.append('first_name', names[0]);
        // params.append('last_name', names[1]);
        // params.append('email', this.email);

        this.$http({
          method: 'GET',
          url: 'chat/chat/read-user-message?roomId=' + roomId,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
    },
    addMessages(data){
      // this.$socket.emit('newMessageUsers', message);
      this.messages.push(data);
    },
    connect(){
      this.$socket.emit('joinUsers',this.clietnId, this.expertId);
    },
    getHistory(){
      this.$socket.emit('historyUsers',
        {
         client_id: this.clientId,
         expert_id: this.expertId
        });
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
		},
		computed: {},
	}
</script>

<style scoped>

</style>