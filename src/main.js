import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import Header from "../src/components/Header"
import Helpers from "../src/components/Helpers"
import Footer from "../src/components/Footer"
import Categories from "../src/components/Categories"
import ExpertProfile from "../src/components/Profile/ExpertProfile"
import UserProfileMenu from "../src/components/User/UserProfileMenu"
import UserContentHeader from "../src/components/User/UserContentHeader"
import journalItem from '../src/components/Home/JournalItem'
import Chats from '../src/components/Chats'
import UserChatItem from '../src/components/User/UserConsultation/UserChatItem'
import VueSocketIO from 'vue-socket.io'
import questionItem from '../src/components/Questions/QuestionItem'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

var toastrConfigs = {
    position: 'top right',
    // showDuration: 5000,
    // successColor:
    // infoColor 
    // warningColor 
    // errorColor
}
Vue.use(CxltToastr, toastrConfigs)

Vue.use(Chats)


Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://194.87.190.158:3012/chatroom',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))


// eslint-disable-next-line
import JQuery from 'jquery'

require('./assets/css/jquery.timeentry.css');
require('./assets/css/jquery.countdown.css');
require('./assets/css/bootstrap-grid-3.3.1.min.css');
require('./assets/css/fonts.css');
require('./assets/css/main.css');
require('./assets/css/animate.min.css');
require('./assets/css/media.css');

Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({baseURL: 'http://api.sprosi-online.ru/'});

// const items = [
// 	{
// 		name: ' раз '
// 	},
// 	{
// 		name: ' два '
// 	},
// 	{
// 	 	name: ' три '
// 	}
// ]

//custom component
Vue.component('headers', Header);
Vue.component('helpers', Helpers);
Vue.component('footers', Footer);
Vue.component('expertProfile', ExpertProfile);
Vue.component('userProfileMenu', UserProfileMenu);
Vue.component('userContentHeader', UserContentHeader);
Vue.component('categories', Categories);
Vue.component('userchatitem', UserChatItem);
Vue.component('questionItem', questionItem);
Vue.component('journalItem', journalItem);
// Vue.component('testcomponent',{
//    render: function (createElement) {
//     items.map(function (item) {
//       return createElement('option', item.name)
//     })
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
