import dayjs from "dayjs";
import Languages from "@/locales";
import i18n from "@/plugins/i18n";

const supportedLanguages = Object.getOwnPropertyNames(Languages);

const state = {
  appColor: null,
  isSoundsOn: true,
  isNightMode: false,
  isAutoGifs: true,
  language: i18n.locale
};

const getters = {};

const actions = {
  setLanguage({ commit }, language) {
    if (!supportedLanguages.includes(language)) return;

    commit("setLanguage", language);

    i18n.locale = language;
    dayjs.locale(language);
  }
};

const mutations = {
  setLanguage: (state, language) => (state.language = language)
};

export default {
  state,
  getters,
  actions,
  mutations
};
