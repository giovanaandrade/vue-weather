<template>
  <div>
    {{ this.allWeather.name }},

    {{ this.allWeather.sys.country }}

    {{ dateBuilder() }}
    {{ Math.round(this.allWeather.main.temp) }}
    {{ this.allWeather.weather[0].main }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeatherWrap",
  computed: mapGetters(["allWeather"]),
  methods: {
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style></style>
