<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-container class="__center">
        <el-header height="auto">
          <h1>{{ $t("recovery") }}</h1>
        </el-header>
        <el-main></el-main>
        <el-footer height="auto"></el-footer>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AuthRecovery"
};
</script>
