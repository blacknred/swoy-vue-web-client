export default {
  path: "/:workspaceId",
  name: "Profile",
  component: () => import("@views/Workspace.vue"),
};
