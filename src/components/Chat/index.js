import Vue from 'vue'
import Launcher from './Launcher'

const defaultComponentName = 'chat';

const Plugin = {
  install (Vue, options = {}) {

    if (this.installed) {
      return
    }

    const self = this

    this.installed = true;
    this.event = new Vue();
    this.dynamicContainer = null;
    this.componentName = options.componentName || defaultComponentName;
    /**
     * Plugin API
     */

     const root = new Vue({
            data: { 
              open: false,
              name: null,
              avatar: null,
              expert_id: null,
              user_id: null,
              author: null,
              activechat: null
            },
            render: createElement => createElement(Launcher),
            methods:{
              opens(data){
                this.name = data.name;
                this.avatar = data.avatar
                this.expert_id = data.expert_id
                this.user_id = data.user_id,
                this.author = data.author,
                this.activechat = data.activechat
                
                  this.open = true
              },
              close(){
                this.open = false
                this.name = null,
                this.avatar = null,
                this.expert_id = null,
                this.user_id = null,
                this.author = null
              }
            }
    })

    Vue.prototype.$chats = () => {
      alert(this.root.$data.open)
    }

    Vue.prototype.$chatinfo = root
    /**
     * Sets custom component name (if provided)
     */
    Vue.component(this.componentName, Launcher)
  }
}

export default Plugin