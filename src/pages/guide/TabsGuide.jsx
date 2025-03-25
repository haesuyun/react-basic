import React, {useState} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/guide.module.scss";
import UiTabs from "@/components/Tabs";
import UiTab from "@/components/Tab";
// mui
import { 
  Tabs,
  Tab,
  Box,
} from '@mui/material';

function MuiTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
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
  const [value, setValue] = useState(0)
  const tabs01 = ['Tab01','Tab02','Tab03']
  const handleChange = (_,newValue) => {
    setValue(newValue);
  };
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
              {'value: '+value}
              <UiTabs value={value} 
                onChange={handleChange}>
                {tabs01.map((item,index)=>(
                  <UiTab key={index} 
                  label={item} 
                  />
                ))}
              </UiTabs>
              {value === 0 && <div>탭 1 내용</div>}
              {value === 1 && <div>탭 2 내용</div>}
              {value === 2 && <div>탭 3 내용</div>}
            </td>
          </tr>
          <tr>
            <th>label icon</th>
            <td></td>
            <td>
              <UiTabs value={value} 
                onChange={handleChange}>
                <UiTab label="Tab01"/>
                <UiTab label="Tab02"/>
                <UiTab>
                  Tab033
                  <i className={clsx("icon icon-small", value===2?"close-white":"arrow-black")} aria-label="이동"></i>
                </UiTab>
              </UiTabs>
            </td>
          </tr>
          <tr>
            <th>variant underline</th>
            <td></td>
            <td>
              <UiTabs value={value} 
                variant="underline"
                onChange={handleChange}>
                <UiTab label="Tab01"/>
                <UiTab label="Tab02"/>
                <UiTab label="Tab03"/>
              </UiTabs>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
