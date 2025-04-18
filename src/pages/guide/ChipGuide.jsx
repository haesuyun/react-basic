import React from "react";
import style from "@/assets/style/module/guide.module.scss";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
function MuiChip() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  ) 
}
export default function ChipGuide() {
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
            <th>material Chip</th>
            <td></td>
            <td>
              <MuiChip/>
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