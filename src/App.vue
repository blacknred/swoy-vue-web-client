<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$notify({
      title: "It works!",
      type: "success",
      message:
        "We've laid the ground work for you. It's time for you to build something epic!",
      duration: 5000
    });
  }
};
</script>
