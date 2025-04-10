import React, { useMemo, useRef, useState } from "react";
import { useLastInputType } from "@/hooks/";
import clsx from "clsx";
import style from "@/assets/style/module/radio.module.scss"

export default function Radio({
  className,
  label,
  value,
  name,
  disabled = false,
  inputProps,
  variant,
  checked,
  onClick,
  onChange,
  onKeyDown,
  onMouseDown,
  iconSize,
}) {
  const inputRef = useRef(null);
  // icon
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
  // icon size
  const iconSizeClass = iconSize ? `icon-${iconSize}` : "icon";
  // focus
  const [isFocused, setIsFocused] = useState(false);
  const lastInputType = useLastInputType();
  return(
    <div className={clsx("radio", style.radio,
      className,
      style[variant],
      style[iconSize],
      checked && style.checked,
      disabled && style.disabled,
      isFocused && style.focus
    )}>
      <label
        onMouseDown={() => {
          onMouseDown?.(inputRef.current.value);
        }} // mouse click 으로만 실행됨, onClick, onChange 실행되지 않음 
        >
        <input 
          ref={inputRef}
          type="radio" 
          name={name} 
          disabled={disabled}
          {...inputProps} 
          value={value} 
          checked={checked}
          onChange={onChange}
          onClick={onClick}
          onKeyDown={(e) => { // 키보드 enter 추가, onKeyDown 시 onClick, onChange가 같이 실행 됨
            if (e.key === 'Enter' || e.key === ' ') { 
              e.preventDefault();
              onKeyDown?.(e);
            }
          }}
          onFocus={() => {
            if (lastInputType === "keyboard") {
              setIsFocused(true);
            }
          }}
          onBlur={() => setIsFocused(false)}
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
