import administration from "./administration";
import workspace from "./workspace";
import create from "./newWorkspace";
import settings from "./settings";
import start from "./start";

export default [
  start,
  create,
  settings,
  administration,
  workspace,
  {
    path: "*",
    name: "Landing",
    meta: { guest: true, noHeader: true },
    component: () => import("@/views/Landing.vue")
  }
];
