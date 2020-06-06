export default {
  path: "/:workspaceId?",
  name: "Workspace",
  meta: { layout: "workspace" },
  component: () => import("@/views/Thread.vue")
};
