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
.search-bar {
  background: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: none;
  padding: 0.5rem;
  width: 50vw;
  transition: 0.8s;
}

@media only screen and (max-width: 768px) {
  .search-bar {
    width: 80vw;
  }
}

.search-bar:focus {
  background-color: antiquewhite;
}
</style>
