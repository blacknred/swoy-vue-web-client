export default {
  path: "/start",
  name: "Start",
  meta: { guest: true },
  component: () => import("@/views/Start/Index.vue")
};
