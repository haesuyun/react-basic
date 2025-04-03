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
  const handleChange = (key) => (e) => {
    setChecked((prev)=>({...prev, [key]: e.target.checked}))
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
            <th>material Checkbox</th>
            <td></td>
            <td>
              <MuiCheckbox/>
            </td>
          </tr>
          <tr>
            <th>default</th>
            <td></td>
            <td>
              <UiCheckbox 
                {...label} 
              />
              <UiCheckbox 
                {...label} 
                label="본인인증 약관 전체 동의" 
              />
              <UiCheckbox 
                {...label} 
                checked={checked.checkbox01} 
                label={String(checked.checkbox01)} 
                onChange={handleChange('checkbox01')}/>
              <UiCheckbox 
                {...label} 
                checked={checked.checkbox02} 
                label={String(checked.checkbox02)} 
                onChange={handleChange('checkbox02')}/>
              <UiCheckbox 
                {...label} 
                checked={checked.checkbox03} 
                label="본인인증 약관 전체 동의 본인인증 약관 전체 동의 본인인증 약관 전체 동의 " 
                onChange={handleChange('checkbox03')}/>
            </td>
          </tr>
          <tr>
            <th>disabled</th>
            <td></td>
            <td>
              <UiCheckbox 
                disabled
                {...label} 
                />
              <UiCheckbox 
                disabled
                {...label} 
                label="본인인증 약관 전체 동의" 
              />
            </td>
          </tr>
          <tr>
            <th>line</th>
            <td></td>
            <td>
              <UiCheckbox 
                variant="line"
                {...label} 
              />
              <UiCheckbox 
                variant="line"
                {...label} 
                label="Line" 
              />
            </td>
          </tr>
          <tr>
            <th>bookmark</th>
            <td></td>
            <td>
              <UiCheckbox 
                variant="bookmark"
                {...label} 
              />
              <UiCheckbox 
                variant="bookmark"
                {...label} 
                label="1,000" 
              />
            </td>
          </tr>
          <tr>
            <th>heart</th>
            <td>default</td>
            <td>
              <UiCheckbox 
                variant="heart"
                {...label} 
              />
              <UiCheckbox 
                variant="heart"
                {...label} 
                label="1,000" 
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>large</td>
            <td>
              <UiCheckbox 
                  variant="heart"
                iconSize="large"
                {...label} 
                />
              <UiCheckbox 
                variant="heart"
                iconSize="large"
                {...label} 
                label="1,000" 
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>xlarge</td>
            <td>
              <UiCheckbox 
                  variant="heart"
                iconSize="xlarge"
                {...label} 
                />
              <UiCheckbox 
                variant="heart"
                iconSize="xlarge"
                {...label} 
                label="1,000" 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}