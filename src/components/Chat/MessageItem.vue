<template>
<div>
  <div class="clearfix" v-if="message.writer !== this.$store.getters.USERINFO.id">
      <div class="my-message-chat">
        <img :src="domen + user.avatar" alt="alt" class="avatar">
        <span class="time"><b>{{user.fullName}}</b>{{getDate(message.date)}}</span>
        <textMessage
          :data="message.message"
        />
      </div>
    </div>
    <div class="clearfix" v-else>
      <div class="my-answer-chat">
        <span class="time">{{getDate(message.date)}}</span>
        <textMessage
          :data="message.message"
        />
      </div>
    </div>
</div>
</template>

<script>
  import textMessage from '@/components/Chat/TextMessage'
	export default {
    name: "MessageItem",
    components: {
      textMessage
    },
    props: {
      message:{
        required: true
      },
      user:{
        required:true
      }
    },
    data() {
			return {
        domen: 'http://api.sprosi-online.ru/file/'
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      getDate(date){
        let time = new Date(date);
        let hour = time.getHours();
        let minute = time.getMinutes();

        return hour + ":" + minute

      }
		},
		computed: {
      myId(){
        return 
      }
    },
	}
</script>

<style scoped>
.avatar{
  border-radius: 50%;
}
</style>