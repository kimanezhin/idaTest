import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import LeftMenu from './leftMenu/LeftMenu.vue'
Vue.config.productionTip = false
Vue.component('LeftMenu',LeftMenu);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
