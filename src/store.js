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
  desc: 'Хочу выразить большую благодарность эксперту Марине, которая оперативно и понятно разъяснила мои юридические права. Ее компетентность буквально спасла меня в споре с руководством и сохранила мне рабочее место.',
	img: null
  },
  {
  name: 'Петр Петров',
  desc: 'Уже не впервые обращаюсь к экспертам сервиса "Спроси Онлайн" и каждый раз получаю быстрые и дельные советы. Спасибо за отличную работу!',
	img: null
  },
  {
  name: 'Максим Максимов',
  desc: 'НЕТ такого вопроса, ответить на который не смогли бы эксперты "Спроси Онлайн". Я убеждаюсь в этом на протяжении уже нескольких месяцев. Любые проблемы решаются проще с советами ваших уважаемых экспертов. Удачи вашему сайту!',
	img: null
  },
  {
  name: 'Игорь Игоревич',
  desc: 'Обращался на сайт с вопросами личного характера. Очень помог эксперт Аминас, который чутко и деликатно отнеся к моей проблеме. Ответ реально помог восстановить мое хрупкое равновесие с внешним миром после депрессии.',
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
      image: require('@/assets/img/category2.png'),
      color: '#fff68a'
    },
    {
      id:3,
      name: 'Юриспруденция',
      class: 'yrist',
      image: require('@/assets/img/category3.png'),
      color: '#f5b485'
    },
    {
      id:6,
      name: 'Медицина',
      class: 'med',
      image: require('@/assets/img/category1.png'),
      color: '#85f5b7'
    },
    {
      id:64,
      name: 'Учеба и наука',
      class: 'scince',
      image: require('@/assets/img/category4.png'),
      color: '#858ef5'
    },
    {
      id:144,
      name: 'Технологии',
      class: 'tech',
      image: require('@/assets/img/antenna.svg'),
      color: '#858ef5'
    },
    {
      id:114,
      name: 'Английский',
      class: 'english',
      image: require('@/assets/img/category6.png'),
      color: '#f58585'
    },
    {
      id:103,
      name: 'Красота',
      class: 'beaut',
      image: require('@/assets/img/quest6.png'),
      color: '#f585b9'
    },
    {
      id:119,
      name: 'Хобби',
      class: 'hobbi',
      image: require('@/assets/img/bicycle.svg'),
      color: '#85f5b7'
    },
    {
      id:165,
      name: 'Бизнес',
      class: 'busin',
      image: require('@/assets/img/umbrella.svg'),
      color: '#858ef5'
    },
    {
      id:138,
      name: 'Религия',
      class: 'religion',
      image: require('@/assets/img/church.svg'),
      color: 'black'
    },
    {
      id:81,
      name: 'Эзотерика',
      class: 'ezot',
      image: require('@/assets/img/quest5.png'),
      color: '#916cea'
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
    let childCategories = [];
    let massChild;
    let firstlist;
    let secondlist;
    let {data} = await Axios.get('category/category/find',{headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}});
    commit('SET_CATEGORIES', data);
    parentCategory = data.map(map => map.category);
    massChild = data.map(map => map.child).forEach(item => item.forEach(function(entry) {childCategories.push(entry)}));
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
