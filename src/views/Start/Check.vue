<template>
  <div>
    <el-row type="flex" justify="center" align="middle">
      <h2>Enter your email</h2>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      We use simple authentication model, no login, no password,
      <br />just email which will be used for quick code confirmation.
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-input
        autofocus
        clearable
        autocomplete
        type="email"
        v-model="email"
        placeholder="name@work-email.com"
      ></el-input>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-button type="primary" @click="handleSend">Confirm</el-button>
    </el-row>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "AuthCheck",
  setup(_, ctx) {
    const email = ref("");

    const handleSend = () => {
      ctx.root.$store.dispatch("confirmEmail", email.value);
    };

    return { email, handleSend };
  }
};
</script>

<style scoped lang="scss"></style>
