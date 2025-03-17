import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiRadio from "@/components/Radio";
import UiRadioGroup from "@/components/RadioGroup";
// mui
import { 
  Radio,
  RadioGroup,
  FormControlLabel,
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
    </RadioGroup>
  )
}

export default function RadioGuide() {
  const label = { 
    inputProps: { 
      'aria-label': 'radio demo'
    } 
  };
  const [value, setValue] = useState({
    radio01: 0,
    radio02: 0,
    radio03: 0,
  });
  const options01 = [
    { inputProps: {'aria-label': 'radio female'} },
    { inputProps: {'aria-label': 'radio male'} },
    { inputProps: {'aria-label': 'radio other'} },
  ];
  const options02 = [
    { label: "Female", inputProps: {'aria-label': 'radio female'} },
    { label: "Male", inputProps: {'aria-label': 'radio male'} },
    { label: "Other", inputProps: {'aria-label': 'radio other'} },
  ];
  const options03 = [
    { label: "남자"},
    { label: "여자"},
  ];
  const handleChange = (key, index) => {
    setValue((prev)=>({...prev, [key]:index}));
  };
  return (
    <section>
      <h1 className={style.h1}>Radio</h1><table className={style.table}>
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
            <UiRadioGroup name='radio-button-group1' value={value.radio01} onChange={index=>handleChange('radio01', index)}>
              {
                options01.map((option,index)=>
                  <UiRadio key={index} {...option} value={index} />
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
            <UiRadioGroup label="Label" required name='radio-button-group2' value={value.radio02} onChange={index=>handleChange('radio02', index)}>
              {
                options02.map((option,index)=>
                  <UiRadio key={index} {...option} value={index} />
                )
              }
            </UiRadioGroup>
            <p>Radio value: {value.radio02}</p>
          </td>
        </tr>
        <tr>
          <th>radio button</th>
          <td></td>
          <td>
            <UiRadioGroup label="성별" required name='radio-button-group3' value={value.radio03} onChange={index=>handleChange('radio03', index)}>
              {
                options03.map((option,index)=>
                  <UiRadio type="button" key={index} {...option} value={index} />
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