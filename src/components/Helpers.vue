<template>
<div>
    <a class="js-offcanvas-trigger" data-offcanvas-trigger="right" href="#right">Помощь</a>
    <aside class="js-offcanvas  c-offcanvas is-closed" data-offcanvas-options='{"modifiers":"right,overlay"}' id="right" role="complementary">
              <div class="quest">
        <div class="quest_title"><span>Помощь</span> <button class="js-offcanvas-close" data-button-options='{"modifiers":"m1,m2"}'>×</button></div>
          <block-helpers
            v-for="item in questList"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :desc="item.description"
          />
        </div>
     </aside>
</div>
</template>

<script>
  import blockHelpers from '@/components/BlockHelpers'
    export default {
        name: "Helpers",
        components: {
            blockHelpers
        },
        props: {},
        data() {
            return {
                active: false,
                questList: []
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
          this.getAllQuestion()
        },
        methods: {
            getAllQuestion(){
                this.$http({
                    method: 'GET',
                    url: 'pages/pages/help-category'
                })
                    .then(response=>{
                        this.questList = response.data[1]
                    })
            }
        },
        computed: {},
    }
</script>

<style scoped>
.quest_item .quest_item_content {
    transition: 0.3s;
}
</style>