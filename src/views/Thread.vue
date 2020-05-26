<template>
  <div>
    <p>Thread</p>
    <content-placeholders>
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
  </div>
</template>

<script>
export default {
  name: "WorkspaceThread"
};
</script>

<style scoped lang="scss"></style>
