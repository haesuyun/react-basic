import React, { useState } from "react";
import clsx from "clsx";
import style from "@/assets/style/module/select.module.scss";
import Dialog from "@/components/Dialog";
import RadioGroup from "@/components/RadioGroup";
import Radio from "@/components/Radio";

export default function Select({ required, label, value, optionTitle, options, onChange }) {
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
    <>
      <div className={clsx("select-wrap", style.selectWrap)}>
        { label &&
          <p className={clsx("form-label", style.label)}>
            {label}{required && ' *'}
          </p>
        }
        <div className={clsx("select", style.select)}>
          <input
            type="text"
            readOnly
            value={options[selectedIndex]?.label||""}
            onClick={handleOpen}
            onKeyDown={handleOpen}
          ></input>
          <i className={clsx("icon down-black", style.icon)}></i>
        </div>
      </div>
      <Dialog
        type="bottomSheet"
        open={open}
        onClose={handleClose}
        title={optionTitle}
      >
        <RadioGroup className={style.radioGroup} name='option-radio-group' value={selectedIndex} onChange={handleSelect} onClick={handleSelect}>
          {
            options.map((option,index)=>
              <Radio key={index} {...option} value={index} className={style.radio}/>
            )
          }
        </RadioGroup>
      </Dialog>
    </>
  );
}
