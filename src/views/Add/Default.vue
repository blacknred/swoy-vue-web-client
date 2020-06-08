<template>
  <el-row type="flex" justify="center">
    <el-col :span="5">
      <el-card shadow="never" class="__primary">
        <el-container>
          <el-header>
            <h2>{{ $t("createTeamTitle", {appName}) }}</h2>
          </el-header>
          <el-main>
            <h4>{{ $t("createTeamDescription") }}</h4>
          </el-main>
          <el-footer>
            <router-link to="/add#name">
              <el-button plain>{{ $t("createTeamAction") }}</el-button>
            </router-link>
          </el-footer>
        </el-container>
      </el-card>
    </el-col>
    <el-col :span="5">
      <el-card shadow="never">
        <el-container>
          <el-header>
            <h2>{{ $t("exploreTeamsTitle", {appName}) }}</h2>
          </el-header>
          <el-main>
            <h4>{{ $t("exploreTeamsDescription") }}</h4>
          </el-main>
          <el-footer>
            <router-link to="/add#explore">
              <el-button type="primary">{{ $t("exploreTeamsAction") }}</el-button>
            </router-link>
          </el-footer>
        </el-container>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "DefaultAdd",
  setup() {
    return { appName: process.env.VUE_APP_TITLE };
  }
};
</script>

