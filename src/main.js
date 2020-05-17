import Vue from "vue";
import VueContentPlaceholders from "vue-content-placeholders";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueContentPlaceholders);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
