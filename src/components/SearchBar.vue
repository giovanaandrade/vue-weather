<template
  ><div>
    <input
      type="text"
      class="search-bar"
      placeholder="Search"
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
.search-bar {
  position: flex;
  justify-content: center;
}
.search-box .search-bar {
  width: 50%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>
