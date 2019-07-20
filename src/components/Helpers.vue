<template>
<div>
    <a class="js-offcanvas-trigger" data-offcanvas-trigger="right" href="#right">Помощь</a>
    <aside class="js-offcanvas  c-offcanvas is-closed" data-offcanvas-options='{"modifiers":"right,overlay"}' id="right" role="complementary">
              <div class="quest">
        <div class="quest_title"><span>Помощь</span> <button class="js-offcanvas-close" data-button-options='{"modifiers":"m1,m2"}'>×</button></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q1">Что такое СпросиОнлайн?</div>
        <div id="q1" class="quest_item_content">Много много текста тут о том что такое спросионалайн и тд.</div>
        </div>
        <div class="quest_item">
        <div class="quest_click" data-target="q2">Почему нужно регистрироваться</div><div id="q2" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироваться Ответ на вопрос почкму нужно регистрироватьсяОтвет на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q3">Как посмотреть информацию о эксперте</div><div id="q3" class="quest_item_content">Ответ на вопрос Как посмотреть информацию о эксперте</div></div>
        
        <div class="quest_item">
        <div class="quest_click" data-target="q4">Как стать экспертом на сайте</div><div id="q4" class="quest_item_content">Ответ на вопрос Как стать экспертом на сайте</div></div>
        
        <div class="quest_item">
        <div class="quest_click" data-target="q5">Почему нужно регистрироваться</div><div id="q5" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q6">Почему нужно регистрироваться</div><div id="q6" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q7">Почему нужно регистрироваться</div><div id="q7" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q8">Почему нужно регистрироваться</div><div id="q8" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q9">Почему нужно регистрироваться</div><div id="q9" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q10">Почему нужно регистрироваться</div><div id="q10" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q11">Почему нужно регистрироваться</div><div id="q11" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q12">Почему нужно регистрироваться</div><div id="q12" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q13">Почему нужно регистрироваться</div><div id="q13" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q14">Почему нужно регистрироваться</div><div id="q14" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q15">Почему нужно регистрироваться</div><div id="q15" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        <div class="quest_item">
        <div class="quest_click" data-target="q16">Почему нужно регистрироваться</div><div id="q16" class="quest_item_content">Ответ на вопрос почкму нужно регистрироваться</div></div>
        </div>
     </aside>
</div>
</template>

<script>
    export default {
        name: "Helpers",
        components: {},
        props: {},
        data() {
            return {
                active: false
                }
        },
        created() {
        },
        mounted() {
          $( document ).trigger( "enhance" );
          $('.quest_click').click(function(){
            let id = $(this).data('target');
            $('.quest_click').not(this).removeClass('qc_active');
            $('.quest_item_content').not('#'+id).removeClass('q_active');
            $(this).toggleClass('qc_active');
            $('#'+id).toggleClass('q_active');
          });
        },
        methods: {
        },
        computed: {},
    }
</script>

<style scoped>
.quest_item .quest_item_content {
    transition: 0.3s;
}
</style>