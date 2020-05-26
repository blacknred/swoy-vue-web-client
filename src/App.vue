<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import Default from "@/layouts/Default.vue";
import Workspace from "@/layouts/Workspace.vue";
import Administration from "@/layouts/Administration.vue";

export default {
  name: "App",
  components: {
    Default,
    Workspace,
    Administration
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default";
    }
  },
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
