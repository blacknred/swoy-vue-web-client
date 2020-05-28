<template>
  <el-container>
    <el-header height="400px">
      <img src="@/assets/images/logo.png" alt="title" />
    </el-header>

    <el-main>
      <el-row type="flex" justify="center" align="middle">
        <h1>{{title}}</h1>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <code>{{$t("landingAppDescription")}}</code>
      </el-row>
    </el-main>

    <el-footer height="auto">
      <el-row type="flex" justify="center" align="middle">
        <router-link to="/start">
          <el-button type="primary" round>
            <h3>
              {{$t("getStarted")}}
              <i class="el-icon-right" />
            </h3>
          </el-button>
        </router-link>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Landing",
  setup() {
    return { title: process.env.VUE_APP_TITLE };
  }
};
</script>

<style scoped lang="scss">
section {
  height: 90%;
  header {
    margin: 0 auto;
    img {
      height: 100%;
      object-fit: contain;
      padding-top: 4rem;
    }
  }
  h1 {
    font-family: "Dosis";
    font-size: 3rem;
    line-height: 3;
  }
}
</style>