<template>
  <div id="app">
    <transition name="slide-down-fade" mode="out-in" appear>
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import { computed, watch } from "@vue/composition-api";
import Administration from "@/layouts/Administration.vue";
import Workspaces from "@/layouts/Workspaces.vue";
import Default from "@/layouts/Default.vue";

export default {
  name: "App",
  components: {
    Default,
    Workspaces,
    Administration
  },
  setup(_, ctx) {
    const layout = computed(() => ctx.root.$route?.meta?.layout || "default");
    const notification = computed(() => ctx.root.$store.state.notification);

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
