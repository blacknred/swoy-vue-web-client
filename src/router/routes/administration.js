export default {
  path: "/admin/:workspace",
  name: "Administration",
  meta: { layout: "administration" },
  component: () => import("@/views/Administration.vue")
};
