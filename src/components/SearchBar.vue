<template>
  <div class="search-box">
    <input
      type="text"
      class="search-bar"
      placeholder="Search city"
      v-model="query"
      @keyup.enter="fetchWeather(query)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["fetchWeather"]),
  },
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style>
.search-box {
  width: 100%;
}
.search-bar {
  width: 100%;
  height: 5vh;
  border-radius: 5px;
}
</style>
