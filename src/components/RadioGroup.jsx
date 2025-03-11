import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function RadioGroup({name, value, onChange, children}){
  return(
    <div role="radiogroup" className={clsx("radio-group", style.radioGroup)} aria-labelledby={`${name}-label`}>
      {React.Children.map(children, (child) => 
        React.isValidElement(child) && child.props?.value !== undefined // 유효한 React 요소인지 확인
        ? React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange,
          })
        : child // 일반 텍스트나 다른 요소 유지
      )}
    </div>
  )
}