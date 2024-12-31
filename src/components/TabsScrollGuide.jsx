import React, { useState, useRef, useEffect } from "react";
function Tabs(props) {
  const [value, setValue] = useState(props.value);
  const tabsRef = useRef(null);
  const tabsListRef = useRef(null);
  const tabPanelRefs = useRef([]);
  const onSelect = (index) => {
    setValue(index);
    props.onSelect(index);
    if (props.type === "scroll") {
      let top =
        tabPanelRefs.current[index].offsetTop -
        tabsListRef.current.offsetHeight -
        (props.headerRef ? props.headerRef.current.offsetHeight : 0);
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };
  // 특정 요소가 뷰포트에 들어왔는지 확인하는 함수
  const checkVisibility = () => {
    tabPanelRefs.current.forEach((panel, index) => {
      const rect = panel.getBoundingClientRect();
      const tabsListHeight = tabsListRef.current.offsetHeight;
      const headerHeight = props.headerRef
        ? props.headerRef.current.offsetHeight
        : 0;

      // 요소의 상단이 뷰포트의 중앙보다 위에 있고,
      // 요소의 하단이 뷰포트의 중앙보다 아래에 있는지 확인
      if (
        rect.top <=
          (window.innerHeight - (tabsListHeight + headerHeight)) / 2 &&
        rect.bottom >=
          (window.innerHeight - (tabsListHeight + headerHeight)) / 2
      ) {
        setValue(index);
      }
    });
  };

  useEffect(() => {
    if (props.type === "scroll" && tabPanelRefs.current.length > 0) {
      window.addEventListener("scroll", checkVisibility);
      checkVisibility(); // 초기 호출

      return () => {
        window.removeEventListener("scroll", checkVisibility);
      };
    }
  }, [props.type, props.headerRef]); // 필요한 의존성 추가
  return (
    <div ref={tabsRef} className={`tabs-area ${props.type || ""}`}>
      <div ref={tabsListRef} className="tabs-list">
        {props.items.map((item, index) => (
          <button
            key={index}
            type="button"
            className={value == index ? "active" : ""}
            onClick={() => onSelect(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {props.children.map((child, index) => (
        <div
          key={index}
          ref={(el) => (tabPanelRefs.current[index] = el)}
          className={`tab-panel ${value === index ? "active" : ""}`}
          aria-label={props.items[index].label}
        >
          {props.type === "scroll" ? child : index === value && child}
        </div>
      ))}
    </div>
  );
}
function TabsScrollGuide(props) {
  const tabList = [{ label: "Tab1" }, { label: "Tab2" }, { label: "Tab3" }];
  const [tabsValue, setTabsValue] = useState({
    tabs01: 0,
    tabs02: 0,
  });
  const showTabPanel = (label, index) => {
    setTabsValue((prev) => ({ ...prev, [label]: index }));
  };
  const temp = Array.from({ length: 100 });
  return (
    <div>
      <h2>type default</h2>
      <Tabs
        value={tabsValue.tabs02}
        items={tabList}
        onSelect={(index) => showTabPanel("tabs02", index)}
      >
        <div>tab1</div>
        <div>tab2</div>
        <div>tab3</div>
      </Tabs>
      <h2>type scroll</h2>
      <Tabs
        type="scroll"
        headerRef={props.headerRef}
        value={tabsValue.tabs01}
        items={tabList}
        onSelect={(index) => showTabPanel("tabs01", index)}
      >
        {tabList.map((tab, i) => (
          <div key={i}>
            {tab.label}
            {temp.map((item, index) => (
              <div key={index}>
                {item}
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            ))}
          </div>
        ))}
      </Tabs>
    </div>
  );
}
export default TabsScrollGuide;
