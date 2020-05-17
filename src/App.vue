<template>
  <div id="app">
    <!-- <Header /> -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
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
