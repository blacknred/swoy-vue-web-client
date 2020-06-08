<template>
  <component :is="component" />
</template>

<script>
import { computed } from "@vue/composition-api";
import Recovery from "./Recovery.vue";
import Default from "./Default.vue";
import Confirm from "./Confirm.vue";
import Check from "./Check.vue";
import store from "@/store";

export default {
  name: "Start",
  components: {
    Recovery,
    Confirm,
    Default,
    Check
  },
  beforeRouteEnter(to, _, next) {
    if (to.hash === "#confirm") {
      if (store.state.start.confirmation.code) next();
      else next("/start#check");
    } else if (to.hash === "#check" || to.hash === "#recovery" || !to.hash) {
      next();
    } else next("/start");
  },
  beforeRouteUpdate(to, __, next) {
    if (to.hash === "#confirm") {
      if (store.state.start.confirmation.code) next();
      else next("/start#check");
    } else if (to.hash === "#check" || to.hash === "#recovery" || !to.hash) {
      if (!to.hash) to.meta.noHeader = true;
      next();
    } else next("/start");
  },
  setup(_, ctx) {
    const component = computed(
      () => ctx.root.$route.hash?.slice(1) || "default"
    );

    return { component };
  }
};
</script>

<style scoped lang="scss"></style>
