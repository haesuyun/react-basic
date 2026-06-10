import style from "@/assets/style/module/select.module.scss";
import UiDialog from "@/components/Dialog";
import UiFormLabel from "@/components/FormLabel";
import UiFormMessage from "@/components/FormMessage";
import UiIcon from "@/components/Icon";
import UiRadio from "@/components/Radio";
import UiRadioGroup from "@/components/RadioGroup";
import clsx from "clsx";
import { useId, useState } from "react";

export default function Select({ 
  className, 
  required, 
  label, 
  value, 
  placeholder,
  optionTitle, 
  options, 
  onChange,
  error,
  message,
  errorMessage,
}) {
  const id = useId();
  const [selectedIndex, setSelectedIndex] = useState(value);
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    if (!open) {
      e.preventDefault();
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    onChange?.(index);
  };
  return (
    <>
      <div className={clsx("select-wrap", style.selectWrap, className, error && style.error)}>
        <UiFormLabel label={label} htmlFor={id} required={required}/>
        <div className={clsx("select", style.select)}>
          <input
            id={id}
            type="text"
            readOnly
            value={options[selectedIndex]?.label || ""}
            placeholder={placeholder}
            onClick={handleOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { 
                handleOpen(e)
              }
            }}
          ></input>
          <UiIcon icon="down" size="large" className={clsx(style.icon)} />
        </div>
        <UiFormMessage message={message} errorMessage={errorMessage}/>
      </div>
      <UiDialog
        bottomSheet
        open={open}
        onClose={handleClose}
        title={optionTitle}
      >
        <UiRadioGroup
          className={style.radioGroup}
          name='option-radio-group'
          value={selectedIndex}
          onChange={handleSelect}
          onKeyDown={handleClose}
          onMouseDown={(index) => {handleSelect(index); handleClose()}}
        >
          {
            options.map((option,index)=>
              <UiRadio key={index} {...option} value={index} className={style.radio} variant="check"/>
            )
          }
        </UiRadioGroup>
      </UiDialog>
    </>
  );
}
