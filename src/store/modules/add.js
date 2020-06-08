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
  clearNewWorkspaceData: ({ commit }) => {
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
  async getAllWorkspaces({ commit, state }, { search, isPublic, refetch }) {
    try {
      if (refetch) commit("clearWorkspaces");

      const page = state.workspaces / 5;
      const data = await API.workspaces.getAllWorkspaces({
        isPublic,
        search,
        page
      });

      commit("setWorkspaces", data);
    } catch (e) {
      commit("setNotification", [e?.message, 1]);
    }
  }
};

const mutations = {
  setNewWorkspaceData: (state, data) =>
    (state.newWorkspace = { ...state.newWorkspace, ...data }),
  clearWorkspaces: (state) => (state.workspaces = []),
  setWorkspaces: (state, workspaces) => state.workspaces.push(...workspaces)
};

export default {
  state,
  getters,
  actions,
  mutations
};
