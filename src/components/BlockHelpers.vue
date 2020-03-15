<template>
  <div class="quest_item">
    <div class="quest_click" :data-target="id">{{title}}</div>
    <div :id="id" class="quest_item_content">{{desc}}</div>
  </div>
</template>

<script>
    export default {
        name: "BlockHelpers",
        props: {
            id: Number,
            title: String,
            desc: String
        },
        data() {
            return {}
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
        methods: {},
        computed: {},
    }
</script>

<style scoped>

</style>