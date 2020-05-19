import decode from "jwt-decode";
import router from "@/router";
import * as API from "@/api";

const CONFIRM_CODE_LIVE_PERIOD = 3600 * 5;

const state = {
  tokens: {
    token: null,
    refreshToken: null
  },
  confirmationCode: null,
  workspaces: []
};

const getters = {
  isLoggedIn: (store) => {
    try {
      decode(store.token);
      const { exp } = decode(store.refreshToken);
      if (Date.now() / 1000 > exp) {
        return false;
      }
    } catch (err) {
      return false;
    }
    return true;
  }
};

const actions = {
  // send confirmation code to email
  confirmEmail: async ({ commit }, email) => {
    try {
      const data = await API.workspaces.sendAuthConfirmationCode(email);

      const { code } = await data.json();

      commit("setConfirmationCode", code);

      router.push("/start#confirm");

      setTimeout(() => {
        commit("setConfirmationCode", null);

        router.push("/start#check");
      }, CONFIRM_CODE_LIVE_PERIOD);
    } catch (e) {
      console.error(e);
      commit("setConfirmationCode", null);
    }
  },
  // send email & check in db & return auth tokens
  getAuthTokens: async ({ commit }, email) => {
    try {
      const tokens = API.workspaces.getTokens(email);

      commit("setTokens", await tokens.json());

      router.push("/");
    } catch (e) {
      console.error(e);
    }
  },
  // clear auth tokens
  logout: async ({ commit }) => {
    commit("setTokens", {
      refreshToken: null,
      token: null
    });

    router.push("/");
  },
  // list all workspaces
  getAllWorkspaces: async ({ commit }, page = 1) => {
    try {
      const data = await API.workspaces.getAllWorkspaces(page);

      commit("setWorkspaces", await data.json());
    } catch (e) {
      console.error(e);
      commit("setWorkspaces", []);
    }
  }
};

const mutations = {
  setTokens: (state, tokens) => (state.tokens = tokens),
  setConfirmationCode: (state, code) => (state.confirmationCode = code),
  setWorkspaces: (state, workspaces) => (state.workspaces = workspaces)
};

export default {
  state,
  getters,
  actions,
  mutations
};
