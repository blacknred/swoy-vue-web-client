import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import start from "./start";
import workspaces from "./workspaces";
import administration from "./administration";
import profile from "./profile";
import settings from "./settings";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    start,
    profile,
    settings,
    administration,
    workspaces,
    {
      path: "*",
      redirect: to => {
        return "/";
      }
    },
  ],
  scrollBehavior: (to, _, savedPosition) => {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition);
        return;
      }

      setTimeout(() => {
        if (to.hash) {
          resolve({
            selector: to.hash,
            offset: { x: 0, y: 10 },
          });
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 500);
    });
  },
});

router.beforeEach((to, _, next) => {
  if (!to.meta.guest && !store.isAuthenticated) next({ name: "Check" });
  else if (store.prevented) next(false);
  else next();
});

router.afterEach(() => {
  // if (store.prevented) clearPrevention;
});

export default router;
