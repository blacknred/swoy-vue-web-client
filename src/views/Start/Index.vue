<template>
  <div>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import Default from "./Default.vue";
import Explore from "./Explore.vue";
import Confirm from "./Confirm.vue";
import Check from "./Check.vue";

export default {
  name: "Start",
  components: {
    Default,
    Explore,
    Confirm,
    Check
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
