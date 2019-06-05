import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cardArray: ['', '', '', '',],
    cardHolderName: '',
    cvv: ''
}

const getters = {
    cardNumberGetter: (state) => {
        return state.cardArray
    },
    cardHolderNameGetter: (state) => {
        return state.cardHolderName;
    },
    cvvGetter: (state) => {
        return state.cvv;
    }
}
const mutations = {
    setCardNumber(context, payload) {
        context.cardArray[payload.index] = payload.value + "";
    },

    setCardHolderName(context, payload) {
        context.cardHolderName = payload;
    },
    setCvv(context, payload){
        context.cvv = payload;
    }

}

const actions = {

}

export default {
    state,
    getters,
    actions,
    mutations
}