import "./assets/style/main.scss";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";
import { useColorScheme } from "@mui/material";

export default function App() {
  // 기본 로딩 다크모드
  const { mode, setMode } = useColorScheme();
  useEffect(() => { 
    document.body.classList?.remove('theme-dark')
    if(mode==='dark')document.body.classList.add('theme-'+mode)
  }, [mode])
  // 기본 모드 설정
  useEffect(() => {
    if (mode !== 'dark') {
      setMode('dark')
    }
  }, [])
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
