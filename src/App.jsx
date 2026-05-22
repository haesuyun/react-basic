import { ColorSchemeProvider } from "@/context/ColorScheme";
import DefaultLayout from "@/layout/DefaultLayout";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/style/main.scss";
import { dynamicRoutes } from "./router"; // 동적 라우트 배열 가져오기
// mui theme
// import { useColorScheme } from "@mui/material";

function App() {
  return (
    <ColorSchemeProvider>
      <Suspense>
        <Router>
          <Routes>
            {dynamicRoutes.map((route, index) => {
              const layoutValue = route.layout || route.meta?.layout;
              const Layout = typeof layoutValue === "string"
                ? (layoutValue === "DefaultLayout" ? DefaultLayout : React.Fragment)
                : layoutValue || React.Fragment;
              const Component = route.element;

              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    Layout === React.Fragment ? (
                      <Component />
                    ) : (
                      <Layout meta={route.meta}>
                        <Component />
                      </Layout>
                    )
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </ColorSchemeProvider>
  );
}

export default App;