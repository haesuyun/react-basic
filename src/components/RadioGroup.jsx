import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"
import UiFormLabel from "@/components/FormLabel"

export default function RadioGroup({
  className,
  label,
  required,
  name, 
  value, 
  onChange, 
  onClick, 
  children, 
}){
  return(
    <div role="radiogroup" className={clsx("radio-group", style.radioGroup, className)} aria-labelledby={`${name}-label`}>
      <UiFormLabel label={label} required={required}/>
      <div className={clsx("radio-box", style.radioBox)}>
        {React.Children.map(children, (child) => 
          React.isValidElement(child) && child.props?.value !== undefined // 유효한 React 요소인지 확인
          ? React.cloneElement(child, {
              name,
              checked: child.props.value === value,
              onClick : (e)=> onClick?.(Number(e.target.value)),
              onChange : (e)=> onChange(Number(e.target.value)),
            })
          : child // 일반 텍스트나 다른 요소 유지
        )}
      </div>
    </div>
  )
}