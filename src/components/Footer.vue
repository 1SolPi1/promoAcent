<template>
<div>
    <footer class="main_footer">
      <div class="container">
          <div class="row">
              <div class="col-md-2 col-sm-2 col-xs-12">
                   <router-link to="/" class="main_logo"><img src="@/assets/img/logo.svg" alt="logo"></router-link>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-6">
                  <div class="title_footer">Клиентам</div>
                  <ul class="footer_list">
                      <li
                        v-for="item in firstList"
                        :key="item.id"
                      >
                        <a href="javascript:void(0)" @click="selectCategory(item.slug)">
                          {{item.name}}
                        </a>
                      </li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-6">
                  <div class="title_footer"></div>
                  <ul class="footer_list">
                    <li
                        v-for="item in secondList"
                        :key="item.id"
                      >
                        <a href="javascript:void(0)" @click="selectCategory(item.slug)">
                          {{item.name}}
                        </a>
                      </li>
                  </ul>
              </div>
              <div class="col-md-4 col-sm-2 col-xs-6">
                  <div class="title_footer">Экспертам</div>
                  <ul class="footer_list">
                      <li><router-link to="/aboutpartners">Описание партнерства</router-link></li>
                  </ul>
              </div>
              <div class="col-md-2 col_pl col-sm-3 col-xs-6">
                  <ul class="footer_list footer_list_big">
                      <li><router-link to="/about">О проекте</router-link></li>
                      <li><router-link to="/journal">Журнал</router-link></li>
                      <li><router-link to="/help">Помощь</router-link></li>
                      <li><router-link to="/questions">Вопросы</router-link></li>
                  </ul>
              </div>
          </div>
          <div class="line_links_footer">
              <router-link to="/policy" class="link_footer">Политика конфиденциальности</router-link>
          </div>
          <div class="row copiright">
              <div class="col-xs-6">
                  <p>2019  «Спроси Онлайн»</p>
              </div>
              <div class="col-xs-6 right_footer">
                  <p>Сделано <a href="https://web-rus.com" class="link_copiright">веб студией Русь</a></p>
              </div>
          </div>
      </div>
  </footer>
</div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {},
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  selectCategory(id){
     this.$store.dispatch('changeSelectCategory', id);
     this.$router.push('/zadat-vopros-' + id);
  }
  },
  computed: {
    firstList(){
      return this.$store.getters.FIRSTLISTCATEGORYFOOTER
    },
    secondList(){
      return this.$store.getters.SECONDLISTCATEGORYFOOTER
    }
  },
}
</script>

<style scoped>
    
</style>