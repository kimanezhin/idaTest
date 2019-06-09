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
                <div
                  @click.stop="falseAccountFlag"
                  v-if="accountFlag"
                  class="value"
                >{{accountNumber}}</div>
                <input v-model="accountNumber" v-else id="accountTurn" class="value">
              </div>

              <div class="payment_data">
                <div class="payment_title">Сумма платежа:</div>
                <div @click.stop="falsePaymentFlag" v-if="paymentFlag" class="value">{{summ}} руб.</div>
                <input v-model="paymentAmount" v-else id="paymentTurn" class="value">
              </div>
            </div>
          </div>

          <div class="card_data">
            <div class="data">Данные банковской карты</div>
            <div class="card">
              <div class="card_inner">
                <div class="payment_title">Номер карты</div>
                <div class="number_input">
                  <input
                    v-for="(index) in 4"
                    :key="index"
                    v-model="cardNumber[index-1]"
                    @input="validate"
                    @keyup.delete="deleteAndGoLeft"
                    @keydown.left="goLeft"
                    @keydown.right="goRight($event.target.name)"
                    :name="index-1"
                    type="text"
                    class="number_input_box"
                  >
                </div>
                <div class="payment_title">Срок действия</div>
                <Date/>
                <div class="card_holder_name">
                  <input
                    v-model="holderName"
                    type="text"
                    class="card_holder_name_input"
                    placeholder="Держатель карты"
                  >
                </div>
              </div>
            </div>
            <div class="right_card">
              <div class="magnet_line"></div>
              <div class="cvv">
                <div class="payment_title">Код CVV2 / CVC2</div>
                <div class="cvv_input">
                  <input v-model="cvvCode" type="password">
                  <img src="../../img/quest.png" alt>
                </div>
              </div>
            </div>
          </div>
          <button @click="highlightErrors" class="send_button">Оплатить</button>
        </div>

        <div class="alertMessage">
          <div class="text">Произошла ошибка! Попробуйте еще раз.</div>
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
import Date from "./DateInput";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Date
  },
  data: () => ({
    name: "1",
    nameRegex: new RegExp("^[a-zA-Z]+$"),
    cvvRegex: new RegExp("^[0-9]+$"),
    paymentFlag: true,
    accountFlag: true,
    currentInput: 1
  }),
  computed: {
    ...mapGetters({
      cardGetter: "cardNumberGetter",
      nameGetter: "cardHolderNameGetter",
      cvvGetter: "cvvGetter",
      summGetter: "getSumm",
      getAccountNumber: "getAccountNumber"
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
     * Return number of account to which send
     * @type {String}
     */
    accountNumber: {
      get() {
        return this.getAccountNumber;
      },
      set() {
        this.setAccuountNumber(newValue);
      }
    },

    /**
     * Returns summ of current transaction
     * @type {Number}
     */
    summ: {
      get() {
        return this.summGetter;
      },
      set(newValue) {
        this.setSumm(newValue);
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
     * Field for cvv code
     * @type {Number}
     */
    cvvCode: {
      get() {
        return this.cvvGetter;
      },
      set(newValue) {
        this.setCvv(newValue);
      }
    }
  },
  methods: {
    ...mapActions({
      setNumber: "setCardNumber",
      setName: "setCardHolderName",
      setCvv: "setCvv",
      setSumm: "setSumm",
      setAccuountNumber: "setAccuountNumber"
    }),

    /**
     * Sets payment flag to false
     */
    falsePaymentFlag(event) {
      this.paymentFlag = false;
      this.accountFlag = true;
      this.$nextTick(() => {
        document.getElementById("paymentTurn").focus();
      });
    },

    /**
     * Sets payment flag or account flag to true;
     */
    trueFlag(event) {
      if (event.target.id === "paymentTurn") this.paymentFlag = false;
      else this.paymentFlag = true;
      if (event.target.id === "accountTurn") this.accountFlag = false;
      else this.accountFlag = true;
    },


    /**
     * Sets account flag to false
     */
    falseAccountFlag() {
      this.accountFlag = false;
      this.paymentFlag = true;
      this.$nextTick(() => {
        document.getElementById("accountTurn").focus();
      });
    },
    /**
     * Validates name of a card holder
     * @returns {Boolean} returns true, if name is valid
     */
    isNameValid() {
      return (
        this.nameRegex.test(this.holderName) && this.holderName.length >= 4
      );
    },

    /**
     * Validates cvv code
     * @returns {Boolean} returns true if code is valid
     */
    isCodeVaild() {
      if (!this.cvvCode) return false;
      let x = parseInt(this.cvvCode);
      return x && x >= 100 && x <= 999;
    },

    /**
     * Validates card code fields
     * @returns {Boolean} returns true if all card code fields are valid
     */
    isCardValid() {
      return !!this.cardNumber.reduce((A, value) => {
        return (A *=
          value.length == 4 && parseInt(value) && parseInt(value) >= 0);
      });
    },
    /**
     * Event handler.
     * Fires on backspace and goes left if there are no numbers
     */
    deleteAndGoLeft(event) {
      if ((event.target.value + "").length == 0) this.goLeft();
    },
    /**
     * Event handler. Fires on left arrow
     * Moves focus to left input
     */
    goLeft() {
      let currNum = parseInt(event.target.name);

      let cur = document.getElementsByName(currNum)[0];
      if (cur.selectionStart != 0) return;
      let nextNum = currNum - 1;
      let next = document.getElementsByName(nextNum)[0];
      if (next) {
        next.focus();
      }
    },

    /**
     * Event handler. Fires on right arrow
     * Moves focus to right input
     */
    goRight(name) {
      let currNum = parseInt(name);
      let cur = document.getElementsByName(currNum)[0];
      if (cur.selectionStart != cur.value.length) return;
      let nextNum = currNum + 1;
      let next = document.getElementsByName(nextNum)[0];
      if (next) next.focus();
    },

    /**
     * Highlights with red all bad inputs
     */
    highlightErrors() {
      let card = !this.isCardValid(),
        code = !this.isCodeVaild(),
        name = !this.isNameValid();
      let inputs = document.getElementsByClassName("number_input_box");
      let cvvInput = document.getElementsByClassName("cvv_input")[0];
      let nameInput = document.getElementsByClassName(
        "card_holder_name_input"
      )[0];
      if (card) {
        for (let i of inputs) {
          i.classList.add("red_border");
        }
      } else {
        for (let i of inputs) {
          i.classList.remove("red_border");
        }
      }
      if (code) {
        cvvInput.classList.add("red_border");
      } else {
        cvvInput.classList.remove("red_border");
      }
      if (name) {
        nameInput.classList.add("red_border");
      } else {
        nameInput.classList.remove("red_border");
      }
      if (!(card || code || name)) {
        this.$store
          .dispatch("sendForm")
          .then(() => {
            this.$router.push("/success");
          })
          .catch(() => {
            this.showAlert();
            console.log("Smth went wrong");
          });
      }
    },

    /**
     * Validates all card fields
     * @param {event}
     * @returns {Boolean} return true if all fields are valid
     */
    validate(event) {
      let value = event.target.value;
      let name = event.target.name;
      value = value.replace(/\s/g, "");
      if (!parseInt(value)) {
        event.target.value = "";
        return;
      }
      while (value.length != 0) {
        let input = document.getElementsByName(name++)[0];
        if (!input) break;
        let tmp = value
          .split("")
          .splice(0, 4)
          .join("");
        value = value.substring(4);
        input.value = tmp;

        this.cardNumber = {
          index: name - 1,
          value: tmp
        };

        if (input.value.length == 4) this.goRight(input.name);
      }
    },

    /**
     * Shows alert box in case of a bad transaction
     */
    showAlert() {
      document.getElementsByClassName("alertMessage")[0].classList.add(
        "alertMessageDown"
      );

      setTimeout(() => {
        document
          .getElementsByClassName("alertMessage")[0]
          .classList.remove("alertMessageDown");
      }, 3000);
    }
  },
  mounted() {
    window.addEventListener("click", this.trueFlag);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.trueFlag);
  }
};
</script>
<style>
@import "../styles/mainLayout.css";
</style>
