import dayjs from "dayjs";
import decode from "jwt-decode";

import * as API from "@/api";

const CONFIRM_CODE_LIVE_MIN = 1.5;
const confirmationFields = {
  email: null,
  code: null,
  expireAt: null
};

const state = {
  tokens: {
    token: null,
    refreshToken: null
  },
  confirmation: { ...confirmationFields }
};

const getters = {
  isLoggedIn: (store) => {
    try {
      decode(store.tokens.token);
      const { exp } = decode(store.tokens.refreshToken);
      if (Date.now() / 1000 > exp) {
        return true;
      }
    } catch (err) {
      return false;
    }

    return true;
  }
};

const actions = {
  async confirmEmail({ commit }, email) {
    try {
      const { code } = await API.workspaces.sendAuthConfirmationCode(email);

      const expireAt = dayjs()
        .add(CONFIRM_CODE_LIVE_MIN, "minute")
        .valueOf();

      commit("setConfirmation", {
        expireAt,
        email,
        code
      });
    } catch (e) {
      commit("setNotification", [e?.message, 1]);
    }
  },
  async getAuthTokens({ commit }, email) {
    try {
      commit("setConfirmation", null);

      const tokens = await API.workspaces.getAuthTokens(email);

      commit("setTokens", tokens);
    } catch (e) {
      commit("setNotification", [e?.message, 1]);
    }
  },
  logout({ commit }) {
    commit("setTokens", {
      refreshToken: null,
      token: null
    });
  }
};

const mutations = {
  setTokens: (state, tokens) => (state.tokens = tokens),
  setConfirmation: (state, data) =>
    (state.confirmation = data || { ...confirmationFields })
};

export default {
  state,
  getters,
  actions,
  mutations
};
