import React, { useState } from "react";
import clsx from "clsx";
import Dialog from "@/components/Dialog";
import style from "@/assets/style/module/select.module.scss";

function OptionsList({ value, options, onCheck }) {
  return (
    <ul className={style.optionList}>
      {options.map((item, index) => (
        <li
          key={index}
          className={clsx({[style.active]: value === index})}
          onClick={() => onCheck(index)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
export default function Select({ value, options, onChange }) {
  const [selectedIndex, setSelectedIndex] = useState(value);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    onChange?.(index);
    handleClose();
  };
  return (
    <div className={style.select}>
      <input
        type="text"
        readOnly
        value={options[selectedIndex]?.label||""}
        onClick={handleOpen}
        onKeyDown={handleOpen}
      ></input>
      <i className={clsx("icon down-black", style.icon)}></i>
      <Dialog
        type="bottomSheet"
        open={open}
        onClose={handleClose}
        title="option title"
      >
        <OptionsList value={selectedIndex} options={options} onCheck={handleSelect} />
      </Dialog>
    </div>
  );
}
