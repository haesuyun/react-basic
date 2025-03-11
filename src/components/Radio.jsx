import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function Radio({
  inputProps,
  label,
  value,
  name,
  checked,
  onClick,
  onChange,
  className
}){
  return(
    <div className={clsx("radio", style.radio, className)}>
      <label>
        <input 
          type="radio" 
          name={name} 
          {...inputProps} 
          value={value} 
          checked={checked}
          onClick={onClick}
          onChange={onChange}
          />
        <i className={clsx("icon", style.icon, checked?"checkbox-on":"checkbox-off")}></i>
        { label &&
          <p className={clsx("label", style.label)}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
