<template>
  <div>
    <profile v-if="$route.hash === '#profile'" />
    <app v-if="$route.hash === '#app'" />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import App from "./App.vue";

export default {
  name: "settings",
  components: {
    Profile,
    App
  }
};
</script>

<style scoped lang="scss"></style>
