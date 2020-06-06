<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <h1>{{ $t("enterEmail") }}</h1>
      <h4>{{ $t("authDescription") }}</h4>
      <br />
      <br />
      <el-form
        ref="form"
        :model="state.form"
        :rules="state.rules"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item prop="email">
          <el-input
            placeholder="name@work-email.com"
            v-model="state.form.email"
            autocomplete
            autofocus
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="!state.form.email || state.isLoading"
            :loading="state.isLoading"
            native-type="submit"
            @click="onSubmit"
            type="primary"
          >{{ $t("confirm") }}</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="#recovery">
            <el-button type="danger" plain>{{ $t("recovery") }}</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "@vue/composition-api";

export default {
  name: "AuthCheck",
  setup(_, ctx) {
    const { $store, $router } = ctx.root;
    const state = reactive({
      isLoading: false,
      form: { email: null },
      rules: {
        email: [
          {
            trigger: "submit",
            required: true,
            validator: (_, value, callback) => {
              if (value && !/\S+@\S+\.\S+/.test(value.trim().toLowerCase())) {
                callback(new Error(ctx.root.$t("invalidEmail")));
              } else {
                callback();
              }
            }
          }
        ]
      }
    });

    function onSubmit() {
      ctx.refs["form"].validate(async valid => {
        if (!valid) return false;

        state.isLoading = true;

        await $store.dispatch(
          "confirmEmail",
          state.form.email.trim().toLowerCase()
        );

        state.isLoading = false;
        $router.push({ hash: "#confirm" });
      });
    }

    return { state, onSubmit };
  }
};
</script>

<style scoped lang="scss">
.el-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
form {
  * {
    width: 350px;
  }
}
</style>
