import store from "@/store";

export default {
  path: "/start",
  name: "Start",
  component: () => import("@/views/Start/Index.vue"),
  children: [
    {
      path: "check",
      name: "AuthCheck",
      component: () => import("@/views/Start/Check.vue"),
      beforeEnter: (_, __, next) => {
        if (store.getters.isLoggedIn) next("/start");
        else next();
      },
      meta: {
        guest: true
      }
    },
    {
      path: "confirm",
      name: "AuthConfirm",
      component: () => import("@/views/Start/Confirm.vue"),
      beforeEnter: (_, __, next) => {
        if (store.state.start.confirmationCode) next();
        else next({ name: "AuthCheck" });
      },
      meta: {
        guest: true
      }
    },
    {
      path: "explore",
      name: "Workspaces",
      component: () => import("@/views/Start/Workspaces.vue")
    },
    {
      path: "*",
      redirect: "/start"
    }
  ]
};
