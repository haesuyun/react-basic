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

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Switch",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
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