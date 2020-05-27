import store from "@/store";

export default {
  path: "/start",
  name: "Start",
  meta: { guest: true },
  component: () => import("@/views/Start/Index.vue"),
  beforeEnter: (to, __, next) => {
    if (to.hash === "#check" || to.hash === "#recovery") {
      if (store.getters.isLoggedIn) next("/start");
      else next();
    } else if (to.hash === "#confirm") {
      if (store.state.start.confirmationCode) next();
      else next("/start#check");
    } else if (!store.getters.isLoggedIn) {
      next("/start#check");
    } else if (to.hash === "#explore" || !to.hash) {
      next();
    } else {
      next("/start");
    }
  }
};
