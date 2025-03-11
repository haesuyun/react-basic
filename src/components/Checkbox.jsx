import React, {useState} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/checkbox.module.scss"

function Checkbox({
  inputProps,
  checked,
  label,
  onChange,
}){
  // checked가 주어지지 않으면 내부 상태로 관리
  const [value, setValue] = useState(checked!==undefined ? checked : null)
  const handleChange = (e) => {
    // checked가 props로 제공되지 않은 경우 내부 상태 업데이트
    setValue(e.target.checked)
    // 부모에서 onChange가 제공되었다면 실행
    checked!==undefined ? onChange(e) : null
  }
  return(
    <div className={clsx("checkbox", style.checkbox)}>
      <label>
        <input 
          type="checkbox" 
          {...inputProps} 
          checked={value} 
          onChange={(e)=>handleChange(e)}/>
          <i className={clsx("icon", style.icon, value? "checkbox-on" : "checkbox-off")}></i>
        { label &&
          <p className={style.label}>
            {label}
          </p>
        }
      </label>
    </div>
  )
}

export default Checkbox;