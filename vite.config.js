import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr'; // SVG 파일을 React 컴포넌트로 변환하는 플러그인

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  server: {
    host: "0.0.0.0",
  },
  esbuild: {
    jsx: "automatic",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    devSourcemap: true,
    sourceMap: true,
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
  },
});
