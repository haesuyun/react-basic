import React, { useState, useRef } from "react";
import Select from "@/components/Select";
import style from "@/assets/style/module/guide.module.scss";

function SelectGuide() {
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
    <section>
      <h1 className={style.h1}>Select</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th className="text-center">type</th>
            <th>size</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td></td>
            <td>
              <Select
                value={select.value}
                options={select.options}
                onChange={(index) =>
                  setSelect((prev) => ({ ...prev, value: index }))
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default SelectGuide;
