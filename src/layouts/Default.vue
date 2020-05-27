<template>
  <el-container>
    <el-header height="100px" v-if="showHeader">
      <el-row type="flex" justify="center" align="middle">
        <router-link to="/">
          <el-link type="primary">
            <h1>{{title}}</h1>
          </el-link>
        </router-link>
      </el-row>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer height="50px">
      <el-row :gutter="30" type="flex" justify="center" align="middle">
        <el-col>
          <el-link type="primary">Apps</el-link>
        </el-col>

        <el-col>
          <el-link type="primary">About</el-link>
        </el-col>
        <el-col>
          <el-dropdown @command="handleChangeRegion" trigger="click" placement="top" size="medium">
            <el-link type="primary">
              {{ $t("changeRegion") }}
              <i class="el-icon-arrow-up el-icon--right"></i>
            </el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :key="lang"
                :command="lang"
                v-for="lang in languages"
              >{{regionNames[lang]}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col>
          <el-link type="primary">Blog</el-link>
        </el-col>
        <el-col v-if="version">
          <el-link type="primary">v. {{version}}</el-link>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import { computed } from "@vue/composition-api";
import Languages from "@/locales";
const REGION_NAMES = {
  en: "United States(English)",
  ru: "Российская Федерация(Русский)"
};

export default {
  name: "DefaultLayout",
  setup(_, ctx) {
    const showHeader = computed(() => !ctx.root.$route.meta.noHeader);

    const handleChangeRegion = region => {
      ctx.root.$store.dispatch("setLanguage", region);
    };

    return {
      showHeader,
      handleChangeRegion,
      regionNames: REGION_NAMES,
      title: process.env.VUE_APP_TITLE,
      version: process.env.VUE_APP_VERSION,
      languages: Object.getOwnPropertyNames(Languages)
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
  }
}

h1 {
  font-family: "Dosis";
  font-size: 2.2rem;
  line-height: 1.17;
}
.el-col-24 {
  width: auto;
}
</style>
