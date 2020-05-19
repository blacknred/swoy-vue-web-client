export default {
  path: "/settings",
  name: "Settings",
  component: () => import("@/views/Settings/Index.vue"),
  beforeEnter: (to, __, next) => {
    if (to.hash !== "#app" && to.hash !== "#profile") {
      next("/settings#app");
    } else {
      next();
    }
  }
};
