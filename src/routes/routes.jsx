import React from "react";
// src/routes/routes.js
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
// import Board from "@/components/Board";
// import TodoList from "@/components/TodoList";
// import BoardDone from "@/components/BoardDone";
// import SelectGuide from "@/components/SelectGuide";
// import DialogGuide from "@/components/DialogGuide";
// import TabsGuide from "@/components/TabsGuide";
// import TabsScrollGuide from "@/components/TabsScrollGuide";
// import Select from "@/components/Select";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("@/pages/guide/PageList")),
    exact: true, // 정확히 일치해야 렌더링
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/Board",
    component: React.lazy(() => import("@/components/Board")),
    meta: {
      depth01: "guide",
      depth02: "",
      depth03: "",
      id: "",
      name: "board",
      author: "",
      state: "진행중",
      createdDate: "",
      note: "",
    },
  },
  {
    path: "/TodoList",
    component: React.lazy(() => import("@/components/TodoList")),
    meta: {
      depth01: "guide",
      depth02: "",
      depth03: "",
      id: "",
      name: "todolist",
      author: "",
      state: "진행중",
      createdDate: "",
      note: "",
    },
  },
];

export default routes;
