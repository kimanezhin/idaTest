import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'url';
import { reject } from 'q';

Vue.use(Vuex)

const state = {
    cardArray: ['', '', '', '',],
    cardHolderName: '',
    cvv: '',
    isFormSend: false,
    paymentsArray: [],
    summ: 0
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
    isFormSend: (state) => {
        return state.isFormSend
    },
    getFlag: (state) => {
        return state.isFormSend;
    },
    getPayments: (state) => {
        return state.paymentsArray
    },
    getSumm: (state) => {
        return state.summ;
    }
}
const mutations = {
    setCardNumber(context, payload) {
        context.cardArray[payload.index] = payload.value + "";
    },

    setCardHolderName(context, payload) {
        context.cardHolderName = payload;
    },
    setCvv(context, payload) {
        context.cvv = payload;
    },
    setSumm(context, payload) {
        context.summ = payload;
    }

}

const actions = {
    setCardNumber(context, payload) {
        context.commit('setCardNumber', payload);
    },

    setCardHolderName(context, payload) {
        context.commit('setCardHolderName', payload);
    },
    setCvv(context, payload) {
        context.commit('setCvv', payload);
    },

    setSumm(context, payload) {
        context.commit('setSumm', payload);
    },


    sendForm(context, payload) {

        // console.log(context)
        let obj = {
            account: context.state.cardArray.reduce((A, I) => {
                return A += " " + I;
            }),
            summ: context.state.summ
        }
        return new Promise((resolve, reject) => {
            context.state.paymentsArray.push(obj)
            context.state.isFormSend = true;
            resolve();
        })
    }

}

export function getFlag() {
    return state.isFormSend;
}

export default {
    state,
    getters,
    actions,
    mutations
}