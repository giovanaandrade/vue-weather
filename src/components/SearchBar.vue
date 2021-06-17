<template>
  <div class="search-box">
    <label for="search">
      <input
        name="search"
        type="text"
        class="search-bar"
        placeholder="Search city"
        v-model="query"
        @keyup.enter="onSubmit(query)"
    /></label>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["fetchWeather"]),
    onSubmit(query) {
      this.$router.push({ name: "Weather", params: { query: query } });
    },
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
  padding: 3%;
}

.search-bar {
  width: 100%;
  background: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: none;
  padding: 0.5rem;
  transition: 0.8s;
}

.search-bar:focus {
  background-color: antiquewhite;
}
</style>
