import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutDefault from "@/layouts/LayoutDefault";
import LayoutBlank from "@/layouts/LayoutBlank";
import routerConfig from "./routerConfig";

const layouts = {
  default: LayoutDefault,
  blank: LayoutBlank,
};

function RouterDefault() {
  return (
    <Routes>
      {routerConfig.map((route) => {
        const Layout = layouts[route.layout || "default"]; // 기본값은 'default'
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <route.component />
                </Suspense>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default RouterDefault;