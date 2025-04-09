import "./assets/style/main.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";

export default function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout || React.Fragment; // 레이아웃이 없으면 Fragment 사용
            const Component = route.component;
            return (<Route
              key={index}
              path={route.path}
              element={
                Layout === React.Fragment ? (
                  <Component/>
                ) : (
                  <Layout meta={route.meta}>
                    <Component/>
                  </Layout>
                )
              }
            />)
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}
