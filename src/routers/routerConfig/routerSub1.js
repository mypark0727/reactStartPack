import { lazy } from "react";

const routerConfig = [
  { path: "/sub1", component: lazy(() => import("@/pages/sub1/index")) },
];

export default routerConfig;  