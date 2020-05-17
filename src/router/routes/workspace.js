export default {
  path: "/:workspaceId/:threadId?",
  name: "Workspace",
  component: () => import("@/views/Workspace/Workspace.vue"),
  children: [
    {
      path: "admin",
      name: "Administration",
      component: () => import("@/views/Workspace/Administration.vue")
    },
    {
      path: "*",
      name: "Threads",
      component: () => import("@/views/Workspace/Threads.vue")
    }
  ]
};
