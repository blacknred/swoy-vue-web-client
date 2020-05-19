import store from "@/store";

export default {
  path: "/create",
  name: "New workspace",
  component: () => import("@/views/NewWorkspace/Index.vue"),
  beforeEnter: (to, __, next) => {
    if (to.hash === "#type" || to.hash === "#channel") {
      if (store.state.newWorkspace.name.length) next();
      else next("/create#name");
    } else if (to.hash === "#invites") {
      if (store.state.newWorkspace.channelName.length) next();
      else next("/create#channel");
    } else if (to.hash === "#name") {
      next();
    } else {
      next("/create#invites");
    }
  }
};
