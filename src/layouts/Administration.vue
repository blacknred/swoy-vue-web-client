<template>
  <el-container class="container">
    <el-aside width="200px">
      <administration-sidebar />
    </el-aside>

    <el-container>
      <el-header>header</el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdministrationSidebar from "@/components/AdministrationSidebar.vue";

export default {
  name: "AdministrationLayout",
  components: {
    AdministrationSidebar
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}
</style>
