<template>
   <div class="col-md-6">
                        <div class="block_question slideInUp wow" data-wow-iteration="1">
                            <div class="name_question">{{title}}</div>
                            <div class="price_question">{{price}} ₽</div>
                            <div class="category_question">{{category}}</div>
                            <div class="status_question" v-if="status">Решено</div>
                            <div class="wrap_link_question">
                                <a href="#" class="link_gray">Читать полностью</a>
                            </div>
                            <div class="bottom_question clearfix">
                                <div class="data_question">{{date}}</div>
                                <div class="user_question">{{person}}</div>
                                <a href="#" class="all_questions_user">всего <span>{{countAnswer}}</span> ответа</a>
                            </div>
                        </div>
                    </div>
</template>

<script>
    export default {
        name: "QuestionItem",
        components: {},
        props: {
            category:{
                type: String,
                default: 'category'
            },
            countAnswer:{
                type: Number,
                default: 0
            },
            date:{
                type: String,
                default: '01 Января 2019'
            },
            person:{
                type: String,
                default: 'Анонимно'
            },
            price:{
                type: String,
                default: '100'
            },
            status:{
                type: Boolean,
                default: false
            },
            title:{
                type: String,
                default: 'title1'
            }
        },
        data() {
            return {
                active: false
                }
        },
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {},
    }
</script>

<style scoped>
    
</style>