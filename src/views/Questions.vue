<template>
    <div>
            <div class="section_questions_top">
            <div class="container">
                <breadcrumbs
                  :wayPages="[
                    {
                      name: 'Главная',
                      route: '/',
                    }
                  ]"
                  currentPage="Ваши вопросы"
                  />
                <categories 
                  :category="categories"
                  :childcategory="selectChildCategory"
                  v-if="categories"
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
                            <router-link to="addquestions" v-if="logined"><button class="btn_blue">Задать вопрос</button></router-link>
                            <button class="btn_blue" @click.prevent="showLogined()" v-else>Задать вопрос</button>
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
                            <input type="radio" checked name="radio" value="1" class="radio" id="radio1" />
                            <label for="radio1"><img src="@/assets/img/sort1.png" alt="alt">последние</label>
                        </div>
                        <div class="item_sorting">
                            <input type="radio" name="radio" value="1" class="radio" id="radio2" />
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
                        :category="item.parent_category"
                        :subcategory="item.sub_category"
                        :countAnswer="item.answer_count"
                        :date="item.question.create_at"
                        :person="item.question.anonim? ' Анонимно ': item.user_name"
                        :price="item.question.price"
                        :status="item.question.status"
                        :title="item.question.title"
                        :id="item.question.id"
                        :expert="item.expert"
                        :personId="item.question.client_id"
                        :anonim="item.question.anonim"
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
                <div class="row" v-if="experts.length > 0">
                    <profItem
                      v-for="(item, index) in experts"
                      :key="item.id"
                      :avatar="item.avatar"
                      :id="item.id"
                      :name="item.name"
                      :price="item.price_from"
                      :rating="item.rating"
                      :reviews="item.comment_count"
                      :tops="false"
                    />
                </div>
            </div>
        </div>
    <registration 
      v-if="register" 
      @close="register = !register"
      @gotologin="showLogin()"
    /> 
    <registration 
      v-if="registerExpert"
      :expert="true" 
      @close="registerExpert = !registerExpert"
      @gotologin="showLogin()"
    /> 
    <login 
      v-if="login" 
      @close="login = !login"
      @gotoregister="showRegister()"
    /> 
    </div>
</template>

<script>
    import profItem from '../components/Questions/ProfItem'
    import registration from '@/components/Registration'
    import login from '@/components/Login'
    export default {
        name: "Questions",
        components: {
          profItem,
          registration,
          login
        },
        props: {},
        beforeRouteUpdate (to, from, next) {
          this.childCategory = null;
          this.selectCategory = null;
          this.selectChildCategory = null;
          this.category = null;
          this.pageCount = 1;
          this.pageNumber = 1;
          this.allQuestions = []
          setTimeout(()=> {  
              this.getSelectCategory(this.$store.getters.SELECTCATEGORY)
              this.questionsList = this.$store.getters.QUESTIONS
              this.getAllQuestions(this.pageCount, this.selectCategory.id);
            }, 500)
          next()
        },
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
              selectSubCategory: null,
              login: false,
              register: false,
              registerExpert: false,
              experts: []
            }
        },
        created() {
        },
        mounted() {
          new WOW().init();
          const vm = this;
            setTimeout(function() {  
              vm.getSelectCategory(vm.selectCat)
              vm.questionsList = vm.$store.getters.QUESTIONS
              vm.getAllQuestions(vm.pageCount, vm.selectCategory.id);
            }, 900)
          vm.getExperts()
        },
        methods: {
          changeCategory(item){
            this.$store.dispatch('changeSelectCategory', item);
            this.selectCategory = this.categories.find(map => map.id == item)
            setTimeout(()=>{  
                this.getChildCategory(this.selectCategory);
                this.pageNumber = 1;
                this.getAllQuestions(1, this.selectCategory.id);
                this.getExperts();
            }, 300)
          },
          changeSubCategory(item){
            this.pageNumber = 1;
            if (item == 0) {
              this.selectSubCategory = null
            }else{
              this.selectSubCategory = this.selectChildCategory.find(map => map.id == item)
            }
            this.getAllQuestions(1, this.selectCategory.id);
          },
      getSelectCategory(id){
        this.selectCategory = this.categories.find(item => item.id === id)
        this.getChildCategory(this.selectCategory)
      },
      getChildCategory(arr){
        this.selectChildCategory = this.childCategories.filter(map => map.parent_id === arr.id)
      },
            nextPage () {
              this.pageNumber++
              this.getAllQuestions(this.pageNumber, this.selectCategory.id);
            },
            prevPage () {
              this.pageNumber--
              this.getAllQuestions(this.pageNumber, this.selectCategory.id);
            },
            getAllQuestions(page, category){
                let params = new URLSearchParams();
                params.append('category_id', category);
                if (this.selectSubCategory !== null) {
                  params.append('sub_category_id', this.selectSubCategory.id)
                }
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
            },
            showLogined(){
              this.$toast.error({
                title:'Ошибка',
                message: 'Войдите или зарегистрируйтесь'
              })
              this.showLogin()
            },
            showLogin(){
              this.login = true;
              this.register = false;
              this.registerExpert = false;
            },
             showRegister(){
                this.login = false;
                this.register = true
            },
      getExperts(){
        let params = new URLSearchParams();
        params.append('category_id', this.$store.getters.SELECTCATEGORY);

        this.$http({
          method: 'POST',
          url: 'expert/profile/find',
          data:params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          let expert = [];
          for (let key in response.data){
             expert.push(response.data[key])
          }

          this.experts = expert.slice(0, -1)
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
          logined(){
            return localStorage.getItem('token')
          },
          categories(){
            return this.$store.getters.CATEGORI
          },
          childCategories(){
            return this.$store.getters.CHILDCATEGORI
          },
          selectCat(){
            return this.$store.getters.SELECTCATEGORY
          }
        },
    }
</script>

<style scoped>
    
</style>