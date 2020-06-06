<template>
  <el-container>
    <el-header height="100px">
      <el-row type="flex" justify="center" align="middle">
        <router-link to="/start">
          <el-link type="primary">
            <h2>{{ title }}</h2>
          </el-link>
        </router-link>
      </el-row>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer height="50px">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import { computed } from "@vue/composition-api";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: { Footer },
  setup(_, ctx) {
    const showHeader = computed(() => !ctx.root.$route.meta.noHeader);

    return {
      showHeader,
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>

<style scoped lang="scss">
section {
  height: 100vh;
  header {
    div {
      height: 100%;
    }
    h2 {
      font-family: "Dosis";
    }
  }
  .el-col-24 {
    width: auto;
  }
}
</style>
