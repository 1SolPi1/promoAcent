<template>
	<div>
		<chatWindow
			v-if="open"
      :onUserInputSubmit="onMessageWasSent"
      :participants="participants"
      :title="names"
      :titleImageUrl="titleImageUrl"
      :onClose="close"
      :showEmoji="showEmoji"
      :showFile="showFile"
      :placeholder="placeholder"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
		/>
	</div>
</template>

<script>
	import chatWindow from '@/components/Chats/ChatWindow'
export default {
	name: "Chat",
	components: {
		chatWindow
	},
	 props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean
    },
    close: {
      type: Function
    },
    showFile: {
      type: Boolean,
      default: false
    },
    participants: {
      type: Array
    },
    title: {
      type: String,
      default: () => ''
    },
    onMessageWasSent: {
      type: Function
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: 'Напишите сообщение'
    },
    showTypingIndicator: {
      type: String,
      default: () => ''
    },
    colors: {
      type: Object,
      required: false,
      validator: c => 
        'header' in c
        && 'bg' in c.header && 'text' in c.header
        && 'launcher' in c
        && 'bg' in c.launcher
        && 'messageList' in c
        && 'bg' in c.messageList
        && 'sentMessage' in c
        && 'bg' in c.sentMessage && 'text' in c.sentMessage
        && 'receivedMessage' in c
        && 'bg' in c.receivedMessage && 'text' in c.receivedMessage
        && 'userInput' in c
        && 'bg' in c.userInput && 'text' in c.userInput,
      default: function () {
        return {
          header: {
            bg: '#4e8cff',
            text: '#ffffff'
          },
          launcher: {
            bg: '#4e8cff'
          },
          messageList: {
            bg: '#ffffff'
          },
          sentMessage: {
            bg: '#4e8cff',
            text: '#000'
          },
          receivedMessage: {
            bg: '#f4f7f9',
            text: '#000'
          },
          userInput: {
            bg: '#f4f7f9',
            text: '#565867'
          }
        }
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => false
    },
    messageStyling: {
      type: Boolean,
      default: () => true
    }
  },
	data() {
		return {}
	},
	created() {},
	mounted() {},
	methods: {},
	computed: {
		open(){
		return this.$chatinfo.open
		},
		names(){
		return this.$chatinfo.name
		},
		titleImageUrl(){
			return this.$chatinfo.avatar
		}
	},
}
</script>
<style scoped>
</style>