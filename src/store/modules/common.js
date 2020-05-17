import API from "@/api";

const CONFIRM_CODE_LIVE_PERIOD = 3600 * 5;

const state = {
  auth: {
    token: null,
    refreshToken: null,
    confirmationCode: null
  },
  isOffline: false,
  noTransitionMessage: null
};

const actions = {
  sendConfirmationCode: async ({ commit }, email) => {
    try {
      const data = await API.workspaces.sendAuthConfirmationCode(email);

      const { code } = await data.json();

      commit("setConfirmationCode", code);

      setTimeout(
        () => commit("setConfirmationCode", null),
        CONFIRM_CODE_LIVE_PERIOD
      );
    } catch (e) {
      console.error(e);
      commit("setConfirmationCode", null);
    }
  },
  getTokens: async ({ commit }, limit = 5) => {
    try {
      const tokens = API.workspaces.getTokens("email", limit);

      commit("setTokens", await tokens.json());
    } catch (e) {
      console.error(e);
    }
  }
};

const mutations = {
  setConfirmationCode: (state, code) => (state.auth.confirmationCode = code),
  setTokens: (state /*tokens*/) => (state.auth = { ...state.auth }),
  setOffline: (state, isOffline) => (state.isOffline = isOffline),
  addNoTransitionMessage: (state, mg) => (state.noTransitionMessage = mg),
  clearNoTransitionMessage: state => (state.noTransitionMessage = null)
};

export default {
  state,
  actions,
  mutations
};
