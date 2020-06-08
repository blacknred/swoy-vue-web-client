<template>
  <el-container>
    <el-aside width="80px" style="background-color: #bbb">WS</el-aside>

    <el-container>
      <el-header height="40px" style="background-color: #aaa">workspace search header</el-header>

      <el-container style="height: calc(100vh - 40px)">
        <el-aside width="350px" style="background-color: #ccc">workspace sidebar</el-aside>

        <el-container style="height: calc(100vh - 60px)">
          <el-header height="60px" style="background-color: #eee">thread header</el-header>

          <el-main>
            <router-view />
          </el-main>

          <el-footer height="80px">message form</el-footer>
        </el-container>

        <el-aside width="450px" style="background-color: #ddd">thread sidebar</el-aside>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "WorkspacesLayout"
};
</script>

<style scoped lang="scss">
section {
  height: 100vh;
}
</style>
