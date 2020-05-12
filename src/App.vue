<script>
import Header from "./layout/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: cornsilk;
}
.container {
  padding: 1rem;
}
</style>