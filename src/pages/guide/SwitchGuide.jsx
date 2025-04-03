import React from "react";
import style from "@/assets/style/module/guide.module.scss";
// mui
import Switch from '@mui/material/Switch';

function MuiSwitch() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </>
  )
}

export default function SwitchGuide() {
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
            <th>material Switch</th>
            <td></td>
            <td>
              <MuiSwitch/>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}