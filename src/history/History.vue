<template>
  <div class="app">
    <div class="container">
      <div class="menu">
        <LeftMenu/>
      </div>
      <div class="view">
        <div class="main">
          <div class="table_header">
            <div class="history_block">
              <div @click="sortBy('Date')" class="date">
                Дата
                <Chevron class="dateChevron" :node="'date'"/>
              </div>

              <div class="accountNumber">Номер счета</div>

              <div @click="sortBy('Summ')" class="summ">
                Сумма оплаты
                <Chevron class="summChevron" :node="'summ'"/>
              </div>
            </div>
          </div>

          <div class="main_history">
            <div v-if="paymentsEmpty" class="no_payments">История переводов пуста.</div>
            <div v-else v-for="(payment) in payments" :key="payment.id" class="history_block">
              <div class="date">{{payment.date}}</div>
              <div class="accountNumber">{{payment.account}}</div>
              <div class="summ">{{transformMoney(payment.summ)}} руб.</div>
            </div>
          </div>
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
import Chevron from "./Chevron";
export default {
  components: {
    Chevron
  },
  data: () => ({
    dateOrder: 0,
    summOrder: 0
  }),
  computed: {
    payments() {
      return this.$store.getters.getPayments;
    },
    paymentsEmpty() {
      return this.payments.length == 0;
    }
  },
  methods: {
    /**
     * Transforms string with summ of payment
     * ex: 9000 -> 9,000
     * @param {Number|String}
     */
    transformMoney(str) {
      str = str + "";
      if (str.length <= 3) return str;
      str = str
        .split("")
        .reverse()
        .join("");
      let i = str.indexOf(".");
      return str
        .split("")
        .map((x, index) => {
          if (index < i) return x;
          if (i != -1) index -= i + 1;

          if (index != 0 && index % 3 == 0) x += ",";
          return x;
        })
        .reverse()
        .join("");
    },

    /**
     * Sorts data in the history table depends on a param
     * @param {String}
     */
    sortBy(type) {
      switch (type) {
        case "Date": {
          this.payments.sort((a, b) => {
            let first = Date.parse(a.date.split(".").reverse()),
              second = Date.parse(b.date.split(".").reverse());
            if (this.summOrder) return first - second;
            else return second - first;
          });
          this.summOrder = !this.summOrder;
          break;
        }
        case "Summ": {
          this.payments.sort((a, b) => {
            if (!this.summOrder) {
              return a.summ - b.summ;
            } else {
              return b.summ - a.summ;
            }
          });
          this.summOrder = !this.summOrder;
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
@import "../styles/mainLayout.css";

.table_header .date,
.table_header .summ {
  cursor: pointer;
}
.no_payments {
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
}

.main_history {
  height: 100%;
  overflow-y: scroll;
}

.table_header {
  background-color: rgb(33, 46, 58);
  height: 50px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  padding-top: 35px;
  font-family: "Open Sans", sans-serif;
}
.history_block,
.table_header {
  margin-left: 0 !important;
}

.history_block {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid rgb(33, 46, 58);
  padding: 0 !important;
}

.table_header > .history_block {
  border-bottom: none;
}
.table_header > .history_block {
  height: 100%;
}
.date,
.accountNumber,
.summ {
  width: calc(100% / 3);
  text-align: center;
}
.history_block {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

@media (max-width: 705px) {
  .history_block {
    font-size: 15px;
  }
  .history_block svg {
    height: 12px;
    width: 12px;
  }
  .btn-menu span {
    background-color: white !important;
  }
}
@media (max-width: 480px) {
  .history_block {
    font-size: 12px;
  }
}
</style>


