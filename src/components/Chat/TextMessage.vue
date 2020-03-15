<template>
    <p v-html="data"></p>
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
p{
  font-size: 14px;
}
</style>
