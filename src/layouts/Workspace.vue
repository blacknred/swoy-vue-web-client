<template>
  <el-container class="container">
    <el-header>workspace search header</el-header>

    <el-container>
      <el-aside width="200px">workspace sidebar</el-aside>

      <el-container>
        <el-header>thread header</el-header>

        <el-main>
          <router-view />
        </el-main>

        <el-footer>message form</el-footer>
      </el-container>

      <el-aside width="200px">thread sidebar</el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "WorkspaceLayout"
};
</script>

<style scoped lang="scss">
section {
  height: 100vh;
}
</style>
