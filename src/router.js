import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
Vue.use(Meta)

const Home = () => import('./views/Home.vue')
const Questions = () => import('./views/Questions.vue')
const Question = () => import('./views/Question.vue')
const Experts = () => import('./views/Experts.vue')
const Expert = () => import('./views/Expert.vue')
const Profile = () => import('./views/Profile.vue')
const AddQuesttion = () => import('./components/AddQuestion.vue')
const Journal = () => import('./views/Journal.vue')
const JournalArticle = () => import('./views/JournalArticle.vue')
const About = () => import('./views/About.vue')
const Help = () => import('./views/Help.vue')
const MapSite = () => import('./views/MapSite.vue')
const Policy = () => import('./views/Policy.vue')
const AboutPartners = () => import('./views/AboutPartners.vue')
const ProgramShareFriends = () => import('./views/ProgramShareFriend.vue')
const TariffQuestions = () => import('./views/TariffQuestions.vue')
import Person from '@/views/Person'

const MyConsultation = () => import('./components/Profile/MyConsultation.vue')
const MainSettings = () => import('./components/Profile/MainSettings.vue')

const User = () => import('./views/User.vue')
const UserProfile = () => import('./components/User/UserProfile.vue')
const UserConsultation = () => import('./components/User/UserConsultation.vue')
const UserPays = () => import('./components/User/UserPays.vue')
const UserFriends = () => import('./components/User/UserFriends.vue')
const UserSettings = () => import('./components/User/UserSettings.vue')
const UserSupport = () => import('./components/User/UserSupport.vue')
const NotFound = () => import('./views/404.vue')

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Home
    },
    {
      path: '/zadat-vopros-:category/:subcategory',
      name: 'questionssub',
      component: Questions
    },
      {
          path: '/zadat-vopros-:category',
          name: 'questions',
          component: Questions
      },
    {
      path: '/question/:category/:subcategory/:question',
      name: 'fullquestionsub',
      component: Question,
    },
    {
      path: '/question/:category/:question',
      name: 'fullquestion',
      component: Question,
    },
    {
      path: '/newquestion/addquestions',
      name: 'addquestions',
      component: AddQuesttion
    },
    {
      path: '/:experts',
      name: 'experts',
      component: Experts,
    },
    {
      path: '/info/journal',
      name: 'journal',
      component: Journal,
    },
    {
      path: '/info/journal/article/:id',
      name: 'journalarticle',
      component: JournalArticle,
    },
    {
      path: '/info/about',
      name: 'about',
      component: About,
    },
    {
      path: '/info/help',
      name: 'help',
      component: Help,
    },
    {
      path: '/info/mapsite',
      name: 'mapsite',
      component: MapSite,
    },
    {
      path: '/info/policy',
      name: 'policy',
      component: Policy,
    },
    {
      path: '/info/aboutpartners',
      name: 'aboutpartners',
      component: AboutPartners,
    },
    {
      path: '/about/expert',
      name: 'expert',
      component: Expert,
    },
    {
      path: '/info/person',
      name: 'person',
      component: Person
    },
    {
      path: '/info/programsharefriends',
      name: 'programsharefriends',
      component: ProgramShareFriends
    },
    {
      path: '/info/tariffquestions',
      name: 'tariffquestions',
      component: TariffQuestions
    },
    //Expert Section
    {
      path: '/user/profile',
      name: 'profile',
      component: Profile,
      meta: {
        expert: true
      }
    },
    {
      path: '/user/myconsultation',
      name: 'myconsultation',
      component: MyConsultation,
      meta: {
        expert: true
      }
    },
    {
      path: '/user/mainsettings',
      name: 'mainsettings',
      component: MainSettings,
      meta: {
        expert: true
      }
    },
    //User Section
    {
      path: '/user/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/userprofile',
      name: 'userprofile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/userconsultation',
      name: 'userconsultation',
      component: UserConsultation,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/userpays',
      name: 'userpays',
      component: UserPays,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/userfriends',
      name: 'userfriends',
      component: UserFriends,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/usersettings',
      name: 'usersettings',
      component: UserSettings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/usersupport',
      name: 'usersupport',
      component: UserSupport,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
}
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/',
        params: {nextUrl: to.fullPath}
      })
    }else{
      next()
    }
    } else if(to.matched.some(record => record.meta.expert)) {
      if(localStorage.getItem('token') == null){
        next({ path: '/'})
      }
      else{
        next()
      }
    }else {
    next();
  }
});

export default router

