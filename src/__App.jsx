import "./assets/style/main.scss";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";
// ui theme
import { ColorSchemeProvider } from "@/context/ColorScheme"; 
// mui theme
// import { useColorScheme } from "@mui/material";

export default function App() {
  // mui theme (ui theme는 mui사용을 하지 않을때만 사용)
  // const { mode, setMode } = useColorScheme();
  // useEffect(() => { 
  //   document.body.classList?.remove('theme-dark')
  //   if(mode==='dark')document.body.classList.add('theme-'+mode)
  //   }, [mode])
  // mui 기본 모드 설정
  // useEffect(() => {
  //   if (mode !== 'dark') {
  //     setMode('dark')
  //   }
  // }, [])
  return (
  <ColorSchemeProvider>
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
  </ColorSchemeProvider>
  );
}
