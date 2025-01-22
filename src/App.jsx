import "./assets/style/main.scss";
import React, { Suspense, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";

import TodoList from "./components/TodoList";
import Board from "./components/Board";
import BoardDone from "./components/BoardDone";
import SelectGuide from "./components/SelectGuide";
import DialogGuide from "./components/DialogGuide";
import TabsGuide from "./components/TabsGuide";
import TabsScrollGuide from "./components/TabsScrollGuide";
import Select from "./components/Select";
function Header({ nav, headerRef, containerRef, onChange }) {
  return (
    <header ref={headerRef}>
      <h1>React Vanilla UI</h1>
      <Select
        value={nav.value}
        options={nav.options}
        onChange={onChange}
        containerRef={containerRef}
      />
    </header>
  );
}
function Container({ containerRef, nav, children }) {
  return (
    <section ref={containerRef} className="container">
      <h1>{nav.options[nav.value].label}</h1>
      {children[nav.value]}
    </section>
  );
}
export default function App() {
  const headerRef = useRef();
  const containerRef = useRef();
  const [nav, setNav] = useState({
    value: 3,
    options: [
      {
        label: "Tabs",
      },
      {
        label: "Dialog",
      },
      {
        label: "Select",
      },
      {
        label: "Board",
      },
      {
        label: "Board Done",
      },
      {
        label: "Todo List",
      },
      {
        label: "Tabs Scroll",
      },
    ],
  });
  const handleNavChange = (index) => {
    console.log(index);
    setNav((prev) => ({ ...prev, value: index }));
  };
  const temp = Array.from({ length: 0 });
  return (
    <Router>
      <Suspense>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
    // <main>
    //   <Header
    //     headerRef={headerRef}
    //     containerRef={containerRef}
    //     nav={nav}
    //     onChange={handleNavChange}
    //   ></Header>
    //   <Container containerRef={containerRef} nav={nav}>
    //     <TabsGuide />
    //     <DialogGuide />
    //     <SelectGuide containerRef={containerRef} />
    //     <Board />
    //     <BoardDone />
    //     <TodoList />
    //     <TabsScrollGuide headerRef={headerRef} />
    //   </Container>

    //   {temp.map((item, index) => (
    //     <div key={index}>
    //       {item}
    //       lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //     </div>
    //   ))}
    // </main>
  );
}
