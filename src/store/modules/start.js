import API from "@/api";

const state = {
  workspaces: [],
  newWorkspace: {
    name: "",
    isPublic: false,
    channelName: "",
    invites: []
  }
};

const actions = {
  getAllWorkspaces: async ({ commit }, page = 1) => {
    try {
      const data = await API.workspaces.getWorkspaces(page);

      commit("setWorkspaces", await data.json());
    } catch (e) {
      console.error(e);
      commit("setWorkspaces", []);
    }
  }
};

const mutations = {
  setWorkspaces: (state, workspaces) => (state.workspaces = workspaces),
  setNewWorkspace: (state, { field, value }) => (state[field] = value)
};

export default {
  state,
  actions,
  mutations
};
