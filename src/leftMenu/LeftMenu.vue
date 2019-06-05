<template>
  <div class="menu">
    <div class="link">
      <router-link to>
        <span>Личный кабинет</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to="/">
        <span>Платежи</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to="/history">
        <span>История платежей</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to>
        <span>Настройки</span>
      </router-link>
    </div>

    <div class="link">
      <router-link to>
        <span>Выйти</span>
      </router-link>
    </div>
  </div>
</template>

<style>
.menu {
  /* background-color: rgb(31, 34, 41); */
  display: flex;
  flex-direction: column;
}
.link {
  display: flex;
  height: calc(100% / 5);
  width: 100%;
  text-indent: 20px;
  align-items: center;
}

.link > a {
  /* color: #808592; */
  
  text-decoration: none;
}
.link:not(:last-child) > a{
  color: white;
}
.link{
  font-family: "Open Sans", sans-serif;
  font-weight: 550;
}
.link:not(:last-child){
  background-color: #1f2229;
}
.link:last-child{
  background-color: #191c24;
}
.link:hover, .link:nth-last-child(2):hover{
  background-color: #2a2d37;
  cursor: pointer;
}
.link:last-child > a{
    color: #808592;
}
.link:nth-last-child(2){
  background-color: #191c24;
}
</style>
