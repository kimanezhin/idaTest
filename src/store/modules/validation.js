import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cardArray: ['', '', '', '',],
    cardHolderName: '',
    cvv: '',
    paymentFlag: false,
    isFormSend: false,
    paymentsArray:
        // [], // Array with no data
        [{ // Array with mock data
            account: '1234 5678 9102 5234',
            summ: '123',
            date: '10.01.2005',
            id: 1 // Unique id of a transaction
        }, {
            account: '1234 5678 9102 5234',
            summ: '589',
            date: '10.11.2008',
            id: 2
        }, {
            account: '1234 5678 9102 5234',
            summ: '261',
            date: '21.12.2009',
            id: 3
        },
        {
            account: '1234 5678 9102 5234',
            summ: '2135',
            date: '21.12.2009',
            id: 4
        },
        {
            account: '1234 5678 9102 5234',
            summ: '90945',
            date: '10.10.2001',
            id: 5
        },
        {
            account: '1234 5678 9102 5234',
            summ: '948',
            date: '25.08.2010',
            id: 6
        },
        {
            account: '1234 5678 9102 5234',
            summ: '5630',
            date: '11.12.2019',
            id: 7
        },
        ],
    summ: '',
    accountNumber: '',
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
    setPaymentFlag(context) {
        context.paymentFlag = true;
    },
    removePaymentFlag(context) {
        context.paymentFlag = false;
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
        let formatted_date = transform(payload.getDate()) + "."
            + transform(payload.getMonth() + 1) + "."
            + payload.getFullYear()
        context.date = formatted_date;
    },
    clearData(context) {
        context.cardArray = ['', '', '', '',]
        context.cardHolderName = ''
        context.cvv = ''
        context.isFormSend = false
        context.summ = 100
        context.accountNumber = '1123341123'
        context.paymentFlag = false;
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
            // account: context.state.cardArray.reduce((A, I) => {
            //     return A += " " + I;
            // }),
            account: context.state.accountNumber,
            summ: context.state.summ,
            date: context.state.date,
            id: context.state.paymentsArray.length + 1
        }
        return new Promise((resolve, reject) => {
            context.state.paymentsArray.push(obj)
            context.state.isFormSend = true;
            resolve(); // Try to set here reject();
        })
    },
    setPaymentFlag(context) {
        context.commit('setPaymentFlag')
    },
    removePaymentFlag(context) {
        context.commit('removePaymentFlag')
    },
    clearData(context) {
        context.commit('clearData')
    }

}


function transform(str) {
    str = str + "";
    return str.length == 1 ? "0" + str : str;
}
export function getFlag() {
    return state.isFormSend;
}
export function getPaymentFlag() {
    return state.paymentFlag;
}

export default {
    state,
    getters,
    actions,
    mutations
}