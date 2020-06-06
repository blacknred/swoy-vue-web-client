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
import { computed, watch } from "@vue/composition-api";
import Administration from "@/layouts/Administration.vue";
import Workspace from "@/layouts/Workspace.vue";
import Default from "@/layouts/Default.vue";

export default {
  name: "App",
  components: {
    Default,
    Workspace,
    Administration
  },
  setup(_, ctx) {
    const { $route, $store } = ctx.root;

    const layout = computed(() => $route?.meta?.layout || "default");
    const notification = computed(() => $store.state.notification);

    watch(notification, note => {
      if (note) {
        ctx.root.$notify({
          position: "bottom-left",
          message: note.message,
          type: note.type,
          duration: 6000
        });
      }
    });

    return { layout };
  }
};
</script>
