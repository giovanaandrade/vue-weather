<template>
  <div id="nav"><router-link to="/weather-vue/">Home</router-link></div>

  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
  background: rgb(160, 111, 194);
  background: linear-gradient(
    90deg,
    rgba(160, 111, 194, 1) 0%,
    rgba(249, 126, 242, 1) 50%,
    rgba(255, 207, 140, 1) 100%
  );
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
