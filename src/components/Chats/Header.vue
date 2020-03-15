<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}">
    <img class="sc-header--img" :src="domen + imageUrl" alt="" v-if="imageUrl" />
    <img class="sc-header--img" src="../../assets/img/svg/avatar.svg" alt="alt" v-else/>
    <div class="sc-header--title"> {{title}} </div>
    <div class="sc-header--close-button" @click="$chatinfo.close()">
      <img src="./assets/close-icon.png" alt="" />
    </div>
  </div>
</template>
<script>

export default {
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String,
      default: ' Имя Фамилия '
    },
    colors: {
      type: Object,
    }
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit("userList", this.inUserList)
    }
  },
  computed:{
    domen(){
      return this.$store.getters.DOMEN
    }
  },
  data() {
    return {
      inUserList: false
    }
  }
}
</script>
<style scoped>
.sc-header {
  min-height: 75px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.sc-header--img {
  border-radius: 50%;
  align-self: center;
  width: 70px;
  height: 70px;
}

.sc-header--title {
  align-self: center;
  padding: 10px;
  flex: 1;
  user-select: none;
  cursor: pointer;
  border-radius: 5px;
}
.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, .1);
}

.sc-header--close-button img {
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
}

@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}
</style>
