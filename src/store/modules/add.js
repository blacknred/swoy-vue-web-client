import * as API from "@/api";

const newWorkspaceFields = {
  isPublic: false,
  channelName: "",
  invites: [],
  name: ""
};

const state = { newWorkspace: { ...newWorkspaceFields }, workspaces: [] };

const getters = {};

const actions = {
  setNewWorkspaceData: ({ commit }, data) => {
    if (data.name) {
      // check name uniqueness
      console.log(data.name);
    }

    commit("setNewWorkspaceData", data);
  },
  clearNewWorkspace: ({ commit }) => {
    commit("setNewWorkspaceData", { ...newWorkspaceFields });
  },
  createWorkspace: async ({ commit, state }) => {
    try {
      const { id } = await API.workspaces.createWorkspace(state);

      commit("setNewWorkspaceData", { ...newWorkspaceFields });

      return id;
    } catch (e) {
      commit("setNotification", [e?.message, 1]);
    }
  },
  async getAllWorkspaces({ commit }, page = 1) {
    try {
      const data = await API.workspaces.getAllWorkspaces(page);

      commit("setWorkspaces", data);
    } catch (e) {
      commit("setNotification", [e?.message, 1]);
    }
  }
};

const mutations = {
  setNewWorkspaceData: (state, data) =>
    (state.newWorkspace = { ...state.newWorkspace, ...data }),
  setWorkspaces: (state, workspaces) => (state.workspaces = workspaces)
};

export default {
  state,
  getters,
  actions,
  mutations
};
