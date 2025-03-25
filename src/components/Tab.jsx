import React, {useEffect, useState, useRef} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/tabs.module.scss"

export default function Tab({
  className,
  label,
  value,
  tabValue,
  children,
  onClick,
}){
  const [checked, setChecked] = useState(tabValue === value)
  useEffect(()=>{
    setChecked(tabValue === value)
  },[tabValue])
  return(
    <button
      tabIndex="0" 
      type="button" 
      role="tab" 
      aria-selected={checked}
      className={clsx(
      "tab", 
      style.tab, 
      className, 
      checked && style.checked )}
      onClick={(e)=>onClick(e)}
      >
        {label || children}
    </button>
  )
}
