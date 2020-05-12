export default {
  path: "/start/:step",
  name: "Start",
  component: () => import("@views/Start.vue"),
  children: [
    {
      path: "#check",
      name: "Check",
      component: () => import("@views/Check.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "#confirm",
      name: "Confirm",
      component: () => import("@views/Confirm.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "#find",
      name: "Find",
      component: () => import("@views/Find.vue"),
    },
    {
      path: "#teamname",
      name: "Teamname",
      component: () => import("@views/TeamName.vue"),
    },
    {
      path: "#mode",
      name: "Mode",
      component: () => import("@views/Mode.vue"),
    },
    {
      path: "#channelname",
      name: "Channelname",
      component: () => import("@views/ChannelName.vue"),
    },
    {
      path: "#invites",
      name: "Invites",
      component: () => import("@views/Invites.vue"),
    },
    {
      path: "*",
      name: "Start",
      component: () => import("@views/Admin/ParametersBlock.vue"),
      meta: {
        // layout: "default",
      },
    },
  ],
};
