import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function Radio({
  inputProps,
  label,
  value,
  name,
  checked,
  onChange,
}){
  return(
    <div className={clsx("radio", style.radio)}>
      <label>
        <input 
          type="radio" 
          name={name} 
          {...inputProps} 
          value={value} 
          checked={checked}
          onChange={onChange}
          />
        <i className={clsx("icon", style.icon, checked?"checkbox-on":"checkbox-off")}></i>
        { label &&
          <p className={style.label}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
