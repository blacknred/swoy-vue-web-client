export default {
  path: "/:workspaceId?",
  name: "Workspace",
  meta: { layout: "workspaces" },
  component: () => import("@/views/Workspaces.vue")
};
