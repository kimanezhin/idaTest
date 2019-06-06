<template>
  <div class="menu">
    <div class="link">
      <router-link to>
        <span>Личный кабинет</span>
      </router-link>
    </div>

    <div @click="changeTab(0)" class="link">
      <router-link to="/">
        <span name = "0" :class="{current_link:isThisLink(0)}">Платежи</span>
      </router-link>
    </div>

    <div @click="changeTab(1)" class="link">
      <router-link to="">
        <span name = "1" :class="{current_link:isThisLink(1)}">История платежей</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to>
        <span>Настройки</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to>
        <span class="current_link">Выйти</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: ()=>({
    index:0,
  }),
  methods: {
    changeTab(index) {
  
      localStorage.setItem("currentTab", index);
      
      document.getElementsByName(index)[0].classList.add('current_link')
          if(index==this.index)
      return;
      document.getElementsByName(this.index)[0].classList.remove('current_link')
      this.index = index;
    },
    isThisLink(index) {
      return index === parseInt(localStorage.getItem("currentTab"));
    }
  },
  beforeDestroy() {
    localStorage.removeItem("currentTab");
  },
  created(){
    if(localStorage.getItem('currentTab'))
      this.index = parseInt(localStorage.getItem('currentTab'))
      
  },
  mounted(){
    this.changeTab(this.index)
  }
};
</script>


<style>
@import "../styles/leftMenu.css";
</style>
