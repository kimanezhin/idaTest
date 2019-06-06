import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cardArray: ['', '', '', '',],
    cardHolderName: '',
    cvv: '',
    isFormSend:false,
    
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
    },
    isFormSend: (state) =>{
        return state.isFormSend
    },
    getFlag: (state)=>{
        return state.isFormSend;
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
    },


}

const actions = {
    setCardNumber(context, payload) {
        
        context.commit('setCardNumber',payload);
    },

    setCardHolderName(context, payload) {
        context.commit('setCardHolderName',payload);
    },
    setCvv(context, payload){
        context.commit('setCvv',payload);
    },
    
}

export function getFlag(){
    return state.isFormSend;
}

export default {
    state,
    getters,
    actions,
    mutations
}