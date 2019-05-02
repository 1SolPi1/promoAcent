<template>
    <div class="col-md-3 col-sm-6">
        <div class="item_expert flipInY wow" data-wow-iteration="1">
            <div class="premium_expert" v-if="tops"><span>входит в ТОП-25</span></div>
                <div class="image_expert">
                    <div class="rating_expert">{{rating}}</div>
                    <ul class="rating_item" :class="'value-'+itemStar()">
                        <li><i class="glyphicon glyphicon-star"></i></li>
                        <li><i class="glyphicon glyphicon-star"></i></li>
                        <li><i class="glyphicon glyphicon-star"></i></li>
                        <li><i class="glyphicon glyphicon-star"></i></li>
                        <li><i class="glyphicon glyphicon-star"></i></li>
                    </ul>
                    <img src="img/expert1.png" alt="alt">
                </div>
                <div class="name_expert">{{name}}<a href="#" class="link_share"></a></div>
                <div class="price_expert">от <span>{{price}} ₽</span></div>
                <a href="#" class="reviews_expert"><span>{{reviews}}</span> отзывов</a>
                <div class="btn_chat_wrap">
                    <a href="#" class="btn_chat">написать в чат</a>
                </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "ProfItem",
        components: {},
        props: {
           tops:{
            type: Boolean,
            default: false
           },
           rating:{
            type: Number,
            default: 0
           },
           name:{
            type: String,
            default: 'Имя Фамилия'
           },
           price:{
            type: Number,
            default: 0
           },
           reviews:{
            type: Number,
            default: 0
           }
        },
        data() {
            return {
                
                }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            itemStar(){
                return Math.trunc(this.rating / 2)
            }
        },
        computed: {},
    }
</script>

<style scoped>
    
</style>