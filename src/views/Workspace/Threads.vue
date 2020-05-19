<template>
  <div>
    <p>Workspace threads</p>
    <content-placeholders>
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
  </div>
</template>

<script>
export default {
  name: "workspace-threads"
};
</script>

<style scoped lang="scss"></style>
