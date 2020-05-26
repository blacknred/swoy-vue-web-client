<template>
  <el-container>
    <el-header>
      <el-row>
        <el-row>
          <el-col :span="2" :offset="11" class="centered">
            <h1>
              <router-link to="/">Swoy</router-link>
            </h1>
          </el-col>
        </el-row>
      </el-row>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <el-row>
        <el-col :span="3" :offset="10" class="centered">
          <el-dropdown @command="handleChangeRegion" trigger="click" placement="top" size="medium">
            <span class="el-dropdown-link">
              <i class="el-icon-setting"></i>
              {{ $t("changeRegion") }}
              <i class="el-icon-arrow-up el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>United States(English)</el-dropdown-item>
              <el-dropdown-item>Российская Федерация(Русский)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    handleChangeRegion(region) {
      this.$store.dispatch("setLanguage", region);
    }
  }
};
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
h1 {
  font-family: "Dosis";
}
</style>
