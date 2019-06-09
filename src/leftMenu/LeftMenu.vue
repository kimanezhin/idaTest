<template>
  <div class="menu">
    <!-- <div class="link">
      <span>Личный кабинет</span>
    </div>

    <div @click="changeTab('link0')" class="link">
      <span name="link0" :class="{current_link:isThisLink(0)}">Платежи</span>
    </div>

    <div @click="changeTab('link1')" class="link">
      <span name="link1" :class="{current_link:isThisLink(1)}">История платежей</span>
    </div>

    <div class="link">
      <span>Настройки</span>
    </div>

    <div class="link">
      <span class="current_link">Выйти</span>
    </div> -->

    <input type="checkbox" id="hmt" class="hidden-menu-ticker">
    <!-- Далее вёрстка самой иконки. Разделена на спаны, что бы красиво превращать в крестик при открытии (почти как в Телеграме :) -->
    <label class="btn-menu" for="hmt">
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
    </label>
    <!-- Менюшка раскрывающаяся и скрывающаяся -->
    <ul class="hidden-menu">
      <div class="link">
      <span>Личный кабинет</span>
    </div>

    <div @click="changeTab('link0')" class="link">
      <span name="link0" :class="{current_link:isThisLink(0)}">Платежи</span>
    </div>

    <div @click="changeTab('link1')" class="link">
      <span name="link1" :class="{current_link:isThisLink(1)}">История платежей</span>
    </div>

    <div class="link">
      <span>Настройки</span>
    </div>

    <div class="link">
      <span class="current_link">Выйти</span>
    </div>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    index: "link0"
  }),
  methods: {
    /**
     * Changes tab based on an index
     * @param {String}
     */
    changeTab(index) {
      localStorage.setItem("currentTab", index);

      document.getElementsByName(index)[0].classList.add("current_link");
      if (index === this.index) return;
      document
        .getElementsByName(this.index)[0]
        .classList.remove("current_link");
      this.index = index;
      switch (index) {
        case "link0": {
          this.$router.push("/payment");
          break;
        }
        case "link1": {
          this.$router.push("/history");
          break;
        }
      }
    },
    /**
     * Validator to color the current link in gray
     * @param {Number}
     */
    isThisLink(index) {
      return index === localStorage.getItem("currentTab");
    }
  },
  beforeDestroy() {
    localStorage.removeItem("currentTab");
  },
  created() {
    if (localStorage.getItem("currentTab"))
      this.index = localStorage.getItem("currentTab");
  },
  mounted() {
    this.changeTab(this.index);
  }
};
</script>


<style>
@import "../styles/leftMenu.css";
</style>
