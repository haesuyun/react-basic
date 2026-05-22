import style from "@/assets/style/module/guide.module.scss";
import UiRadio from "@/components/Radio";
import UiRadioGroup from "@/components/RadioGroup";
import { useState } from "react";
// mui
import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

function MuiRadio(){
  return (
    <RadioGroup 
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      >
      <FormControlLabel value="female" control={<Radio />} label="female" />
      <FormControlLabel value="male" control={<Radio />} label="male" />
      <FormControlLabel value="other" control={<Radio />} label="other" disabled/>
    </RadioGroup>
  )
}

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Radio",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}

export default function RadioGuide() {
  const label = { 
    inputProps: { 
      'aria-label': 'radio demo'
    } 
  };
  const [value, setValue] = useState({
    radio01: 0,
    radio02: "Female",
    radio03: 0,
  });
  const options01 = [
    { inputProps: {'aria-label': '0'} },
    { inputProps: {'aria-label': '1'} },
    { inputProps: {'aria-label': '2'} },
  ];
  const options02 = [
    { label: "Female", value:"Female", inputProps: {'aria-label': 'radio female'} },
    { label: "Male", value:"Male", inputProps: {'aria-label': 'radio male'} },
    { label: "Disabled", value:"Other", inputProps: {'aria-label': 'radio other'}, disabled: true },
  ];
  const options03 = [
    { label: "남자"},
    { label: "여자"},
  ];
  const handleChange = (key) => (value) => {
    setValue((prev)=>({...prev, [key]:value}));
  };
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
          <th>material Radio</th>
          <td></td>
          <td>
            <MuiRadio/>
          </td>
        </tr>
        <tr>
          <th>radio</th>
          <td></td>
          <td>
            <UiRadioGroup name='radio-button-group1' value={value.radio01} onChange={handleChange('radio01')}>
              {
                options01.map((option,index)=>
                  <UiRadio key={index} {...option} />
                )
              }
            </UiRadioGroup>
            <p>Radio value: {value.radio01}</p>
          </td>
        </tr>
        <tr>
          <th>radio label</th>
          <td></td>
          <td>
            <UiRadioGroup label="Label" required name='radio-button-group2' value={value.radio02} onChange={handleChange('radio02')}>
              {
                options02.map((option,index)=>
                  <UiRadio key={index} {...option}/>
                )
              }
            </UiRadioGroup>
            <p>Radio value: {value.radio02}</p>
          </td>
        </tr>
        <tr>
          <th>variant check</th>
          <td></td>
          <td>
            <UiRadioGroup label="성별" required name='radio-button-group3' value={value.radio03} onChange={handleChange('radio03')}>
              {
                options03.map((option,index)=>
                  <UiRadio variant="check" key={index} {...option} />
                )
              }
            </UiRadioGroup>
          </td>
        </tr>
        <tr>
          <th>variant check</th>
          <td>large</td>
          <td>
            <UiRadioGroup label="성별" required name='radio-button-group3' value={value.radio03} onChange={handleChange('radio03')}>
              {
                options03.map((option,index)=>
                  <UiRadio variant="check" iconSize="large" key={index} {...option} />
                )
              }
            </UiRadioGroup>
          </td>
        </tr>
        <tr>
          <th>variant button</th>
          <td></td>
          <td>
            <UiRadioGroup label="성별" required name='radio-button-group3' value={value.radio03} onChange={handleChange('radio03')}>
              {
                options03.map((option,index)=>
                  <UiRadio variant="button" key={index} {...option} />
                )
              }
            </UiRadioGroup>
          </td>
        </tr>
      </tbody>
    </table>
    </section>
  )
}