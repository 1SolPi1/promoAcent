<template>
    <div>
        <helpers/>
        <header class="main_header default">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-8">
                       <router-link to="/" class="main_logo"><img src="@/assets/img/logo.svg" alt="logo"></router-link>
                       <span class="btn_nav btn_navd">
                        <span class='sandwich'>
                          <span class='sw-topper'></span>
                          <span class='sw-bottom'></span>
                          <span class='sw-footer'></span>
                        </span>
                      </span>
                      
                      
                      <div class="go_menu_container">
                        <menuList
                          @close="close()"
                        />
                      </div>
                        <div class="search_main">
                            <button class="btn_search" @click="showSearchQuest = !showSearchQuest" v-if="$route.path == '/questions'"></button>
                             <button class="btn_search" @click="showSearchExp = !showSearchExp" v-if="$route.path == '/experts'"></button>
                        </div>
                        <ul class="header_nav">
                            <li :class="{'active': $route.path == '/questions'}"> <router-link to="/questions/psihologia">Ваши вопросы</router-link></li>
                            <li :class="{'active': $route.path == '/experts'}"><router-link to="/experts">Эксперты</router-link></li>
                            <li :class="{'active': $route.path == '/journal'}"><router-link to="/journal">Журнал</router-link></li>
                        </ul>
                    </div>
                    <logined  v-if="profile"/>
                    <notLogined v-else/>
                </div>
            </div>
        </header>
        <chat />
        <search
          v-if="showSearchQuest"
          :questions="true"
          @close="showSearchQuest = !showSearchQuest"
        />
        <search
          v-if="showSearchExp"
          :experts="true"
          @close="showSearchExp = !showSearchExp"
        />
        <div class="h_kl"></div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import logined from '@/components/Header/Logined'
    import menuList from '@/components/Header/MenuList'
    import notLogined from '@/components/Header/NotLogined'
    import search from '@/components/Search'
    import launcher from '@/components/Chat/Launcher'
    export default {
        name: "Header",
        components: {
          logined,
          notLogined,
          search,
          menuList,
          launcher
        },
        props: {},
        data() {
          return {
            showHiddenMenu: false,
            showSearchQuest: false,
            showSearchExp: false
          }
        },
        created() {
        },
        mounted() {
            $(".btn_nav").click(function() {
            $(".go_menu_container").toggleClass("active");
            $(".btn_nav").toggleClass("actived");
            $(".h_kl").toggleClass("activedi");
          });


            $(".h_kl").click(function() {
            $(".go_menu_container").toggleClass("active");
            $(".btn_nav").toggleClass("actived");
            $(".h_kl").toggleClass("activedi");
          });
            //прилипающие меню
          var $menu = $(".main_header");
          $(window).scroll(function(){
              if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                  $menu.removeClass("default").addClass("fixed");
              } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                  $menu.removeClass("fixed").addClass("default");
              }
          });
        },
        methods: {
          close(){
            $(".go_menu_container").toggleClass("active");
            $(".btn_nav").toggleClass("actived");
            $(".h_kl").toggleClass("activedi");
          }
        },
        computed: {
          profile(){
            return this.$store.getters.CLIENT
          }
        },
    }
</script>

<style scoped>
.h_kl{
  z-index: 100;
}
</style>