<template>
  <div>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import Invites from "./Invites.vue";
import Name from "./Name.vue";
import Type from "./Type.vue";

export default {
  name: "NewWorkspace",
  components: {
    Channel,
    Invites,
    Name,
    Type
  },
  computed: {
    component() {
      return this.$route?.hash.slice(1) || "name";
    }
  }
};
</script>

<style scoped lang="scss"></style>
