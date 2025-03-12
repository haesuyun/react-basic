import React, { useState } from "react";
import Select from "@/components/Select";
import style from "@/assets/style/module/guide.module.scss";
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

export default function SelectGuide() {
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            <th>Material select</th>
            <td></td>
            <td>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <MuiSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
              </FormControl>
            </Box>
            </td>
          </tr>
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
