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
import { onMounted } from "@vue/composition-api";

export default {
  name: "WorkspaceThread",
  setup(_, ctx) {
    onMounted(() => {
      setTimeout(() => ctx.root.$router.push("/add"), 3000);
    });
  }
  // watch: {
  //   // call again the method if the route changes
  //   // '$route': 'fetchData'
  // }
};
</script>

<style scoped lang="scss"></style>
