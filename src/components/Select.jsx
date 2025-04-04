import React, { useState, useId } from "react";
import clsx from "clsx";
import style from "@/assets/style/module/select.module.scss";
import UiFormLabel from "@/components/FormLabel"
import Dialog from "@/components/Dialog";
import UiRadioGroup from "@/components/RadioGroup";
import UiRadio from "@/components/Radio";

export default function Select({ 
  className, 
  required, 
  label, 
  value, 
  placeholder,
  optionTitle, 
  options, 
  onChange 
}) {
  const id = useId();
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
      <div className={clsx("select-wrap", style.selectWrap, className)}>
        <UiFormLabel label={label} htmlFor={id} required={required}/>
        <div className={clsx("select", style.select)}>
          <input
            id={id}
            type="text"
            readOnly
            value={options[selectedIndex]?.label || ""}
            placeholder={placeholder}
            onClick={handleOpen}
            onKeyDown={handleOpen}
          ></input>
          <i className={clsx("icon-large down", style.icon)}></i>
        </div>
      </div>
      <Dialog
        type="bottomSheet"
        open={open}
        onClose={handleClose}
        title={optionTitle}
      >
        <UiRadioGroup className={style.radioGroup} name='option-radio-group' value={selectedIndex} onChange={handleSelect} onClick={handleSelect}>
          {
            options.map((option,index)=>
              <UiRadio key={index} {...option} value={index} className={style.radio} variant="check"/>
            )
          }
        </UiRadioGroup>
      </Dialog>
    </>
  );
}
