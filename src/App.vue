<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in" appear>
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/composition-api";
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
  setup(_, ctx) {
    const layout = computed(() => ctx.root.$route.meta.layout || "default");

    onMounted(() => {
      // ctx.root.$notify({
      //   title: "It works!",
      //   type: "success",
      //   message:
      //     "We've laid the ground work for you. It's time for you to build something epic!",
      //   duration: 5000
      // });
    });

    return { layout };
  }
};
</script>
