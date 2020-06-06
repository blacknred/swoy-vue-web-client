// import store from "@/store";

export default {
  path: "/start",
  name: "Start",
  meta: { guest: true },
  component: () => import("@/views/Start/Index.vue")
  // beforeEnter: (to, __, next) => {
  //   to.meta.noHeader = true;
  //   console.log("from rout");

  //   if (store.getters.isLoggedIn) {
  //     next("/");
  //   } else if (to.hash === "#confirm") {
  //     if (store.state.start.confirmation.code) next();
  //     else next("/start#check");
  //   } else if (to.hash === "#check" || to.hash === "#recovery" || !to.hash) {
  //     next();
  //   } else next("/start");
  // }
};
