import React, {useMemo} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function Radio({
  className,
  label,
  value,
  name,
  inputProps,
  variant,
  checked,
  onClick,
  onChange,
  iconSize,
}) {
  const getIcon = (isActive) => {
    switch (variant) {
      case "check":
        return isActive ? "check" : "check opacity-30";
      default:
        return isActive ? "radio" : "radio-outline";
    }
  };
  const activeIcon = useMemo(() => getIcon(true), [variant]);
  const inactiveIcon = useMemo(() => getIcon(false), [variant]);
  const iconSizeClass = iconSize ? `icon-${iconSize}` : "icon";
  return(
    <div className={clsx("radio", style.radio, className, style[variant], style[iconSize],
      checked && style.checked
    )}>
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
        {variant !== "button" &&
          <i className={clsx(
            style.icon,
            checked ? activeIcon : inactiveIcon,
            iconSizeClass)}></i>}
        { label &&
          <p className={clsx("label", style.label)}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
