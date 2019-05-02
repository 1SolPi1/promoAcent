import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  questions:[
  {
  title: 'Вопрос 1',
  price: '400',
  category: ' Психология ',
  status: true,
  date: '10 апреля 2019',
  person: 'Анонимно',
  countAnswer: 5
  },
  {
  title: 'Вопрос 2',
  price: '623',
  category: ' Медицина ',
  status: false,
  date: '11 апреля 2019',
  person: 'Валерчик',
  countAnswer: 12
  },
  {
  title: 'Вопрос 3',
  price: '900',
  category: ' Юриспурденция ',
  status: true,
  date: '12 апреля 2019',
  person: 'Антоха',
  countAnswer: 1
  },
  {
  title: 'Вопрос 4',
  price: '330',
  category: ' Учеба и наука ',
  status: true,
  date: '15 апреля 2019',
  person: 'Анонимно',
  countAnswer: 5
  },
  {
  title: 'Вопрос 5',
  price: '12 300',
  category: ' Эзотерика ',
  status: false,
  date: '2 апреля 2019',
  person: 'Анонимно',
  countAnswer: 90
  },
  {
  title: 'Вопрос 6',
  price: '5 400',
  category: ' Красота ',
  status: true,
  date: '8 апреля 2019',
  person: 'Алех',
  countAnswer: 12
  },
  {
  title: 'Вопрос 7',
  price: '100',
  category: ' Английский ',
  status: true,
  date: '15 апреля 2019',
  person: 'John Travolta',
  countAnswer: 43
  },
  {
  title: 'Вопрос 8',
  price: '930',
  category: ' Хобби ',
  status: false,
  date: '10 апреля 2019',
  person: 'Анонимно',
  countAnswer: 5
  },
  {
  title: 'Вопрос 9',
  price: '450',
  category: ' Бизнес ',
  status: false,
  date: '21 апреля 2019',
  person: 'Анонимно',
  countAnswer: 15
  },
  {
  title: 'Вопрос 10',
  price: '400',
  category: ' Технологии ',
  status: true,
  date: '13 апреля 2019',
  person: 'Анонимно',
  countAnswer: 5
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
  {
	tops: false,
	rating: 3.58,
	name:'Маршал',
	price: 9000,
	reviews: 300
  },
  {
	tops: false,
	rating: 2.11,
	name:'Тип',
	price: 300,
	reviews: 10
  },
  {
	tops: true,
	rating: 10,
	name:'Мой дед',
	price: 2200,
	reviews: 1222
  },
  ]
  },
  getters:{
		COMMENTS: state=> state.comments,
		QUESTIONS: state=> state.questions,
		PROFI: state => state.profi
  },
  mutations: {

  },
  actions: {

  }
})
