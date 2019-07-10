import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.sprosi-online.ru/';
//modules
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user: user,
  },
  state: {
  categories:null,
  categori:null,
  childCategori: null,
  firstListCategoryFooter: null,
  secondListCategoryFooter: null,
  comments:[
  {
  name: 'Валера Иванов',
  desc: 'В целом, конечно, начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соотвующих условий активизации. Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь выявляет срочную потребность форм воздействия.',
	img: null
  },
  {
  name: 'Петр Петров',
  desc: 'В целом, конечно, начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соотвующих условий активизации. Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь выявляет срочную потребность форм воздействия.',
	img: null
  },
  {
  name: 'Максим Максимов',
  desc: 'В целом, конечно, начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соотвующих условий активизации. Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь выявляет срочную потребность форм воздействия.',
	img: null
  },
  {
  name: 'Игорь Игоревич',
  desc: 'В целом, конечно, начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соотвующих условий активизации. Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь выявляет срочную потребность форм воздействия.',
	img: null
  },
  ],
  profi:[
  {
	tops: false,
	rating: 5.58,
	name:'Валерчик Валерон',
	price: 900,
	reviews: 122
  },
  {
	tops: true,
	rating: 10,
	name:'Петр Семенович',
	price: 12900,
	reviews: 10220
  },
  {
	tops: false,
	rating: 1.58,
	name:'Антон',
	price: 100,
	reviews: 2
  },
  {
	tops: true,
	rating: 8.58,
	name:'Макар Андрееич',
	price: 100,
	reviews: 12
  },
  ],
  categoryItem:[
    {
      id:1,
      name: 'Психология',
      class: 'psihol',
      image: 'img/category2.png'
    },
    {
      id:3,
      name: 'Юриспруденция',
      class: 'yrist',
      image: 'img/category3.png'
    },
    {
      id:6,
      name: 'Медицина',
      class: 'med',
      image: 'img/category1.png'
    },
    {
      id:64,
      name: 'Учеба и наука',
      class: 'scince',
      image: 'img/category4.png'
    },
    {
      id:144,
      name: 'Технологии',
      class: 'tech',
      image: 'img/antenna.svg'
    },
    {
      id:114,
      name: 'Английский',
      class: 'english',
      image: 'img/category6.png'
    },
    {
      id:103,
      name: 'Красота',
      class: 'beaut',
      image: 'img/quest6.png'
    },
    {
      id:119,
      name: 'Хобби',
      class: 'hobbi',
      image: 'img/bicycle.svg'
    },
    {
      id:165,
      name: 'Бизнес',
      class: 'busin',
      image: 'img/umbrella.svg'
    },
    {
      id:138,
      name: 'Религия',
      class: 'religion',
      image: 'img/church.svg'
    },
    {
      id:81,
      name: 'Эзотерика',
      class: 'ezot',
      image: 'img/quest5.png'
    },
  ],
  addquestion: null,
  domen:'http://api.sprosi-online.ru/file/',
  selectCategory: 1
  },
  getters:{
		COMMENTS: state=> state.comments,
		QUESTIONS: state=> state.questions,
		PROFI: state => state.profi,
    CATEGORYITEM: state=>state.categoryItem,
    CATEGORIES: state=>state.categories,
    CATEGORI: state=>state.categori,
    CHILDCATEGORI: state=>state.childCategori,
    ADDQUESTION: state => state.addquestion,
    DOMEN: state => state.domen,
    SELECTCATEGORY: state => state.selectCategory,
    FIRSTLISTCATEGORYFOOTER: state => state.firstListCategoryFooter,
    SECONDLISTCATEGORYFOOTER: state => state.secondListCategoryFooter
  },
  mutations: {
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
    SET_CATEGORI: (state, payload) => {
      state.categori = payload;
    },
    SET_CHILD_CATEGORI: (state, payload) => {
      state.childCategori = payload;
    },
    SET_ADDQUESTION: (state, playload) =>{
      state.addquestion = playload
    },
    CLEAR_ADDQUESTION: (state) =>{
      state.addquestion = null
    },
    CHANGE_SELECT_CATEGORY: (state, playload) => {
      state.selectCategory = playload
    },
    SET_FIRST_LIST_CATEGORY_FOOTER: (state, playload)=>{
      state.firstListCategoryFooter = playload
    },
    SET_SECOND_LIST_CATEGORY_FOOTER: (state, playload) =>{
      state.secondListCategoryFooter = playload
    }
  },
  actions: {
    getCategories: async ({commit}) => {
    let parentCategory;
    let childCategories;
    let firstlist;
    let secondlist;
    let {data} = await Axios.get('category/category/find',{headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}});
    commit('SET_CATEGORIES', data);
    parentCategory = data.map(map => map.category);
    childCategories = data.map(map => map.child);
    firstlist = parentCategory.slice(0,6);
    secondlist = parentCategory.slice(6,15);
    commit('SET_CATEGORI', parentCategory);
    commit('SET_CHILD_CATEGORI', childCategories);
    commit('SET_FIRST_LIST_CATEGORY_FOOTER', firstlist);
    commit('SET_SECOND_LIST_CATEGORY_FOOTER', secondlist);
  },
  setAddQuestion:({commit}, question) => {
    commit('SET_ADDQUESTION', question);
  },
  clearAddQuestion:({commit}) =>{
    commit('CLEAR_ADDQUESTION')
  },
  changeSelectCategory:({commit}, categoryId) =>{
    commit('CHANGE_SELECT_CATEGORY', categoryId);
  }

  }
})
