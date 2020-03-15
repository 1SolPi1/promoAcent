<template>
  <div>
    <Suggestions :suggestions="suggestions" v-on:sendSuggestion="_submitSuggestion" :colors="colors"/>
    <div v-if="file" class='file-container' :style="{backgroundColor: colors.userInput.text, color: colors.userInput.bg}">
      <span class='icon-file-message'><img src="./assets/file.svg" alt='genericFileIcon' height="15" /></span>
      {{file.name}}
      <span class='delete-file-message' @click="cancelFile()" ><img src="./assets/close.svg" alt='close icon' height="10" title='Remove the file' /></span>
    </div>
    <form class="sc-user-input" :class="{active: inputActive}" :style="{background: colors.userInput.bg}">
      <div
        role="button"
        tabIndex="0"
        @focus="setInputActive(true)"
        @blur="setInputActive(false)"
        @keydown="handleKey"
        contentEditable="true"
        :placeholder="placeholder"
        class="sc-user-input--text"
        ref="userInput"
        :style="{color: colors.userInput.text}"
      >
      </div>
      <div class="sc-user-input--buttons" @click="_submitText()">
        <div class="sc-user-input--button"></div>
        <div class="sc-user-input--button">
          <SendIcon :color="colors.userInput.text" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import SendIcon from './SendIcon.vue'
import Suggestions from './Suggestions.vue'

export default {
  components: {
    SendIcon,
    Suggestions
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: () => false
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => false
    },
    onSubmit: {
      type: Function
    },
    placeholder: {
      type: String,
      default: 'Напишите сообщение'
    },
    colors: {
      type: Object
    }
  },
  data () {
    return {
      file: null,
      inputActive: false
    }
  },
  methods: {
    cancelFile () {
      this.file = null
    },
    setInputActive (onoff) {
      this.inputActive = onoff
    },
    handleKey (event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this._submitText(event)
        event.preventDefault()
      }
    },
    _submitSuggestion(suggestion) {
      this.onSubmit({author: 'me', type: 'text', data: { text: suggestion }})
    },
    _submitText () {
      const text = this.$refs.userInput.textContent
     
        if (text && text.length > 0) {
          this.$socket.emit('newMessageUsers',{
            client_id: this.$chatinfo.user_id,
            expert_id: this.$chatinfo.expert_id,
            author: this.$chatinfo.author,
            writer: this.$store.getters.USERINFO.id,
            content: text
          });
          this.$emit('addmessage',{
            _id:'',
            date: new Date(),
            expert_id:2,
            author: this.$chatinfo.author,
            writer: this.$store.getters.USERINFO.id,
            message:text
          })
          }
          this.$refs.userInput.innerHTML = ''
    },
    _handleEmojiPicked (emoji) {
      this.onSubmit({
        author: 'me',
        type: 'emoji',
        data: { emoji }
      })
    },
    _handleFileSubmit (file) {
      this.file = file
    }
  }
}
</script>

<style>
.sc-user-input {
  min-height: 55px;
  margin: 0px;
  position: relative;
  bottom: 0;
  display: flex;
  background-color: #f4f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.sc-user-input--text {
  width: 300px;
  resize: none;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  padding: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #565867;
  -webkit-font-smoothing: antialiased;
  max-height: 200px;
  overflow: scroll;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.sc-user-input--text:empty:before {
  content: attr(placeholder);
  display: block; /* For Firefox */
  /* color: rgba(86, 88, 103, 0.3); */
  filter: contrast(15%);
  outline: none;
}

.sc-user-input--buttons {
  width: 100px;
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
}

.sc-user-input--button:first-of-type {
  width: 40px;
}

.sc-user-input--button {
  width: 30px;
  height: 55px;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sc-user-input.active {
  box-shadow: none;
  background-color: white;
  box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
}

.sc-user-input--button label {
  position: relative;
  height: 24px;
  padding-left: 3px;
  cursor: pointer;
}

.sc-user-input--button label:hover path {
  fill: rgba(86, 88, 103, 1);
}

.sc-user-input--button input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}

.file-container {
  background-color: #f4f7f9;
  border-top-left-radius: 10px;
  padding: 5px 20px;
  color: #565867;
}

.delete-file-message {
  font-style: normal;
  float: right;
  cursor: pointer;
  color: #c8cad0;
}

.delete-file-message:hover {
  color: #5d5e6d;
}

.icon-file-message {
  margin-right: 5px;
}
</style>
