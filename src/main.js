import Vue from "vue";
import Router from "vue-router";
import ElementUI from "element-ui";
import VueCompositionApi from "@vue/composition-api";
import VueContentPlaceholders from "vue-content-placeholders";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "./plugins/i18n";
import "./registerServiceWorker";
import "@/assets/styles/index.scss";

Vue.config.productionTip = process.env.NODE_ENV === "production";

Vue.use(VueCompositionApi);

Vue.use(Router);

Vue.use(VueContentPlaceholders);

Vue.use(ElementUI, { i18n: (k, v) => i18n.t(k, v) });

// Vue.filter("time", (timestamp) => {
//   return new Date(timestamp).toLocaleTimeString();
// });

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");

/**
  elementUI components used in the project:

  Drawer
  Avatar
  InfiniteScroll
  Backtop
  Image
  Calendar
  Divider
  Timeline
  Collapse
  Carousel
  Card
  Popconfirm
  Popover
  Tooltip
  Dialog

  Steps
  Dropdown
  PageHeader
  Tabs
  NavMenu

  Notification
  MessageBox
  Message
  Loading
*/
