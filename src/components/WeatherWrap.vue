<template>
  <div class="weather-wrap">
    <div class="city-country">
      {{ this.allWeather.name }}, {{ this.allWeather.sys.country }}
    </div>
    <div class="date">{{ dateBuilder() }}</div>
    <div class="temperature">
      {{ Math.round(this.allWeather.main.temp) }} °C
    </div>

    <div class="weather">{{ this.allWeather.weather[0].main }}</div>
    <i
      v-if="this.allWeather.weather[0].main == 'Clouds'"
      class="fas fa-cloud"
    />
    <i
      v-if="this.allWeather.weather[0].main == 'Rain'"
      class="fas fa-cloud-rain"
    />
    <i
      v-if="this.allWeather.weather[0].main == 'Snow'"
      class="fas fa-snowflake"
    />
    <i v-if="this.allWeather.weather[0].main == 'Clear'" class="fas fa-sun" />
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

<style>
.weather-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
}

.weather-wrap i {
  font-size: 5rem;
  color: antiquewhite;
}

.temperature {
  font-size: 3rem;
}
</style>
