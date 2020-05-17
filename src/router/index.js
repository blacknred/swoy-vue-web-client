import Vue from "vue";
import Router from "vue-router";
import administration from "./administration";
import workspaces from "./workspaces";
import settings from "./settings";
import profile from "./profile";
import start from "./start";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    start,
    profile,
    settings,
    administration,
    workspaces,
    {
      path: "*",
      redirect: to => {
        // if (store.)
        return to; //"/";
      }
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
  if (!to.meta.guest && !store.isAuthenticated) {
    next({ name: "Check" });
  } else if (store.redirectPreventionMessage) {
    next(false);
  } else {
    next();
  }
});

router.afterEach(() => {
  if (store.redirectPreventionMessage) {
    store.dispatch("common/clearRedirectPrevention");
  }
});

export default router;

// const isAuthenticated = () => {
//   const token = localStorage.getItem("token");
//   const refreshToken = localStorage.getItem("refreshToken");
//   try {
//     decode(token);
//     const { exp } = decode(refreshToken);
//     if (Date.now() / 1000 > exp) {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
//   return true;
// };
