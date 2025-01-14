import { lazy } from "react";

const routerConfig = [
  { path: "/", component: lazy(() => import("@/pages/main/index")), layout:"default" },
];

export default routerConfig;  