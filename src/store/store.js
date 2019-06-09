import Vue from 'vue'
import Vuex from 'vuex'
import Validation from './modules/validation'
require('es6-promise').polyfill(); // For ie
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Validation
  }
})
