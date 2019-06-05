import Vue from 'vue'
import Router from 'vue-router'
import Validate from './validation/ValidationView.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Validate',
      component: Validate,
    },
    //{
      
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
