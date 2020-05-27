import dayjs from "dayjs";
import decode from "jwt-decode";
import router from "@/router";
import * as API from "@/api";

const CONFIRM_CODE_LIVE_MIN = 5;

const state = {
  tokens: {
    token: null,
    refreshToken: null
  },
  confirmation: {
    email: null,
    code: null,
    expireAt: null
  },
  workspaces: []
};

const getters = {
  isLoggedIn: (store) => {
    try {
      decode(store.tokens.token);
      const { exp } = decode(store.tokens.refreshToken);
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

      // setTimeout(() => {
      //   commit("setConfirmationCode", null);

      //   router.push("/start#check");
      // }, CONFIRM_CODE_LIVE_PERIOD);
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

      router.push("/start");
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
  setWorkspaces: (state, workspaces) => (state.workspaces = workspaces),
  setConfirmationCode: (state, code) => {
    state.confirmationCode = code;

    if (code) {
      state.confirmationExpireAt = dayjs()
        .add(CONFIRM_CODE_LIVE_MIN, "min")
        .valueOf();
    } else {
      state.confirmationExpireAt = null;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
