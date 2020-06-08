<template>
  <el-row v-loading="state.isLoading" type="flex" justify="center" align="middle">
    <el-col :span="6">
      <el-card shadow="always">
        <el-container class="__center">
          <el-header>
            <h2>{{ $t("checkEmail") }}</h2>
          </el-header>

          <el-main>
            <h4>{{ $t("confirmDescription", { email }) }}</h4>
            <br />
            <el-row :gutter="15">
              <el-col :span="4" :offset="0" v-for="(_, idx) in state.code" :key="idx">
                <el-input
                  @input.native="onInput($event, idx)"
                  v-model="state.code[idx]"
                  maxlength="1"
                  :ref="idx"
                  size="1"
                />
              </el-col>
            </el-row>
          </el-main>

          <el-footer height="auto">
            <code>{{ $t("confirmExpire", { seconds: state.timeLeft }) }}</code>
          </el-footer>
        </el-container>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import dayjs from "dayjs";
import { watch, onMounted, reactive, onUnmounted } from "@vue/composition-api";

export default {
  name: "AuthConfirm",
  setup(_, ctx) {
    const { $store, $router } = ctx.root;
    const { email, code, expireAt } = $store.state.start.confirmation;
    const state = reactive({
      timeLeft: dayjs(expireAt).diff(dayjs(), "second"),
      code: ["", "", "", "", "", ""],
      isLoading: false,
      timer: null
    });

    watch(
      () => state.code,
      async val => {
        if (val.join("") === `${code}`) {
          state.isLoading = true;
          await $store.dispatch("getAuthTokens");
          $router.push("/");
        }
      }
    );

    watch(
      () => state.timeLeft,
      () => {
        if (dayjs().isAfter(dayjs(expireAt))) {
          $router.push({ hash: "#check" });
        }
      }
    );

    const onInput = (e, r) => {
      if (e.data && ctx.refs[r + 1]) {
        ctx.refs[r + 1][0].focus();
      } else if (!e.data && ctx.refs[r - 1]) {
        ctx.refs[r - 1][0].focus();
      }
    };

    onUnmounted(() => {
      $store.commit("setConfirmation");
    });

    onMounted(() => {
      state.timer = setInterval(() => state.timeLeft--, 1000);
    });

    return { email, state, onInput };
  }
};
</script>

