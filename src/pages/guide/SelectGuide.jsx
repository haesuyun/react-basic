import React, { useState } from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiSelect from "@/components/Select";
// mui
import { 
  Box, 
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

function MuiSelect() {
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default function SelectGuide() {
  const [select, setSelect] = useState({
    label: "통신사 선택",
    placeholder: "통신사 선택",
    value: null,
    optionTitle: '통신사를 선택하세요',
    message: "접근성 키운영 적용",
    options: [
      {
        id: 0,
        label: "SKT",
      },
      {
        id: 1,
        label: "KT",
      },
      {
        id: 2,
        label: "LG U+",
      },
      {
        id: 3,
        label: "SKT 알뜰폰",
      },
      {
        id: 4,
        label: "기타 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!",
      },
    ],
  });
  return (
    <section>
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
            <th>Material select</th>
            <td></td>
            <td>
              <MuiSelect/>
            </td>
          </tr>
          <tr>
            <th>Default</th>
            <td></td>
            <td>
              <UiSelect
                {...select}
                onChange={(index) =>
                  setSelect((prev) => ({ ...prev, value: index }))
                }
              />
            </td>
          </tr>
          <tr>
            <th>Default error</th>
            <td></td>
            <td>
              <UiSelect
                {...select}
                error
                errorMessage="접근성 키운영 적용"
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
