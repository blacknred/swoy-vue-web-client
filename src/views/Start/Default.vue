<template>
  <el-container>
    <br />
    <br />
    <br />
    <el-header height="400px">
      <el-row type="flex" justify="center">
        <transition name="fade" appear>
          <el-image
            :src="require('@/assets/images/logo.png')"
            style="height: 400px"
            fit="contain"
            alt="appName"
          />
        </transition>
      </el-row>
    </el-header>

    <el-main>
      <el-row type="flex" justify="center" align="middle">
        <h1 class="__logo">{{ appName }}</h1>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <code>{{ $t("landingAppDescription") }}</code>
      </el-row>
    </el-main>
    <br />
    <br />

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
  name: "DefaultStart",
  setup() {
    return { appName: `${process.env.VUE_APP_TITLE}.` };
  }
};
</script>