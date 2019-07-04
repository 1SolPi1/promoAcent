import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const Questions = () => import('./views/Questions.vue')
const Question = () => import('./views/Question.vue')
const Experts = () => import('./views/Experts.vue')
const Expert = () => import('./views/Expert.vue')
const Profile = () => import('./views/Profile.vue')
const AddQuesttion = () => import('./components/AddQuestion.vue')

const MyConsultation = () => import('./components/Profile/MyConsultation.vue')
const MainSettings = () => import('./components/Profile/MainSettings.vue')

const User = () => import('./views/User.vue')
const UserProfile = () => import('./components/User/UserProfile.vue')
const UserConsultation = () => import('./components/User/UserConsultation.vue')
const UserPays = () => import('./components/User/UserPays.vue')
const UserFriends = () => import('./components/User/UserFriends.vue')
const UserSettings = () => import('./components/User/UserSettings.vue')
const UserSupport = () => import('./components/User/UserSupport.vue')

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
      path: '/questions',
      name: 'questions',
      component: Questions
    },
    {
      path: '/questions/:id',
      name: 'fullquestion',
      component: Question,
    },
    {
      path: '/addquestions',
      name: 'addquestions',
      component: AddQuesttion
    },
    {
      path: '/experts',
      name: 'esperts',
      component: Experts,
    },
    {
      path: '/experts/:id',
      name: 'expert',
      component: Expert,
    },
    //Expert Section
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        expert: true
      }
    },
    {
      path: '/myconsultation',
      name: 'myconsultation',
      component: MyConsultation,
      meta: {
        expert: true
      }
    },
    {
      path: '/mainsettings',
      name: 'mainsettings',
      component: MainSettings,
      meta: {
        expert: true
      }
    },
    //User Section
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/userconsultation',
      name: 'userconsultation',
      component: UserConsultation,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/pay',
      name: 'userpays',
      component: UserPays,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/userfriends',
      name: 'userfriends',
      component: UserFriends,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/usersettings',
      name: 'usersettings',
      component: UserSettings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/usersupport',
      name: 'usersupport',
      component: UserSupport,
      meta: {
        requiresAuth: true
      }
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

