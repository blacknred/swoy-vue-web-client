const state = {
  isOffline: false,
  notifications: [],
  noRedirectMessage: null,
  isWorkspaceListOpen: false,
  isChannelListOpen: false
};

const getters = {
  isRedirectPrevented: store =>
    store.noRedirectMessage && store.noRedirectMessage.length
};

const actions = {
  setRedirectPrevention: ({ commit }, message) => {
    commit("setNoRedirectMessage", message);
  },
  clearRedirectPrevention: ({ commit }) => {
    commit("setNoRedirectMessage", null);
  }
};

const mutations = {
  setOffline: (state, isOffline) => (state.isOffline = isOffline),
  setNoRedirectMessage: (state, message) => (state.noRedirectMessage = message)
};

export default {
  state,
  getters,
  actions,
  mutations
};
