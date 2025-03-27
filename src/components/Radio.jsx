import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function Radio({
  className,
  label,
  value,
  name,
  inputProps,
  type,
  checked,
  onClick,
  onChange,
}){
  return(
    <div className={clsx("radio", style.radio, className, type==="button" && style.radioButton, checked && style.checked )}>
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
        {type !== "button" && <i className={clsx("icon", style.icon, checked?"check-circle":"check-circle-outline")}></i>}
        { label &&
          <p className={clsx("label", style.label)}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
