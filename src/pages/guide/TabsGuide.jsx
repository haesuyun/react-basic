import style from "@/assets/style/module/guide.module.scss";
import UiTab from "@/components/Tab";
import UiTabs from "@/components/Tabs";
import clsx from "clsx";
import { useState } from "react";
// mui
import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';
// theme
import { useColorScheme } from "@mui/material";

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

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Tabs",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}

export default function TabsGuide() {
  const [value, setValue] = useState(0)
  const tabs01 = ['Tab01','Tab02','Tab03']
  const handleChange = (_,newValue) => {
    setValue(newValue);
  };
  const [innerValue, setInnerValue] = useState(0)
  const handleInnerChange = (_,newValue) => {
    setInnerValue(newValue);
  };
  const { mode } = useColorScheme();
  const iconCheck = (value) => {
    let classList = null
    console.log('tab mode',mode)
    if (mode === 'dark') {
      classList = "check"
    }
    else {
      if (value === 2) {
        classList = "check-white"
      } else {
        classList = "check"
      }
    }
    return classList;
  }
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
                  <i className={clsx("icon", iconCheck(value))} aria-label="이동"></i>
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
              {value === 0 && <div>
                탭 1 내용
                <UiTabs value={innerValue} 
                  variant="rounded"
                  className="mt-4"
                  onChange={handleInnerChange}>
                  <UiTab label="Tab01"/>
                  <UiTab label="Tab02"/>
                  <UiTab label="Tab03"/>
                </UiTabs>
                {innerValue === 0 && <div>Inner Tab 1 내용</div>}
                {innerValue === 1 && <div>Inner Tab 2 내용</div>}
                {innerValue === 2 && <div>Inner Tab 3 내용</div>}
              </div>}
              {value === 1 && <div>탭 2 내용</div>}
              {value === 2 && <div>탭 3 내용</div>}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
