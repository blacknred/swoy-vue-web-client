import Vue from "vue";
import Vuex from "vuex";
import localForage from "localforage";
import VuexPersist from "vuex-persist";
import administration from "./modules/administration";
import workspaces from "./modules/workspaces";
import restorePlugin from "@/plugins/reStore";
import offlinePligin from "@/plugins/offline";
import settings from "./modules/settings";
import add from "./modules/add";
import start from "./modules/start";
import i18n from "@/plugins/i18n";
// import { wss_conn } from "@/api";
// const wsPlugin = createWebSocketPlugin(wss_conn);

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const vuexStorage = new VuexPersist({
  key: "swoy",
  storage: localForage,
  asyncStorage: true,
  reducer: (state) =>
    Object.assign({}, state, {
      add: { newWorkspace: undefined },
      notification: undefined
    })
});
// {
//   isOffline: state.isOffline,
//     warning: state.warning,
//     add: { workspaces : state.add.workspaces },
//     settings: state.settings,
//     workspaces: state.workspaces,
// }

export default new Vuex.Store({
  plugins: [vuexStorage.plugin, restorePlugin, offlinePligin].concat(
    debug ? [] : []
  ),
  strict: debug,
  state: {
    isOffline: false,
    notification: null,
    warning: null
  },
  getters: {
    isRedirectPrevented: (store) => store.warning
  },
  actions: {
    setOffline: ({ commit }, isOffline) => {
      const message = i18n.t(isOffline ? "offline" : "online");
      commit("setOffline", isOffline);
      commit("setNotification", [message, isOffline]);
    }
  },
  mutations: {
    setOffline: (state, isOffline) => (state.isOffline = isOffline),
    setWarning: (state, message) => (state.warning = message),
    setNotification: (state, notification) => {
      state.notification = {
        type: notification[1] ? "error" : "success",
        message: notification[0]
      };
    }
  },
  modules: {
    administration,
    workspaces,
    settings,
    start,
    add
  }
});
