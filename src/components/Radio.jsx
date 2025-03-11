import React, {useState} from "react";
import style from "@/assets/style/module/radio.module.scss"

function Radio({
  inputProps,
  label,
  name,
  value,
  checked,
  onChange,
}){
  // const [value, setValue] = useState(checked!==undefined?checked:false)
  const setChange = (e) => {
    // setValue(e.target.checked)
    // checked!==undefined?onChange(e):null
  }
  return(
    <div className={`radio ${style.radio}`}>
      <label>
        <input type="radio" name={name} id="" {...inputProps} value={value}/>
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

export default Radio;