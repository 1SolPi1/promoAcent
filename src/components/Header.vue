<template>
    <div>
        <helpers/>
        <div class="menu_hidden" :class="{'active': showHiddenMenu}">
            <div class="container">
                <div class="menu_block">
                    <ul class="list_menu">
                      <li 
                        :class="{'active': $route.path == '/questions'}" 
                        @click="showHiddenMenu = !showHiddenMenu"
                      >
                        <router-link to="/questions">Ваши вопросы</router-link>
                      </li>
                      <li 
                        :class="{'active': $route.path == '/experts'}" 
                        @click="showHiddenMenu = !showHiddenMenu"
                      >
                        <router-link to="/experts">Эксперты</router-link>
                      </li>
                      <li 
                        :class="{'active': $route.path == '/journal'}" 
                        @click="showHiddenMenu = !showHiddenMenu"
                      >
                        <router-link to="/journal">Журнал</router-link>
                      </li>
                    </ul>
                </div>
            </div>
        </div>

        <header class="main_header default">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-8">
                       <router-link to="/" class="main_logo"><img src="@/assets/img/logo.svg" alt="logo"></router-link>
                        <span class="btn_nav">
                            <span class='sandwich' @click="showHiddenMenu = !showHiddenMenu">
                                <span class='sw-topper'></span>
                                <span class='sw-bottom'></span>
                                <span class='sw-footer'></span>
                            </span>
                        </span>
                        <div class="search_main">
                            <button class="btn_search" @click="showSearch = !showSearch"></button>
                        </div>
                        <ul class="header_nav">
                            <li :class="{'active': $route.path == '/questions'}"> <router-link to="/questions">Ваши вопросы</router-link></li>
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
          v-if="showSearch"
          @close="showSearch = !showSearch"
        />
    </div>
</template>

<script>
    import $ from 'jquery'
    import logined from '@/components/Header/Logined'
    import notLogined from '@/components/Header/NotLogined'
    import search from '@/components/Search'
    export default {
        name: "Header",
        components: {
          logined,
          notLogined,
          search
        },
        props: {},
        data() {
            return {
                showHiddenMenu: false,
                showSearch: false
                }
        },
        created() {
        },
        mounted() {
            $(document).mouseup(function (e){ 
            var help = $(".helps_right"); 
                if (!help.is(e.target) 
            && help.has(e.target).length === 0) { 
            help.removeClass("active");
                }
            });
            $(document).mouseup(function (e){ 
        var div = $(".menu_hidden, .btn_nav"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            $(".menu_hidden").removeClass("active");
    }
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

        },
        computed: {
          profile(){
            return this.$store.getters.CLIENT
          }
        },
    }
</script>

<style scoped>
    
</style>