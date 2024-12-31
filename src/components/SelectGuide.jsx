import React, { useState } from "react";
import Select from "./Select";

function SelectGuide({ containerRef }) {
  const [select, setSelect] = useState({
    value: 1,
    options: [
      {
        id: 0,
        label: "option0",
      },
      {
        id: 1,
        label: "option1",
      },
      {
        id: 2,
        label: "option2",
      },
      {
        id: 3,
        label: "option3",
      },
    ],
  });
  return (
    <Select
      containerRef={containerRef}
      value={select.value}
      options={select.options}
      onChange={(index) => setSelect((prev) => ({ ...prev, value: index }))}
    />
  );
}
export default SelectGuide;
