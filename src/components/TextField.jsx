import React, {useState, useRef, useEffect, useId} from "react";
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
  hiddenLabel=false,
  placeholder,
  name,
  value="",
  type="text",
  multiline,
  rows=0,
  maxRows,
  inputProps,
  error,
  message,
  errorMessage,
  children,
  onChange
}){
  const [innerValue, setInnerValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const id = useId()
  // textarea 자동 높이
  const textareaRef = useRef();
  const textareaHeightRef = useRef();

  const handleResizeHeight = () => {
    // multiline 기본 rows 가 없을때
    if(multiline && rows<1){
      textareaRef.current.style.height = 'auto';
      const textareaScrollHeight = textareaRef.current.scrollHeight;
      const rowsCount = textareaScrollHeight/textareaHeightRef.current;
      if(maxRows){
        textareaRef.current.style.height = 
        maxRows>rowsCount ? 
        `${textareaScrollHeight}px`
        : `${textareaHeightRef.current*maxRows}px`;
        
      }else{
        textareaRef.current.style.height = `${textareaScrollHeight}px`;
      }
    }
  };
  useEffect(() => {
    if(multiline && textareaRef.current) {
      // textareaHeightRef.current = 24;
      textareaHeightRef.current ||= textareaRef.current?.clientHeight;
      queueMicrotask(handleResizeHeight);
    }
    window.addEventListener("resize", handleResizeHeight);
    return () => {
      // cleanup 
      window.removeEventListener("resize", handleResizeHeight);
    }
  }, []);

  return(
    <div 
      className={clsx(
        "input-wrap", 
        style.inputWrap, 
        className, 
        isFocused && style.focus, 
        error && style.error)}>
      <UiFormLabel label={label} htmlFor={id} required={required} className={ clsx(hiddenLabel?"opacity-0":"") } />
      <div className={clsx(style.inputBox)}>
        <div 
          className={clsx(
            style.input, 
            readonly && style.readonly, 
            disabled && style.disabled)}>
          {multiline ? (
            <textarea
              id={id}
              ref={textareaRef}
              required={required} 
              readOnly={readonly}
              disabled={disabled}
              type={type}
              name={name} 
              placeholder={placeholder}
              {...inputProps} 
              rows={rows?rows:1}
              value={innerValue} 
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={e=>{
                onChange?.(e);
                setInnerValue(e.target.value);
                handleResizeHeight();
              }}
            ></textarea>
          ):(
            <input 
              id={id}
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
          )}
          {(!readonly && !disabled && !multiline && innerValue!=="" ) && (
            <button 
              type="button" 
              className={clsx(style.clearable)}       
              onClick={()=>setInnerValue("")}>
              <i
                className="icon close-circle"
                aria-label="삭제"
              ></i>
            </button>
          )}
        </div>
        {children && <div className={clsx(style.inputActions)}>{children}</div>}
      </div>
      <UiFormMessage message={message} errorMessage={errorMessage}/>
    </div>
  )
}
