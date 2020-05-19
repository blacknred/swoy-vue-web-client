import router from "@/router";
import * as API from "@/api";

const newWorkspaceFields = {
  name: "",
  isPublic: false,
  channelName: "",
  invites: []
};

const state = { ...newWorkspaceFields };

const getters = {};

const actions = {
  // work with new workspace
  setNewWorkspace: ({ commit }, data) => {
    if (data.name) {
      // check name uniqueness
      console.log(data.name);
    }

    commit("setNewWorkspace", data);
  },
  clearNewWorkspace: ({ commit }) => {
    commit("setNewWorkspace", { ...newWorkspaceFields });
  },
  createWorkspace: async ({ commit, state }) => {
    try {
      const { id } = await API.workspaces.createWorkspace(state);

      commit("setWorkspaces", { ...newWorkspaceFields });

      router.push(`/${id}`);
    } catch (e) {
      console.error(e);
    }
  }
};

const mutations = {
  setNewWorkspace: (state, data) => (state = { ...state, ...data })
};

export default {
  state,
  getters,
  actions,
  mutations
};
