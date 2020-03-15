<template>
<div class="col-xs-12 col-sm-4 itemChats" @click="$emit('selectchat', {expertId:item[0].expert_id , clientId:item[0].client_id, chats: item })">
  <div class="chat-list">
    <a href="javascript:void(0)" :class="{'active': active}">
      <div class="img-bl" v-if="item.opponent.avatar === null">
        <img src="@/assets/img/svg/avatar.svg" alt="alt">
        <!-- <div class="status__expert online_expert"></div> -->
      </div>
      <div class="img-bl" v-else>
        <img :src="domen + item.opponent.avatar" alt="alt" class="avatar">
        <!-- <div class="status__expert online_expert"></div> -->
      </div>
      <p>{{item.opponent.fullName}}</p>
    </a>
  </div>
</div>
</template>

<script>
	export default {
    name: "ChatItem",
    components: {
    },
    props: {
      item:{
        required: true
      },
      active:{
        type: Boolean,
        default: false
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
		},
		computed: {},
	}
</script>

<style scoped>
.itemChats{
  width: 100%;
  background: white;
}

.chat-list a{
  background: white;
}

.active{
  background: #fbfbfb !important;
}

.avatar{
  border-radius: 50%;
}
</style>