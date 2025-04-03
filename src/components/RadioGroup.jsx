import React, {useId} from "react";
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
}) {
  const id = useId();
  return(
    <div className={clsx("radio-group", style.radioGroup, className)}>
      <UiFormLabel id={id} label={label} required={required}/>
      <div role="radiogroup" className={clsx("radio-box", style.radioBox)} aria-labelledby={id}>
        {React.Children.map(children, (child, index) => {
          if(!React.isValidElement(child)) return child;
          const childValue = child.props.value ?? index; // 값이 없으면 index 사용
          const isChecked = String(childValue) === String(value);
          return React.cloneElement(child, {
            name,
            value: childValue,
            checked: isChecked,
            onClick : (e)=> onClick?.(e.target.value),
            onChange : (e)=> onChange?.(e.target.value),
          })
        })}
      </div>
    </div>
  )
}