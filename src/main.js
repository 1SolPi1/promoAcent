import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "../src/components/Header"
import Helpers from "../src/components/Helpers"
import Footer from "../src/components/Footer"


Vue.config.productionTip = false



//custom component
Vue.component('headers', Header);
Vue.component('helpers', Helpers);
Vue.component('footers', Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
