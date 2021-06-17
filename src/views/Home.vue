<template>
  <main>
    <div class="container">
      <SearchBar />
      <img src="../assets/weathersun.svg" alt="" class="img-weather" />
    </div>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "Home",
  components: { SearchBar },
};
</script>
<style>
main {
  display: flex;
  justify-content: center;
}
.container {
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
}

.img-weather {
  padding: 5%;
  height: 50vh;
}
</style>
