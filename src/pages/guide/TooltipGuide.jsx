import style from "@/assets/style/module/guide.module.scss";
import UiTooltip from "@/components/Tooltip";
import { useState } from "react";
// mui
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip from '@mui/material/Tooltip';
function MuiTooltip() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (<>
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Add"
        slotProps={{
          popper: {
            disablePortal: true,
          },
        }}
        arrow
        placement="right">
        <Button onClick={handleTooltipOpen} variant="contained">
          Button
        </Button>
      </Tooltip>
    </ClickAwayListener>
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
  </>)
}

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Tooltip",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}

export default function TooltipGuide() {
  const [open, setOpen] = useState(false)
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
              {String(open)}
              <UiTooltip open={open} onChange={e => setOpen(e)}  title="title" content={ 
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sed.</div>
              }>
                <button type="button" className="button bg-primary">
                  Button
                </button>
              </UiTooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}