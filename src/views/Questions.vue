<template>
    <div>
        <headers/>
            <div class="section_questions_top">
            <div class="container">
                <div class="your_question">Ваши вопросы — <span>Психология</span></div>
                <div class="choose_question">
                    <span>Вопросы по</span>
                    <select class="select_category">
                        <option value="1">Психологии</option>
                        <option value="1">Медицина</option>
                        <option value="1">Юриспруденция</option>
                        <option value="1">Учеба и наука</option>
                        <option value="1">Эзотерика</option>
                        <option value="1">Красота</option>
                        <option value="1">Английский</option>
                        <option value="1">Хобби</option>
                        <option value="1">Бизнес</option>
                        <option value="1">Религия</option>
                        <option value="1">Технологии</option>
                    </select>
                    <select class="select_main">
                        <option value="1">Выберите подкатегорию</option>
                        <option value="1">подкатегория 1</option>
                        <option value="1">подкатегория 2</option>
                        <option value="1">подкатегория 3</option>
                        <option value="1">подкатегория 4</option>
                        <option value="1">подкатегория 1</option>
                        <option value="1">подкатегория 2</option>
                        <option value="1">подкатегория 3</option>
                        <option value="1">подкатегория 4</option>
                        <option value="1">подкатегория 2</option>
                        <option value="1">подкатегория 3</option>
                        <option value="1">подкатегория 4</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="section_ask">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="title_middle">Задайте <span>бесплатно</span> вопрос и получите ответ</div>
                        <form class="form_ask">
                            <div class="wrap_input_ask">
                                <textarea required placeholder="Введите ваш вопрос" :class="{'active': resizeTextarea}"></textarea>
                                <div class="more_ask_wrap">
                                    <div class="btn_more_ask" @click="resizeTextarea = !resizeTextarea"><span>расширить поле</span></div>
                                </div>
                            </div>
                            <button class="btn_blue">Задать вопрос</button>
                            <div class="pay_wrap">
                                <div class="pay_text">
                                    <span>Оплатите ваш вопрос, для гарантированного получения ответа</span><br><span>от самых лучших специалистов</span>
                                </div>
                                <a href="#" class="btn_white"><span>Оплатить</span></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="image_ask zoomIn wow" data-wow-iteration="1">
                    <img src="img/image_ask.png" alt="alt">
                </div>
            </div>
        </div>

        <div class="section_questions">
            <div class="container">
                <div class="head_questions">
                    <div class="sorting_questions">
                        <span class="title_sorting">Сортировать:</span>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio1" />
                            <label for="radio1"><img src="img/sort1.png" alt="alt">последние</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" checked name="radio" value="1" class="radio" id="radio2" />
                            <label for="radio2"><img src="img/sort2.png" alt="alt">платные</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio3" />
                            <label for="radio3"><img src="img/sort3.png" alt="alt">vip</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio4" />
                            <label for="radio4"><img src="img/sort4.png" alt="alt">популярные</label>
                        </div>
                    </div>
                    <div class="pagination_page">
                        <div class="number_pagination">{{pageNumber + 1}}</div>
                        <div class="all_numbers"><span>из</span> {{pageCount}}</div>
                        <button class="btn_pagination prev_pagination" @click="prevPage" :class="{'disabled': pageNumber === 0}" :disabled="pageNumber === 0"></button>
                        <button class="btn_pagination next_pagination" @click="nextPage" :class="{'disabled': pageNumber >= pageCount -1}" :disabled="pageNumber >= pageCount -1"></button>
                    </div>
                </div>
                <div class="row">
                    <questionItem
                        v-for="(item, index) in paginatedData"
                        :key="index"
                        :category="item.category"
                        :countAnswer="item.countAnswer"
                        :date="item.date"
                        :person="item.person"
                        :price="item.price"
                        :status="item.status"
                        :title="item.title"
                    />
                </div>
                <div class="bottom_pagination">
                    <div class="pagination_page">
                        <div class="number_pagination">1</div>
                        <div class="all_numbers"><span>из</span> 15</div>
                        <button class="btn_pagination prev_pagination disabled"></button>
                        <button class="btn_pagination next_pagination"></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="section_experts">
            <div class="container">
                <div class="title_experts slideInUp wow" data-wow-iteration="1">Смотрите также экспертов этой категории</div>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="item_expert flipInY wow" data-wow-iteration="1">
                            <div class="premium_expert"><span>входит в ТОП-25</span></div>
                            <div class="image_expert">
                                <div class="rating_expert">10</div>
                                <ul class="rating_item value-5">
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                </ul>
                                <img src="img/expert1.png" alt="alt">
                            </div>
                            <div class="name_expert">Николай Тамбровский <a href="#" class="link_share"></a></div>
                            <div class="price_expert">от <span>400 ₽</span></div>
                            <a href="#" class="reviews_expert"><span>1 200</span> отзывов</a>
                            <div class="btn_chat_wrap">
                                <a href="#" class="btn_chat">написать в чат</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="item_expert flipInY wow" data-wow-iteration="1">
                            <div class="image_expert">
                                <div class="rating_expert">8.5</div>
                                <ul class="rating_item value-4">
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                </ul>
                                <img src="img/expert2.png" alt="alt">
                            </div>
                            <div class="name_expert">Алексей Афанасьев <a href="#" class="link_share"></a></div>
                            <div class="price_expert">от <span>400 ₽</span></div>
                            <a href="#" class="reviews_expert"><span>1 200</span> отзывов</a>
                            <div class="btn_chat_wrap">
                                <a href="#" class="btn_chat">написать в чат</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="item_expert flipInY wow" data-wow-iteration="1">
                            <div class="premium_expert"><span>входит в ТОП-25</span></div>
                            <div class="image_expert">
                                <div class="rating_expert">10</div>
                                <ul class="rating_item value-5">
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                </ul>
                                <img src="img/expert1.png" alt="alt">
                            </div>
                            <div class="name_expert">Николай Тамбровский <a href="#" class="link_share"></a></div>
                            <div class="price_expert">от <span>400 ₽</span></div>
                            <a href="#" class="reviews_expert"><span>1 200</span> отзывов</a>
                            <div class="btn_chat_wrap">
                                <a href="#" class="btn_chat">написать в чат</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="item_expert flipInY wow" data-wow-iteration="1">
                            <div class="image_expert">
                                <div class="rating_expert">8.5</div>
                                <ul class="rating_item value-4">
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                    <li><i class="glyphicon glyphicon-star"></i></li>
                                </ul>
                                <img src="img/expert2.png" alt="alt">
                            </div>
                            <div class="name_expert">Алексей Афанасьев <a href="#" class="link_share"></a></div>
                            <div class="price_expert">от <span>400 ₽</span></div>
                            <a href="#" class="reviews_expert"><span>1 200</span> отзывов</a>
                            <div class="btn_chat_wrap">
                                <a href="#" class="btn_chat">написать в чат</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers/>
         
    </div>
</template>

<script>
    import questionItem from '../components/Questions/QuestionItem'
    export default {
        name: "Questions",
        components: {questionItem},
        props: {},
        data() {
            return {
                resizeTextarea: false,
                questionsList: [],
                pageNumber: 0,
                size: 5,
                }
        },
        created() {
        },
        mounted() {
            // eslint-disable-next-line
             $('select').styler();
             this.questionsList = this.$store.getters.QUESTIONS
        },
        methods: {
            nextPage () {
              this.pageNumber++
            },
            prevPage () {
              this.pageNumber--
            },
        },
        computed: {
        pageCount () {
          let l = this.questionsList.length
          let s = this.size
          return Math.ceil(l / s)
        },
        paginatedData () {
          const start = this.pageNumber * this.size
          const end = start + this.size
          return this.questionsList.slice(start, end)
        }
        },
    }
</script>

<style scoped>
    
</style>