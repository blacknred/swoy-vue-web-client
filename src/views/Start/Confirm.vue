<template>
  <div>
    <el-row type="flex" justify="center" align="middle">
      <h2>Check your email</h2>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      We've sent a 6-digit confirmation code to {{ email }}.
      <br />It will expire shortly, so enter it soon.
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-input autofocus clearable type="number" v-model="code"></el-input>
    </el-row>
    <el-row
      type="flex"
      align="middle"
      justify="center"
    >Confirmation code will expire after {{ secondsLeft }} secounds</el-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { ref, watch } from "@vue/composition-api";

export default {
  name: "AuthConfirm",
  setup(_, ctx) {
    const code = ref("");
    const { $store } = ctx.root;

    const secondsLeft = ref(
      dayjs().diff(dayjs($store.state.start.confirmation.expireAt))
    );

    watch(code, newVal => {
      if (newVal === $store.state.start.confirmation.code) {
        $store.dispatch("getAuthTokens");
      }
    });

    watch(code, newVal => {
      if (newVal === $store.state.start.confirmationCode) {
        $store.dispatch("getAuthTokens");
      }
    });

//     onMounted(() => {
//       setInterval(() => {
// if () {
  
// }
//       }, 1000)
//     })

    return { email: $store.state.start.confirmation.email, code, secondsLeft };
  }
};
</script>

<style scoped lang="scss"></style>
