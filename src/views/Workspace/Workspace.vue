<template>
  <div>
    <p>Workspace</p>
    <router-view />
  </div>
</template>

<script>
// if !valid workspaceId redirect to /
export default {
  name: "workspace"
};
</script>

<style scoped lang="scss"></style>
