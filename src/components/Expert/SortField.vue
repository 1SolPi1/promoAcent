<template>
<form class="form_category">
              <select class="select_main select_subcategory">
                <option value="1">Выберите подкатегорию</option>
                <option value="1">подкатегория 1</option>
                <option value="1">подкатегория 2</option>
                <option value="1">подкатегория 3</option>
                <option value="1">подкатегория 4</option>
              </select>
              <select class="select_main select_gender">
                <option value="1">пол</option>
                <option value="1">Мужской</option>
                <option value="1">Женский</option>
              </select>
              <select class="select_main select_rating">
                <option value="1">рейтинг от</option>
                <option value="1">10</option>
                <option value="1">9</option>
                <option value="1">8</option>
                <option value="1">7</option>
                <option value="1">6</option>
              </select>
              <div class="sorting_questions">
                <span class="title_sorting">Сортировать:</span>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="1" class="radio" id="radio1" />
                  <label for="radio1"><img src="@/assets/img/sort5.png" alt="alt">на сайте</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" checked name="radio" value="1" class="radio" id="radio2" />
                  <label for="radio2"><img src="@/assets/img/sort6.png" alt="alt">рейтингу</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="1" class="radio" id="radio3" />
                  <label for="radio3"><img src="@/assets/img/sort7.png" alt="alt">акции</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="1" class="radio" id="radio4" />
                  <label for="radio4"><img src="@/assets/img/sort2.png" alt="alt">стоимости</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" name="radio" value="1" class="radio" id="radio5" />
                  <label for="radio5"><img src="@/assets/img/sort1.png" alt="alt">дате</label>
                </div>
                <div class="item_sorting">
                  <input type="radio" checked name="radio" value="1" class="radio" id="radio6" />
                  <label for="radio6"><img src="@/assets/img/svg/favorite-heart-button.svg" alt="alt">мои эксперты</label>
                </div>
              </div>
              <a href="#" class="btn_blue">Показать</a>
            </form>
</template>

<script>
	export default {
    name: "SortField",
    components: {
    },
    props: {},
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
        $('select').styler();
     },
		methods: {
		},
		computed: {},
	}
</script>

<style scoped>

</style>