import React, {useState} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/textfield.module.scss"
import UiFormLabel from "@/components/FormLabel"
import UiFormMessage from "@/components/FormMessage"

export default function TextField({
  className,
  required,
  readonly,
  disabled,
  label,
  placeholder,
  name,
  value="",
  type="text",
  inputProps,
  error,
  message,
  errorMessage,
  children,
  onChange
}){
  const [innerValue, setInnerValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  return(
    <div className={clsx("input-wrap", style.inputWrap, className, isFocused && style.focus, error && style.error)}>
      <UiFormLabel label={label} required={required}/>
      <div className={clsx(style.inputBox)}>
        <div className={clsx(style.input, readonly && style.readonly, disabled && style.disabled)}>
          <input 
            required={required} 
            readOnly={readonly}
            disabled={disabled}
            type={type}
            name={name} 
            placeholder={placeholder}
            {...inputProps} 
            value={innerValue} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={e=>{
              onChange?.(e);
              setInnerValue(e.target.value);
            }}
            />
          {(!readonly && !disabled && innerValue!=="" ) && 
          <button 
            type="button" 
            className={clsx(style.clearable)}       
            onClick={()=>setInnerValue("")}>
            <i
              className="icon icon-small delete-gray"
              aria-label="삭제"
            ></i>
          </button>}
        </div>
        {children && <div className={clsx(style.inputActions)}>{children}</div>}
      </div>
      <UiFormMessage message={message} errorMessage={errorMessage}/>
    </div>
  )
}
