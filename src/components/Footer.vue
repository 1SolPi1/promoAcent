<template>
<div>
    <footer class="main_footer">
      <div class="container">
          <div class="row">
              <div class="col-md-2 col-sm-2 col-xs-12">
                  <a href="#" class="main_logo">Логотип</a>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-6">
                  <div class="title_footer">Клиентам</div>
                  <ul class="footer_list">
                      <li
                        v-for="item in category"
                        :key="item.id"
                      >
                        <a href="javascript:void(0)" @click="selectCategory(item.id)">
                          {{item.name}}
                        </a>
                      </li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-6">
                  <div class="title_footer"></div>
                  <ul class="footer_list">

                  </ul>
              </div>
              <div class="col-md-4 col-sm-2 col-xs-6">
                  <div class="title_footer">Экспертам</div>
                  <ul class="footer_list">
                      <li><a href="#">Описание партнерства</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col_pl col-sm-3 col-xs-6">
                  <ul class="footer_list footer_list_big">
                      <li><a href="#">О проекте</a></li>
                      <li><a href="#">Журнал</a></li>
                      <li><a href="#">Помощь</a></li>
                      <li><a href="#">Вопросы</a></li>
                  </ul>
              </div>
          </div>
          <div class="line_links_footer">
              <a href="#" class="link_footer">Политика конфиденциальности</a>
              <a href="#" class="link_footer">Карта сайта</a>
          </div>
          <div class="row copiright">
              <div class="col-xs-6">
                  <p>2019  «Спроси Онлайн»</p>
              </div>
              <div class="col-xs-6 right_footer">
                  <p>Сделано в <a href="#" class="link_copiright">Promoaccent</a></p>
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
      firstList: [],
      secondList:[]
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  selectCategory(id){
     this.$store.dispatch('changeSelectCategory', id);
     this.$router.push('/questions')
  }
  },
  computed: {
    category(){
      return this.$store.getters.CATEGORI
    }
  },
}
</script>

<style scoped>
    
</style>