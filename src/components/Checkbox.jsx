import React, {useState} from "react";
import style from "@/assets/style/module/checkbox.module.scss"

function Checkbox({
  inputProps,
  checked,
  label,
  onChange,
}){
  const [value, setValue] = useState(checked!==undefined?checked:false)
  const setChange = (e) => {
    setValue(e.target.checked)
    checked!==undefined?onChange(e):null
  }
  return(
    <div className={style.checkbox}>
      <label>
        <input type="checkbox" name="" id="" {...inputProps} checked={value} onChange={(e)=>setChange(e)}/>
        <i className={`icon ${style.icon} ${value? "checkbox-on" : "checkbox-off"}`}></i>
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