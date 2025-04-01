import React, {useState, useMemo} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/checkbox.module.scss"

export default function Checkbox({
  className,
  inputProps,
  checked,
  label,
  onChange,
  variant,
  iconSize,
}){
  // checked가 주어지지 않으면 내부 상태로 관리
  const [value, setValue] = useState(checked!==undefined ? checked : false)
  const handleChange = (e) => {
    // checked가 props로 제공되지 않은 경우 내부 상태 업데이트
    setValue(e.target.checked)
    // 부모에서 onChange가 제공되었다면 실행
    checked!==undefined ? onChange(e) : null
  }
  const getIcon = (isActive) => {
    switch (variant) {
      case "bookmark":
        return isActive ? "bookmark" : "bookmark-outline";
      case "heart":
        return isActive ? "heart" : "heart-outline";
      case "line":
        return isActive ? "check" : "check opacity-30";
      default:
        return isActive ? "check-circle" : "check-circle-outline";
    }
  };
  const activeIcon = useMemo(() => getIcon(true), [variant]);
  const inactiveIcon = useMemo(() => getIcon(false), [variant]);
  const iconSizeClass = iconSize ? `icon-${iconSize}` : "icon";
  return(
    <div className={clsx("checkbox", style.checkbox, className, style[variant], style[iconSize])}>
      <label>
        <input 
          type="checkbox" 
          {...inputProps} 
          checked={value} 
          onChange={(e) => handleChange(e)} />
        <i className={clsx(
          style.icon,
          value ? activeIcon : inactiveIcon,
          iconSizeClass)}></i>
          { label &&
          <p className={style.label}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
