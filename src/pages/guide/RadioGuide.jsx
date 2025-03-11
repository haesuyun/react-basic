import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from "@/components/Radio";


function RadioGuide() {
  const label = { 
    inputProps: { 
      'aria-label': 'Checkbox demo'
    } 
  };
  const [checked, setChecked] = useState({
    checkbox01: true,
    checkbox02: false,
    checkbox03: false,
  })
  const handleChange = (key,e) => {
    setChecked((prev)=>({...prev, [key]: e.target.checked}))
  }
  return (
    <section>
      <h1 className={style.h1}>Form</h1><table className={style.table}>
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
            <Radio name="radio-button-group" value="female"/>
            <Radio name="radio-button-group" value="male"/>
          </td>
        </tr>
      </tbody>
    </table>
    </section>
  )
}
export default RadioGuide;