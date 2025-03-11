import React, { useState, useRef } from "react";
import Select from "@/components/Select";
import style from "@/assets/style/module/guide.module.scss";

export default function SelectGuide() {
  const [select, setSelect] = useState({
    value: 1,
    optionTitle: '주제를 선택하세요',
    options: [
      {
        id: 0,
        label: "국내주식 0",
      },
      {
        id: 1,
        label: "해외주식 1",
      },
      {
        id: 2,
        label: "부동산 2",
      },
      {
        id: 3,
        label: "가상자산 3",
      },
      {
        id: 4,
        label: "기타 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!",
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
                {...select}
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
