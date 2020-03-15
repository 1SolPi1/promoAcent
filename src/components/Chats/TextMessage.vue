<template>
  <div class="sc-message--text" :style="messageColors">
    <p v-html="data"></p>
  <!--   <p v-if="data.meta" class='sc-message--meta' :style="{color: messageColors.color}">{{data.meta}}</p> -->
  </div>
</template>

<script>
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'
const fmt = require('msgdown')

export default {
  props: {
    data: {
      type: String
    },
    messageColors: {
      type: Object
    },
    messageStyling: {
      type: Boolean
    }
  },
  computed: {
    // messageText() {
    //   const escaped = escapeGoat.escape(this.data)

    //   return Autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
    //     className: 'chatLink',
    //     truncate: { length: 50, location: 'smart' }
    //   })
    // }
  }
}
</script>

<style scoped>
a.chatLink {
  color: inherit !important;
}
</style>
