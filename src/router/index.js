import { MessageBox } from "element-ui";
import Router from "vue-router";
import i18n from "@/plugins/i18n";
import routes from "./routes";
import store from "@/store";

async function beforeEach(to, _, next) {
  console.log(to.path);
  await store.restored;

  if (!to.meta.guest && !store.getters.isLoggedIn) {
    next("/start");
  } else if (store.state.warning) {
    MessageBox.confirm(store.state.warning, "", {
      confirmButtonText: i18n.t("proceed"),
      cancelButtonText: i18n.t("cancel"),
      type: "warning"
    })
      .then(() => next())
      .catch(() => next(false));
  } else {
    next();
  }
}

function afterEach() {
  if (store.state.warning) {
    store.commit("setWarning", null);
  }
}

function scrollBehavior(to, _, savedPosition) {
  return new Promise((resolve) => {
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

// prevent same route path redirection error
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    if (err.name != "NavigationDuplicated") {
      throw err;
    }
  });
};

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  scrollBehavior,
  routes
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
