import store from "@/store";

export default {
  path: "/add",
  name: "Add workspace",
  component: () => import("@/views/Add/Index.vue"),
  beforeEnter: (to, __, next) => {
    if (to.hash === "#type" || to.hash === "#channel") {
      if (store.state.newWorkspace.name.length) next();
      else next("/add#name");
    } else if (to.hash === "#invites") {
      if (store.state.newWorkspace.channelName.length) next();
      else next("/add#channel");
    } else if (to.hash === "#name" || to.hash === "#explore" || !to.hash) {
      next();
    } else {
      next("/add");
    }
  }
};
