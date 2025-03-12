import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiCheckbox from "@/components/Checkbox";
// mui
import { 
  Checkbox, 
  FormControlLabel 
} from '@mui/material';

function MuiCheckbox(){
  const label = { 
    inputProps: { 
      'aria-label': 'Checkbox demo'
    } 
  };
  return (
    <>
      <Checkbox {...label} defaultChecked />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </>
  )
}

export default function CheckboxGuide() {
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
      <h1 className={style.h1}>Checkbox</h1><table className={style.table}>
      <thead>
        <tr>
          <th className="text-center">type</th>
          <th>size</th>
          <th>view</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>material checkbox</th>
          <td></td>
          <td>
            <MuiCheckbox/>
          </td>
        </tr>
        <tr>
          <th>checkbox</th>
          <td></td>
          <td>
            <UiCheckbox 
              {...label} 
            />
            <UiCheckbox 
              {...label} 
              label="Label" 
            />
            <UiCheckbox 
              {...label} 
              checked={checked.checkbox01} 
              label={String(checked.checkbox01)} 
              onChange={e=>handleChange('checkbox01',e)}/>
            <UiCheckbox 
              {...label} 
              checked={checked.checkbox02} 
              label={String(checked.checkbox02)} 
              onChange={e=>handleChange('checkbox02',e)}/>
            <UiCheckbox 
              {...label} 
              checked={checked.checkbox03} 
              label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos?" 
              onChange={e=>handleChange('checkbox03',e)}/>
          </td>
        </tr>
      </tbody>
    </table>
    </section>
  )
}