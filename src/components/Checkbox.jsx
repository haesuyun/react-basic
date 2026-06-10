import style from "@/assets/style/module/checkbox.module.scss";
import UiIcon from "@/components/Icon";
import { useLastInputType } from "@/hooks/";
import clsx from "clsx";
import { useState } from "react";

export default function Checkbox({
  className,
  inputProps,
  checked,
  label,
  onChange,
  variant,
  iconSize,
  iconColor,
  disabled = false,
}) {
  // checked가 주어지지 않으면 내부 상태로 관리
  const [value, setValue] = useState(checked!==undefined ? checked : false)
  const handleChange = (e) => {
    // checked가 props로 제공되지 않은 경우 내부 상태 업데이트
    setValue(e.target.checked)
    // 부모에서 onChange가 제공되었다면 실행
    checked!==undefined ? onChange(e) : null
  }
  // icon
  const setIcon = (isActive) => {
    switch (variant) {
      case "bookmark":
        return isActive ? {name: "bookmark", color: "primary"} : {name: "bookmark-outline", color: "grey"};
        case "heart":
        return isActive ? {name: "heart", color: "primary"} : {name: "heart-outline", color: "secondary"};
      case "line":
        return isActive ? {name: "check", color: "primary"} : {name: "check", color: "secondary"};
      default:
        return isActive ? {name: "check-circle", color: "primary"} : {name: "check-circle-outline", color: "secondary"};
    }
  };

  const setIconColor = (isActive) => {
    if (iconColor) {
      return isActive ? iconColor.checked : iconColor.unchecked;
    } else {
      return setIcon(isActive).color;
    }
  }

  // icon size
  const iconSizeClass = iconSize ? `icon-${iconSize}` : "icon";
  // focus
  const [isFocused, setIsFocused] = useState(false);
  const lastInputType = useLastInputType();
  return(
    <div className={clsx("checkbox", style.checkbox,
      className,
      style[variant],
      style[iconSize],
      disabled && style.disabled,
      isFocused && style.focus
    )}>
      <label>
        <input 
          type="checkbox" 
          disabled={disabled}
          {...inputProps} 
          checked={value} 
          onChange={(e) => handleChange(e)}
          onFocus={() => {
            if (lastInputType === "keyboard") {
              setIsFocused(true);
            }
          }}
          onBlur={() => setIsFocused(false)}
        />
        <UiIcon icon={setIcon(value).name} size={iconSize} color={setIconColor(value)} className={clsx(style.icon)} />
        { label &&
          <p className={style.label}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}
