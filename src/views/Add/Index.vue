<template>
  <div>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import Default from "./Default.vue";
import Channel from "./Channel.vue";
import Invites from "./Invites.vue";
import Explore from "./Explore.vue";
import Name from "./Name.vue";
import Type from "./Type.vue";

export default {
  name: "NewWorkspace",
  components: {
    Default,
    Channel,
    Explore,
    Invites,
    Name,
    Type
  },
  computed: {
    component() {
      return this.$route?.hash.slice(1) || "default";
    }
  }
};
</script>

<style scoped lang="scss"></style>
