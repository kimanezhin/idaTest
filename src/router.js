import Vue from 'vue'
import Router from 'vue-router'
import Validate from './validation/ValidationView.vue'
// import Success from './payment/SuccessPayment.vue'
import { getFlag, getPaymentFlag } from './store/modules/validation'
Vue.use(Router)

const ifNotPayment = (to, from, next) => {
  if (getFlag()) {
    next()
    return;
  }
  else
    next('/payment')
}


const ifNoInput = (to, from, next) => {
  if (getPaymentFlag()) {
    next()
    return
  }
  else
    next('/payment')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Validate',
      beforeEnter:ifNoInput,
        component: () => import(/* webpackChunkName: "about" */ './validation/ValidationView.vue')
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
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "about" */ './payment/FillingData.vue')
  }
  ]
})
