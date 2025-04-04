import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/accordion.module.scss"

export default function AccordionGroup({
  className,
  value, 
  onChange, 
  children,
}) {
  const handleChange = (e, index) => {
    onChange?.(index);
  }
  return(
    <div className={clsx("accordion-group", style.accordionGroup, className)}>
      {React.Children.map(children, (child,index) => {
        if(!React.isValidElement(child)) return child;
        const isExpanded = value === index;
        return React.cloneElement(child, {
          expanded: isExpanded,
          onChange: (e) => handleChange(e, index),
        })
      })}
    </div>
  )
}