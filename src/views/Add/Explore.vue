<template>
  <el-container>
    <el-header height="180px" class="__center">
      <h1>Explore Workspaces</h1>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="state.search">
            <el-checkbox-group slot="append" v-model="state.isPublic">
              <el-checkbox-button label="isPublic">Only public</el-checkbox-button>
            </el-checkbox-group>
          </el-input>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="__list">
      <el-row type="flex" justify="center">
        <el-col :span="9">
          <ul
            :infinite-scroll-disabled="isDisabled"
            infinite-scroll-delay="500"
            v-infinite-scroll="onLoad"
          >
            <transition name="slide-up-fade" appear v-for="(workspace, i) in workspaces" :key="i">
              <el-card shadow="hover">
                <el-row>
                  <el-col :span="5">
                    <el-image :src="workspace.logo" fit="contain" lazy />
                  </el-col>
                  <el-col :span="14">
                    {{workspace.name}}
                    <br />
                    {{workspace.description}}
                  </el-col>
                  <el-col :span="5">
                    <el-button type="primary" v-if="workspace.isPublic">join</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </transition>
          </ul>

          <content-placeholders v-show="state.isLoading">
            <div v-for="i in 4" :key="i">
              <content-placeholders-heading :img="true" />
              <content-placeholders-text :lines="2" />
              <br />
            </div>
          </content-placeholders>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { reactive, computed, watch } from "@vue/composition-api";

export default {
  name: "ExploreWorkspaces",
  setup(_, ctx) {
    const { $store } = ctx.root;
    const state = reactive({
      isLoading: false,
      isPublic: false,
      search: ""
    });

    const workspaces = computed(() => $store.state.add.workspaces);
    const isDisabled = computed(
      () => state.loading || $store.state.add.workspaces.length >= 50
    );

    const onLoad = async refetch => {
      state.isLoading = true;

      await $store.dispatch("getAllWorkspaces", {
        isPublic: state.isPublic || undefined,
        search: state.search,
        refetch
      });

      state.isLoading = false;
    };

    watch(
      () => state.search,
      () => onLoad(true)
    );

    watch(
      () => state.isPublic,
      () => onLoad(true)
    );

    return { state, workspaces, isDisabled, onLoad };
  }
};
</script>
