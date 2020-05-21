import Vue from "vue";
import ElementUI from "element-ui";
import VueContentPlaceholders from "vue-content-placeholders";
import i18n from "./plugins/i18n";
import "./registerServiceWorker";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "@/assets/styles/index.scss";

Vue.config.productionTip = false;

Vue.use(VueContentPlaceholders);

Vue.use(ElementUI, {
  i18n: (k, v) => i18n.t(k, v)
});

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App)
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
