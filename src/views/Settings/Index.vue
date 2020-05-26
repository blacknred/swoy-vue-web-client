<template>
  <div>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import App from "./App.vue";

export default {
  name: "Settings",
  components: {
    Profile,
    App
  },
  computed: {
    component() {
      return this.$route?.hash.slice(1) || "app";
    }
  }
};
</script>

<style scoped lang="scss"></style>
