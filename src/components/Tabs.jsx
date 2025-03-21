import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/tabs.module.scss"

export default function Tabs({
  className,
  value, 
  onChange, 
  children,
}){
  return(
    <div role="tablist" className={clsx("tabs", style.tabs, className)}>
      {React.Children.map(children, (child,index) => 
        React.isValidElement(child) 
        ? 
        React.cloneElement(child, {
          tabValue: value,
          value: child.props.value ?? index, // 기존 value 유지, 없으면 index 사용
          onClick: (e) => onChange?.(e,child.props.value ?? index),
        })
        : child // 일반 텍스트나 다른 요소 유지
      )}
    </div>
  )
}