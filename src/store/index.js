import Vue from "vue";
import Vuex from "vuex";
import localForage from "localforage";
import VuexPersist from "vuex-persist";
import createWebSocketPlugin from "@/plugins/createWebSocketPlugin";
import administration from "./modules/administration";
import workspaces from "./modules/workspaces";
import settings from "./modules/settings";
import common from "./modules/common";
import start from "./modules/start";
import { wss_conn } from "@/api";

const debug = process.env.NODE_ENV !== "production";

const wsPlugin = createWebSocketPlugin(wss_conn);

Vue.use(Vuex);

const vuexStorage = new VuexPersist({
  key: "sourcelink",
  storage: localForage
});

export default new Vuex.Store({
  plugins: [vuexStorage.plugin].concat(debug ? [wsPlugin] : []),
  strict: debug,
  modules: {
    administration,
    workspaces,
    settings,
    common,
    start
  }
});
