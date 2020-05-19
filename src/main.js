import Vue from "vue";
import VueContentPlaceholders from "vue-content-placeholders";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "./plugins/i18n";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueContentPlaceholders);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
