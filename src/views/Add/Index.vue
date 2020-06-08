<template>
  <component :is="component" />
</template>

<script>
import { computed } from "@vue/composition-api";
import Default from "./Default.vue";
import Channel from "./Channel.vue";
import Invites from "./Invites.vue";
import Explore from "./Explore.vue";
import Name from "./Name.vue";
import Type from "./Type.vue";
import store from "@/store";

export default {
  name: "AddWorkspace",
  beforeRouteEnter(to, _, next) {
    if (to.hash === "#type" || to.hash === "#channel") {
      if (store.state.newWorkspace.name.length) next();
      else next("/add#name");
    } else if (to.hash === "#invites") {
      if (store.state.newWorkspace.channelName.length) next();
      else next("/add#channel");
    } else if (to.hash === "#name" || to.hash === "#explore" || !to.hash) {
      next();
    } else {
      next("/add");
    }
  },
  beforeRouteUpdate(to, __, next) {
    if (to.hash === "#type" || to.hash === "#channel") {
      if (store.state.newWorkspace.name.length) next();
      else next("/add#name");
    } else if (to.hash === "#invites") {
      if (store.state.newWorkspace.channelName.length) next();
      else next("/add#channel");
    } else if (to.hash === "#name" || to.hash === "#explore" || !to.hash) {
      next();
    } else {
      next("/add");
    }
  },
  setup(_, ctx) {
    const component = computed(
      () => ctx.root.$route.hash?.slice(1) || "default"
    );

    return { component };
  },
  components: {
    Default,
    Channel,
    Explore,
    Invites,
    Name,
    Type
  }
};
</script>

<style scoped lang="scss"></style>
