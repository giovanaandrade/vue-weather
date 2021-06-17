<template>
  <div id="nav"><router-link to="/">Home</router-link></div>
  <router-view />
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
</style>
