<template>
    <div>
            <div class="section_questions_top">
            <div class="container">
                <div class="your_question">Ваши вопросы — <span>Психология</span></div>
                <categories 
                  :category="category"
                  :childcategory="selectChildCategory"
                  v-if="category"
                  @selectcategory="changeCategory"
                  @selectsubcategory="changeSubCategory"
                  />
            </div>
        </div>

        <div class="section_ask">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="title_middle">Задайте <span>бесплатно</span> вопрос и получите ответ</div>
                        <form class="form_ask">
                            <div class="wrap_input_ask">
                                <textarea required placeholder="Введите ваш вопрос" :class="{'active': resizeTextarea}" v-model="newQuestion"></textarea>
                                <div class="more_ask_wrap">
                                    <div class="btn_more_ask" @click="resizeTextarea = !resizeTextarea"><span>расширить поле</span></div>
                                </div>
                            </div>
                            <router-link to="addquestions"><button class="btn_blue">Задать вопрос</button></router-link>
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
                    <img src="@/assets/img/image_ask.png" alt="alt">
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
                            <label for="radio1"><img src="@/assets/img/sort1.png" alt="alt">последние</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" checked name="radio" value="1" class="radio" id="radio2" />
                            <label for="radio2"><img src="@/assets/img/sort2.png" alt="alt">платные</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio3" />
                            <label for="radio3"><img src="@/assets/img/sort3.png" alt="alt">vip</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio4" />
                            <label for="radio4"><img src="@/assets/img/sort4.png" alt="alt">популярные</label>
                        </div>
                    </div>
                    <div class="pagination_page">
                        <div class="number_pagination">{{pageNumber}}</div>
                        <div class="all_numbers"><span>из</span> {{pageCount}}</div>
                        <button class="btn_pagination prev_pagination" @click="prevPage" :class="{'disabled': pageNumber === 1}" :disabled="pageNumber === 1"></button>
                        <button class="btn_pagination next_pagination" @click="nextPage" :class="{'disabled': pageNumber >= pageCount}" :disabled="pageNumber >= pageCount"></button>
                    </div>
                </div>
                <div class="row">
                    <questionItem
                        v-for="(item, index) in allQuestions"
                        :key="index"
                        :category="item.category"
                        :countAnswer="item.answer_count"
                        :date="item.question.create_at"
                        :person="item.question.anonim? ' Анонимно ': item.user_name"
                        :price="item.question.price"
                        :status="item.question.status"
                        :title="item.question.title"
                        :id="item.question.id"
                    />
                </div>
                <div class="bottom_pagination">
                    <div class="pagination_page">
                        <div class="number_pagination">{{pageNumber}}</div>
                        <div class="all_numbers"><span>из</span> {{pageCount}}</div>
                        <button class="btn_pagination prev_pagination" @click="prevPage" :class="{'disabled': pageNumber === 1}" :disabled="pageNumber === 1"></button>
                        <button class="btn_pagination next_pagination" @click="nextPage" :class="{'disabled': pageNumber >= pageCount}" :disabled="pageNumber >= pageCount"></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="section_experts">
            <div class="container">
                <div class="title_experts slideInUp wow" data-wow-iteration="1">Смотрите также экспертов этой категории</div>
                <div class="row">
                    <profItem
                      v-for="(item, index) in profi"
                      :key="index"
                      :name="item.name"
                      :price="item.price"
                      :rating="item.rating"
                      :reviews="item.reviews"
                      :tops="item.tops"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import questionItem from '../components/Questions/QuestionItem'
    import profItem from '../components/Questions/ProfItem'
    export default {
        name: "Questions",
        components: {questionItem, profItem},
        props: {},
        data() {
            return {
              resizeTextarea: false,
              questionsList: [],
              pageNumber: 1,
              size: 5,
              allQuestions: null,
              pageCount: 1,
              status: false,
              category: null,
              childCategory: null,
              selectCategory: null,
              selectChildCategory: null,
            }
        },
        created() {
        },
        mounted() {
              this.getParentCategory()
             this.questionsList = this.$store.getters.QUESTIONS
             this.getAllQuestions(this.pageCount, this.selectCategory.id);
        },
        methods: {
          changeCategory(item){
            this.selectCategory = this.category.find(map => map.id == item)
            setTimeout(()=>{  
                this.getChildCategory(this.selectCategory);
                this.pageNumber = 1;
                this.getAllQuestions(1, this.selectCategory.id);
            }, 300)
          },
          changeSubCategory(item){
            alert('subcategory' + item)
          },
          getParentCategory(){
        this.category = this.$store.getters.CATEGORIES.map(map => map.category);
        this.childCategory = this.$store.getters.CATEGORIES.map(map => map.child);
        this.selectCategory = this.category[0]
        this.getChildCategory(this.selectCategory)
      },
      getChildCategory(arr){
        this.selectChildCategory = this.childCategory.filter(map => map.parent_id === arr.id)
      },
            nextPage () {
              this.pageNumber++
              this.getAllQuestions(this.pageNumber);
            },
            prevPage () {
              this.pageNumber--
              this.getAllQuestions(this.pageNumber);
            },
            getAllQuestions(page, category){
                let params = new URLSearchParams();
                params.append('category_id', category);
                params.append('page', page);


              this.$http({
                method: 'POST',
                url: 'question/question/find',
                data: params,
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                  Authorization: "Bearer " + localStorage.getItem('token')
                }
              })
              .then(response=>{
                this.pageCount = response.data.page_count
                this.allQuestions = response.data[0]
              })
            }
        },
        computed: {
            newQuestion: {
    get: function () {
      return this.$store.getters.ADDQUESTION
    },
    set: function (newValue) {
     this.$store.dispatch('setAddQuestion', newValue);
    }
  },
          profi(){
            return this.$store.getters.PROFI
          },
        },
    }
</script>

<style scoped>
    
</style>