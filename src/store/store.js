import Vue from 'vue'
import Vuex from 'vuex'
import Validation from './modules/validation'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Validation
  }
})
