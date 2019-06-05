<template>
  <div class="app">
    <div class="container">
      <div class="menu">
        <LeftMenu/>
      </div>
      <div class="view">
        <div class="main">
          <div class="info">
            <div class="title payment_title">Информация по оплате:</div>
            <div class="payment_data_wrapper">
              <div class="payment_data">
                <div class="payment_title">Номер счета:</div>
                <div class="value">{{accountNumber}}</div>
              </div>

              <div class="payment_data">
                <div class="payment_title">Сумма платежа:</div>
                <div class="value">{{paymentAmount}} руб.</div>
              </div>
            </div>
          </div>

          <div class="card_data">
            <div class="data">Данные банковской карты</div>
            <div class="card">
              <div class="card_inner">
                <div class="payment_title">Номер карты</div>
                <div class="number_input">
                  <input @input="validate" name="0" type="text" class="number_input_box">
                  <input @input="validate" name="1" type="text" class="number_input_box">
                  <input @input="validate" name="2" type="text" class="number_input_box">
                  <input @input="validate" name="3" type="text" class="number_input_box">
                </div>
                <div class="payment_title">Срок действия</div>
                <Date/>
                <div class="card_holder_name">
                  <input type="text" :model="name" placeholder="Держатель карты">
                </div>
              </div>
            </div>
            <div class="right_card">
              <div class="magnet_line"></div>
              <div class="cvv">
                <div class="payment_title">Код CVV2 / CVC2</div>
                <div class="cvv_input">
                  <input type="password">
                  <img src="../../img/quest.png" alt>
                </div>
              </div>
            </div>
          </div>
          <button class="send_button">Оплатить</button>
        </div>

        <div class="footer">
          <div class="text">
            <p>Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.</p>
            <p>Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.</p>
            <p>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.</p>
            <p>Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "../leftMenu/LeftMenu";
import Date from "./DateInput";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    LeftMenu,
    Date
  },
  data: () => ({
    accountNumber: "87123658716587",
    paymentAmount: "100",
    name: "1"
  }),
  computed: {
    ...mapGetters({
      cardGetter: "cardNumberGetter",
      nameGetter: "cardHolderNameGetter",
      cvvGetter: ""
    }),

    /**
     * Returns an array with 4 strings
     * Each string for each input field.
     * @type {Array}
     */
    cardNumber: {
      get() {
        return this.cardGetter;
      },
      set(newValue) {
        this.setNumber(newValue);
      }
    },


    /**
     * Returns name of a card holder
     * @type {String}
     */
    holderName: {
      get() {
        return this.nameGetter;
      },
      set(newValue) {
        this.setName(newValue);
      }
    },


    /**
     * Filed for cvv code
     * @type {Integer}
     */
    cvv: {
      get() {
        return cvvGetter;
      },
      set(newValue) {
        this.setCvv(newValue);
      }
    }
  },
  methods: {
    ...mapMutations({
      setNumber: "setCardNumber",
      setName: "setCardHolderName",
      setCvv: "setCvv"
    }),

    /**
     * Basic validation method.
     * Combines validation methods for all fields.
     * @returns {Boolean} returns true if all fields are valid
     */
    isValid(context) {
      return 1;
    },


    /**
     * Validates name of a card holder
     * @returns {Boolean} returns true, if name is valid
     */
    isNameValid() {
      const re1 = new RegExp();
    },


    /**
     * Validates card code fields
     * @returns {Boolean} returns true if all card code fields are valid
     */
    isCardValid() {
      !!this.cardNumber.reduce((A, value) => {
        return (A *=
          value.length == 4 && parseInt(value) && parseInt(value) >= 0);
      });
    },


    /**
     * Validates all card fields 
     * @param {event}
     * @returns {Boolean} return true if all fields are valid
     */
    validate(event) {
      this.cardNumber = {
        index: event.target.name,
        value: event.target.value
      };
      console.log(this.isValid());
    }


  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap");

body {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
}
.send_button {
  align-self: flex-start;
  margin-top: 35px;
  border-radius: 25px;
  width: 130px;
  height: 40px;
  background-color: #0053b0;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  margin-left: 26px;
}
.app {
  width: 100%;
  margin-top: 30px;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: auto;
  flex-direction: row;
}
.view {
  width: 630px;
  margin-top: 0;
  height: 800px;
}
.menu {
  width: 320px;
  height: 280px;
}
.main {
  width: 100%;
  height: 70%;
  background-color: rgb(247, 248, 248);
  display: flex;
  flex-direction: column;
}
.main > *:not(:last-child) {
  margin-left: 20px;
  padding-top: 35px;
}
.footer {
  /* height: 30%; */
  height: auto;
  background: rgb(55, 60, 67);
}
.payment_data {
  display: flex;
  flex-direction: row;
}
.number_input {
  display: flex;
  flex-direction: row;
}
.number_input > input {
  width: 55px;
  height: 30px;
  border: 2px solid #e4e9ee;
  margin-top: 5px;
}
.card_holder_name {
  margin-top: 5px;
}
.cvv_input {
  float: right;
  width: 55px;
  display: flex;
  flex-direction: row;
  width: 132px;
  height: 43px;
  align-items: center;
  background-color: white;
  margin-right: 7px;
  justify-content: space-between;
}

.cvv_input > input {
  font-size: 50px;
}

.cvv_input > img {
  max-height: 30px;
  margin-right: 7px;
}

.cvv > .payment_title {
  width: auto;
}
.cvv {
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: 20px;
  margin-right: 5px;
}
.cvv_input > input {
  border: none;
  width: 70%;
  height: 95%;
}
.cvv_input > input:focus {
  outline: none;
}
.card_holder_name > input {
  border: 2px solid #e4e9ee;
  margin-top: 10px;
  height: 37px;
  width: 90%;
}
.card_holder_name > input::placeholder {
  font-size: 16px;
  color: rgb(128, 135, 147);
  opacity: 0.5;
  text-indent: 10px;
}

.card_inner > .payment_title {
  margin-top: 20px;
}
.number_input > input:not(:last-child) {
  margin-right: 3%;
}
.text {
  padding: 5px;
  /* padding-bottom: 0; */
  font-size: 12px;
  padding-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(124, 130, 141);
  line-height: 1.4;
}
.payment_title {
  color: #8494ab;
  width: 170px;
}
.title {
  width: 250px;
}
.data {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 17pt;
}
.info,
.value {
  font-size: 16px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.payment_data_wrapper {
  margin-top: 30px;
}

.card,
.right_card {
  margin-top: 10px;
  height: 230px;
  width: 325px;
  padding-top: 0;
  border: 2px solid #e4e9ee;

  border-radius: 10px;
  background-color: rgb(247, 248, 248);
  z-index: 1;
  position: relative;
}
.card {
  float: left;
}
.right_card {
  position: absolute;
  background-color: rgb(247, 248, 248);
  z-index: 0;
  margin-left: 200px;
  margin-top: 33px;
}
.card_inner {
  margin-left: 10px;
}
.magnet_line {
  background-color: rgb(228, 233, 238);
  width: 100%;
  height: 40px;
  margin-top: 20px;
}
</style>
