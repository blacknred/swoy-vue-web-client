<template>
  <el-row :gutter="30" type="flex" justify="center" align="middle">
    <el-col>
      <el-link type="primary">{{ $t("apps") }}</el-link>
    </el-col>

    <el-col>
      <el-link type="primary">{{ $t("about") }}</el-link>
    </el-col>
    <el-col>
      <el-dropdown
        @command="handleChangeRegion"
        trigger="click"
        placement="top"
        size="medium"
      >
        <el-link type="primary">
          {{ $t("сhangeRegion") }}
          <i class="el-icon-arrow-up el-icon--right"></i>
        </el-link>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            :key="lang"
            :command="lang"
            v-for="lang in languageNameList"
            >{{ languages[lang]["region"] }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col>
      <el-link type="primary">{{ $t("blog") }}</el-link>
    </el-col>
    <el-col v-if="version">
      <el-link type="primary">v. {{ version }}</el-link>
    </el-col>
  </el-row>
</template>

<script>
import Languages from "@/locales";

export default {
  name: "Footer",
  setup(_, ctx) {
    const handleChangeRegion = region => {
      ctx.root.$store.dispatch("setLanguage", region);
    };

    return {
      handleChangeRegion,
      languages: Languages,
      version: process.env.VUE_APP_VERSION,
      languageNameList: Object.getOwnPropertyNames(Languages)
    };
  }
};
</script>

<style scoped lang="scss">
.el-col-24 {
  width: auto;
}
</style>
