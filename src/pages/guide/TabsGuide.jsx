import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
// mui
import { 
  Tabs,
  Tab,
  Box,
} from '@mui/material';

function MuiTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value={0} label="Item One" />
        <Tab value={1} label="Item Two" />
        <Tab value={2} label="Item Three" />
      </Tabs>
      <Box p={2}>
        {value === 0 && <div>탭 1 내용</div>}
        {value === 1 && <div>탭 2 내용</div>}
        {value === 2 && <div>탭 3 내용</div>}
      </Box>
    </Box>
  );
}

export default function TabsGuide() {
  return (
    <section>
      <h1 className={style.h1}>Tabs</h1>
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
            <th>material Tabs</th>
            <td></td>
            <td>
              <MuiTabs/>
            </td>
          </tr>
          <tr>
            <th>Default</th>
            <td></td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
