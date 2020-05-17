import Vue from "vue";
import Router from "vue-router";
import workspaces from "./routes/workspace";
import settings from "./routes/settings";
import profile from "./routes/profile";
import start from "./routes/start";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    start,
    profile,
    settings,
    workspaces,
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior: (to, _, savedPosition) => {
    return new Promise(resolve => {
      if (savedPosition) {
        resolve(savedPosition);
        return;
      }

      setTimeout(() => {
        if (to.hash) {
          resolve({
            selector: to.hash,
            offset: { x: 0, y: 10 }
          });
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 500);
    });
  }
});

router.beforeEach((to, _, next) => {
  if (!to.meta.guest && !store.getters.isLoggedIn) {
    next({ name: "AuthCheck" });
  } else if (store.getters.isRedirectPrevented) {
    next(false);
  } else {
    next();
  }
});

router.afterEach(() => {
  if (store.isRedirectPrevented) {
    store.dispatch("common/clearRedirectPrevention");
  }
});

export default router;
