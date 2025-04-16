import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles"; // mui theme
import { CssBaseline } from "@mui/material";
import { theme } from "@/assets/style/theme"; // mui theme
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* 다크모드 설정 시 필요 */}
      <CssBaseline /> 
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
