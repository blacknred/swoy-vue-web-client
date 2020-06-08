<template>
  <el-container class="container">
    <el-header height="90px" v-show="showHeader">
      <el-row type="flex" justify="center" align="middle">
        <router-link to="/">
          <el-link type="primary">
            <h2 class="__logo">{{ appName }}</h2>
          </el-link>
        </router-link>
      </el-row>
      <br />
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer height="80px">
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
    const showHeader = computed(
      () => !/^\/(start)?$/.test(ctx.root.$route.fullPath)
    );

    return {
      showHeader,
      appName: `#${process.env.VUE_APP_TITLE}.`
    };
  }
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  header {
    & .el-row {
      height: 100%;
    }
  }
  form {
    input,
    button {
      width: 25rem;
    }
  }
  ul {
    & .el-card {
      margin-bottom: 1rem;
      &__body {
        padding: 0;
      }
    }
  }
  .__logo {
    font-family: "Dosis";
  }
  .__center {
    text-align: center;
  }
  .__list {
    margin: -20px;
    max-height: 58vh;
  }
  .el-input-group__append {
    border: 0;
    padding: 0;
  }
  .el-card {
    & section {
      padding: 3rem 0;
      height: 350px;
    }
    &.__primary {
      background-color: #409eff;
      color: white;
    }
  }
}
</style>
