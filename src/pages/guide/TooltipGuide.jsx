import React from "react";
import style from "@/assets/style/module/guide.module.scss";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
function MuiTooltip() {
  return <>
  <Tooltip title="Add" arrow placement="right">
    <Button variant="contained">
      Button
    </Button>
  </Tooltip>
    <p className="text-14">placement="
      <br />
      top-start,
      top,
      top-end,
      <br />
      left-start,
      left,
      left-end,
      <br />
      right-start,
      right,
      right-end,
      <br />
      bottom-start,
      bottom,
      bottom-end,
    "</p>
  </>
}
export default function TooltipGuide() {
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
            <th>material Tooltip</th>
            <td></td>
            <td>
              <MuiTooltip/>
            </td>
          </tr>
          <tr>
            <th>default</th>
            <td></td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}