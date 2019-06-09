import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cardArray: ['', '', '', '',],
    cardHolderName: '',
    cvv: '',
    isFormSend: false,
    paymentsArray: 
    // [], // Array with no data
    [{ // Array with mock data
        account: '1234 5678 9102 5234',
        summ: '123',
        date: '12.01.2018'
    },
    {
        account: '1345 0943 4662 2462',
        summ: '567',
        date: '10.11.2008'
    }],
    summ: 100,
    accountNumber: '1123341123',
    date: ''
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
    },
    getAccountNumber: (state) => {
        return state.accountNumber
    },
    getDate: (state) => {
        return state.date;
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
    },
    setAccountNumber(context, payload) {
        context.accountNumber = payload;
    },
    setDate(context, payload) {

        let formatted_date = payload.getDate() + "."
            + (payload.getMonth() + 1) + "."
            + payload.getFullYear()
        context.date = formatted_date;
    },
    clearData(context){
        console.log('a')
        context.cardArray = ['', '', '', '',]
        context.cardHolderName = ''
        context.cvv = '',
        context.isFormSend = false,
        context.summ = 100,
        context.accountNumber = '1123341123'
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

    setAccountNumber(context, payload) {
        context.commit('setAccountNumber', payload)
    },

    sendForm(context, payload) {
        let date = new Date();
        context.commit('setDate', date);
        let obj = {
            account: context.state.cardArray.reduce((A, I) => {
                return A += " " + I;
            }),
            summ: context.state.summ,
            date: context.state.date
        }
        return new Promise((resolve, reject) => {
            context.state.paymentsArray.push(obj)
            context.state.isFormSend = true;
            resolve(); // Try to set here reject();
        })
    },
    clearData(context){
        context.commit('clearData')
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