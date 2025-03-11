import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from "@/components/RadioGroup";
import Radio from "@/components/Radio";


export default function RadioGuide() {
  const label = { 
    inputProps: { 
      'aria-label': 'radio demo'
    } 
  };
  const [value, setValue] = useState({
    radio01: 0,
    radio02: 0,
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

  const handleChange = (key, e) => {
    setValue((prev)=>({...prev, [key]:Number(e.target.value)}));
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
          <th>material radio</th>
          <td></td>
          <td>
            <MuiRadioGroup 
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              >
              <FormControlLabel value="female" control={<MuiRadio />} label="female" />
              <FormControlLabel value="male" control={<MuiRadio />} label="male" />
            </MuiRadioGroup>
          </td>
        </tr>
        <tr>
          <th>radio</th>
          <td></td>
          <td>
            <RadioGroup name='radio-button-group1' value={value.radio01} onChange={e=>handleChange('radio01',e)}>
              {
                options01.map((option,index)=>
                  <Radio key={index} {...option} value={index} />
                )
              }
            </RadioGroup>
            <p>Radio value: {value.radio01}</p>
          </td>
        </tr>
        <tr>
          <th>radio label</th>
          <td></td>
          <td>
            <RadioGroup name='radio-button-group2' value={value.radio02} onChange={e=>handleChange('radio02',e)}>
              {
                options02.map((option,index)=>
                  <Radio key={index} {...option} value={index} />
                )
              }
            </RadioGroup>
            <p>Radio value: {value.radio02}</p>
          </td>
        </tr>
      </tbody>
    </table>
    </section>
  )
}