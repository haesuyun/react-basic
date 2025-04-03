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
        </tbody>
      </table>
    </section>
  );
}
