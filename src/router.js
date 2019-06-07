import Vue from 'vue'
import Router from 'vue-router'
import Validate from './validation/ValidationView.vue'
// import Success from './payment/SuccessPayment.vue'
import { getFlag } from './store/modules/validation'
Vue.use(Router)

const ifNotPayment = (to, from, next) => {

  if (getFlag()) {
    next()
    return;
  }
  else
    next('/')

}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Validate',
      component: Validate,
    },
    {
      path: '/success',
      name: 'SuccessPayment',
      // component:  Success,
      beforeEnter: ifNotPayment,
      component: () => import(/* webpackChunkName: "about" */ './payment/SuccessPayment.vue')
    },
    {
      path: '/history',
      name: 'history',

      component: () => import(/* webpackChunkName: "about" */ './history/History.vue')
    }
  ]
})
