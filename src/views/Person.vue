<template>
	<div>
   <div class="section_main_expert">
      <div class="container">
        <div class="name_expert">Главная — Клиент</div>
        <div class="item_main_expert">
          <div class="content_expert">
            <div class="image_expert expert_image_big">
              <img src="@/assets/img/svg/avatar.svg" alt="alt">
            </div>
            <div class="head_expert_item">
              <div class="name_expert_big">Игорь Летучий</div>
              <div class="experience_expert">Зарегистрирован: 19.06.2019</div>
              <div class="experience_expert">Последний раз был в сети: 19.06.19 20:21</div>
              <div class="experience_expert status_expert">Статус: Серебряный</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="section_nav_expert">
      <div class="container">
        <div class="head_nav_expert">
         <div class="experience_expert question_item">Вопросы пользователя (2)</div>
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
              <label for="radio4"><img src="@/assets/img/sort4.png" alt="alt">решены</label>
            </div>
          </div>
        </div>
        <div class="row">
          <questionItem
            v-for="(item, index) in allQuestions"
            :key="index"
            :category="item.category"
            :countAnswer="item.countAnwer"
            :date="item.date"
            :person="item.person"
            :price="item.price"
            :status="item.status"
            :title="item.title"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "Person",
    components: {
    },
    props: {},
    data() {
			return {
        allQuestions:[
          {
            category: ' Психология  ',
            countAnswer: 6,
            date: "2019-07-08 12:04:20",
            person: 'Валерий Иванов',
            price: 400,
            status: 0,
            title: 'Вопрос 1',
            id: 1,
          },
          {
            category: ' Психология  ',
            countAnswer: 6,
            date: "2019-07-08 12:04:20",
            person: 'Валерий Иванов',
            price: 400,
            status: 0,
            title: 'Вопрос 1',
            id: 2,
          },
          {
            category: ' Психология  ',
            countAnswer: 6,
            date: "2019-07-08 12:04:20",
            person: 'Валерий Иванов',
            price: 400,
            status: 0,
            title: 'Вопрос 1',
            id: 3,
          },
          {
            category: ' Психология  ',
            countAnswer: 6,
            date: "2019-07-08 12:04:20",
            person: 'Валерий Иванов',
            price: 400,
            status: 0,
            title: 'Вопрос 1',
            id: 4,
          }
        ]
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
		},
		computed: {},
	}
</script>

<style scoped>
.head_expert_item{
  padding-right: 0;
}

.status_expert{
  margin-left: 0;
}

.question_item{
font-family: OpenSans-Semibold;
font-size: 18px;
color: #2F2F32;
letter-spacing: 0;
line-height: 45px;
}
</style>