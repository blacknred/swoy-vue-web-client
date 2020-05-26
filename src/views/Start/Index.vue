<template>
  <div>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
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
  computed: {
    component() {
      return this.$route?.hash.slice(1) || "default";
    }
  }
};
</script>

<style scoped lang="scss"></style>
