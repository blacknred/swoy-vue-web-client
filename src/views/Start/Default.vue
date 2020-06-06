<template>
  <el-container>
    <transition name="fade" appear>
      <el-header height="400px">
        <img :src="require(`@/assets/images/logo.png`)" alt="title" />
      </el-header>
    </transition>

    <el-main>
      <el-row type="flex" justify="center" align="middle">
        <h1>{{ title }}</h1>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <code>{{ $t("landingAppDescription") }}</code>
      </el-row>
    </el-main>

    <el-footer height="auto">
      <el-row type="flex" justify="center" align="middle">
        <router-link to="#check">
          <el-button type="primary" round>
            {{ $t("getStarted") }}
            <i class="el-icon-right" />
          </el-button>
        </router-link>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Default",
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
  }
}
</style>
