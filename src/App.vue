<template>
  <main>
    <div class="container">
      <SearchBar />
      <WeatherWrap />
    </div>
  </main>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import WeatherWrap from "./components/WeatherWrap.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { SearchBar, WeatherWrap },
  computed: mapGetters(["allWeather"]),
};
</script>

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

main {
  display: flex;
  justify-content: center;
}

.container {
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 100%;
}
</style>
