<template>

  <div class="app">
    <div class="container">
      <div class="menu">
        <LeftMenu/>
      </div>
      <div class="view">
        <div class="main">
          <div class="info text-center">
            <div class="greet">Уважаемый покупатель!</div>
            <h1>Оплата прошла успешно.</h1>
            <div class="requisites">
              <div class="card_number">Номер карты: {{card}}</div>
              <div class="name">Имя: {{getName}}</div>
              <div class="summ">Сумма: {{summ}} руб.</div>
              <div class="date">Дата: {{getDate}}</div>
            </div>
            <div @click="goBack" class="return_link">Вернуться в магазин</div>
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

export default {

  computed: {
    card() {
      return this.$store.getters.cardNumberGetter.reduce((A, I) => {
        return (A += "  " + I);
      });
    },
    summ() {
      return this.$store.getters.getSumm;
    },
    account() {
      return this.$store.getters.getAccountNumber;
    },
    getDate() {
      return this.$store.getters.getDate;
    },
    getName(){
      return this.$store.getters.cardHolderNameGetter;
    }
  },
  methods: {
    goBack(){
      this.$router.push('/payment')
      this.$store.dispatch('clearData');
    }
  },
  beforeDestroy(){
    this.$store.dispatch('clearData');
  }
};
</script>

<style>
@import "../styles/mainLayout.css";


.greet {
  font-size: 25px;
  font-weight: 500;
}

.return_link {
  margin-top: 5%;
  /* text-decoration: underline; */
  color: #928f8f;
}

.return_link:hover {
  cursor: pointer;
  text-decoration: underline;
}

hr {
  width: 20%;
}

@media(max-width: 650px)
{
  .requisites{
    margin-left: 5%;
    width: 90%;
  }
}
</style>
