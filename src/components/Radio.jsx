import style from "@/assets/style/module/radio.module.scss";
import UiIcon from "@/components/Icon";
import { useLastInputType } from "@/hooks/";
import clsx from "clsx";
import { useRef, useState } from "react";

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
  iconColor,
}) {
  const inputRef = useRef(null);
  // icon
  const setIcon = (isActive) => {
    switch (variant) {
      case "check":
        return isActive ?  {name: "check", color: "primary"} : {name: "check", color: "secondary"};
      default:
        return isActive ? {name: "radio", color: "primary"} : {name: "radio-outline", color: "secondary"};
    }
  };
  const setIconColor = (isActive) => {
    if (iconColor) {
      return isActive ? iconColor.checked : iconColor.unchecked;
    } else {
      return setIcon(isActive).color;
    }
  }
  // const activeIcon = useMemo(() => setIcon(true), [variant]);
  // const inactiveIcon = useMemo(() => setIcon(false), [variant]);
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
            <UiIcon icon={setIcon(checked).name} size={iconSize} color={setIconColor(checked)} className={clsx(style.icon)} />
        }
        { label &&
          <p className={clsx("label", style.label)}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
