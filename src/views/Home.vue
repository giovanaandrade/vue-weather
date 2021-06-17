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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-weather {
  padding: 5%;
  max-width: 80vw;
  max-height: 80vh;
}
</style>
