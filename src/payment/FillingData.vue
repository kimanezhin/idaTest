<template>
  <div class="app" @keydown.enter="goNext">
    <div class="container">
      <div class="menu">
        <LeftMenu/>
      </div>
      <div class="view">
        <div class="main">
          <div class="info text-center">
            <h1>Перевод на счёт</h1>
            <div class="requisites">
              <div class="card_number">
                <div class="inner_card">Номер счёта</div>
                <input type="text" v-model="accountNumber" placeholder="Счёт" required>
              </div>
              <div class="summ">
                <div class="inner_card">Сумма</div>
                <input type="text" v-model="summ" placeholder="Сумма" required>
              </div>
            </div>
          </div>

          <input @click="goNext" type="Submit" value="Далее" class="send_button">
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
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    /**
     * Return number of account to which send
     * @type {String}
     */
    accountNumber: {
      get() {
        return this.$store.getters.getAccountNumber;
      },
      set(newValue) {
        this.$store.dispatch("setAccountNumber", newValue);
      }
    },

    /**
     * Returns summ of current transaction
     * @type {Number}
     */
    summ: {
      get() {
        return this.$store.getters.getSumm;
      },
      set(newValue) {
        this.$store.dispatch("setSumm", newValue);
      }
    }
  },
  methods: {
      /**
       * Validates inputs and redirects user to the next page
       */
    goNext() {
      let floatReg = /^\d+(\.\d+)?$/,
        intReg = /^\d+$/;

      if (floatReg.test(this.summ) && intReg.test(this.accountNumber)) {
        this.$store.dispatch("setPaymentFlag");
        this.$router.push("/");
      } else {
        this.$store.dispatch("removePaymentFlag");
      }
    }
  },
  created() {
    localStorage.setItem("currentTab", "link0");
  }
};
</script>
<style scoped>
@import "../styles/mainLayout.css";
input,
input:active,
input:focus {
  outline: none;
}
.send_button {
  align-self: center;
}
.requisites input {
  width: 50%;
}
.requisites input::placeholder {
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
