import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/tabs.module.scss"

export default function Tabs({
  className,
  value, 
  onChange, 
  children,
  variant="standard"
}){
  return(
    <div role="tablist" className={clsx("tabs", style.tabs, className, style[variant])}>
      {React.Children.map(children, (child,index) => {
        if(!React.isValidElement(child)) return child;
        const childValue = child.props.value ?? index; // 값이 없으면 index 사용
        return React.cloneElement(child, {
          tabValue: value,
          value: childValue,
          onClick: (e) => onChange?.(e,childValue),
        })
      })}
    </div>
  )
}