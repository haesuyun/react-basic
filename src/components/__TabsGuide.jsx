import React, { useState } from "react";
function Tabs({ type, items, value, children, onSelect }) {
  return (
    <div className={`tabs-area ${type || ""}`}>
      <div className="tabs-list">
        {items.map((item, index) => (
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
      {items.map(
        (item, index) =>
          value == index && (
            <div key={index} className="tab-panel" aria-label={item.label}>
              {children[index]}
            </div>
          ),
      )}
    </div>
  );
}
function TabsGuide() {
  const tabList = [{ label: "Tab1" }, { label: "Tab2" }, { label: "Tab3" }];
  const [tabsValue, setTabsValue] = useState({
    tabs01: 0,
    tabs02: 0,
  });
  const showTabPanel = (label, index) => {
    setTabsValue((prev) => ({ ...prev, [label]: index }));
  };
  const temp = Array.from({ length: 10 });
  return (
    <div>
      <h2>type default</h2>
      <Tabs
        value={tabsValue.tabs01}
        items={tabList}
        onSelect={(index) => showTabPanel("tabs01", index)}
      >
        <div>tab1</div>
        <div>tab2</div>
        <div>tab3</div>
      </Tabs>
      <h2>type full-width</h2>
      <Tabs
        type="full-width"
        value={tabsValue.tabs02}
        items={tabList}
        onSelect={(index) => showTabPanel("tabs02", index)}
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
export default TabsGuide;
