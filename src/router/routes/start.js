import store from "@/store";

export default {
  path: "/start/:step",
  name: "Start",
  component: () => import("@/views/Start.vue"),
  children: [
    {
      path: "#check",
      name: "AuthCheck",
      component: () => import("@/views/Auth/Check.vue"),
      meta: {
        guest: true
      }
    },
    {
      path: "#confirm",
      name: "AuthConfirm",
      component: () => import("@/views/Auth/Confirm.vue"),
      beforeEnter: (_, __, next) => {
        if (store.confirmationCode) next();
        else next({ name: "AuthCheck" });
      },
      meta: {
        guest: true
      }
    },
    {
      path: "#find",
      name: "Workspaces",
      component: () => import("@/views/Workspaces.vue")
    },
    {
      path: "#name",
      name: "NewWorkspaceName",
      component: () => import("@/views/NewWorkspace/Name.vue")
    },
    {
      path: "#type",
      name: "NewWorkspaceType",
      component: () => import("@/views/NewWorkspace/Type.vue"),
      beforeEnter: (_, __, next) => {
        if (store.newWorkspace.name.length) next();
        else next({ name: "NewWorkspaceName" });
      }
    },
    {
      path: "#channelname",
      name: "NewWorkspaceChannelname",
      component: () => import("@/views/NewWorkspace/ChannelName.vue"),
      beforeEnter: (_, __, next) => {
        if (store.newWorkspace.name.length) next();
        else next({ name: "NewWorkspaceName" });
      }
    },
    {
      path: "#invites",
      name: "NewWorkspaceInvites",
      component: () => import("@/views/NewWorkspace/Invites.vue"),
      beforeEnter: (_, __, next) => {
        if (store.newWorkspace.channelName.length) next();
        else next({ name: "NewWorkspaceChannelname" });
      }
    },
    {
      path: "*",
      name: "Start",
      component: () => import("@/views/Start.vue")
    }
  ]
};
