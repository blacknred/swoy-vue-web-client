<template>
  <div>
    <name v-if="$route.hash === '#name'" />
    <type v-if="$route.hash === '#type'" />
    <channel v-if="$route.hash === '#channel'" />
    <invites v-if="$route.hash === '#invites'" />
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import Invites from "./Invites.vue";
import Name from "./Name.vue";
import Type from "./Type.vue";

export default {
  name: "new-workspace",
  components: {
    Channel,
    Invites,
    Name,
    Type
  }
};
</script>

<style scoped lang="scss"></style>
