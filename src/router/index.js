import Vue from "vue";
import Router from "vue-router";
import workspace from "./routes/workspace";
import create from "./routes/newWorkspace";
import settings from "./routes/settings";
import start from "./routes/start";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    start,
    create,
    settings,
    workspace,
    {
      path: "*",
      redirect: "/workspace"
    }
  ],
  scrollBehavior: (to, _, savedPosition) => {
    return new Promise(resolve => {
      // available only by the browser's back/forward buttons
      if (savedPosition) {
        resolve(savedPosition);
        return;
      }

      // scroll to #anchor
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
  console.log(to.path);
  if (!to.meta.guest && !store.getters.isLoggedIn) {
    console.log("not logged");
    next("/start/check");
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
