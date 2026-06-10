import style from "@/assets/style/module/textfield.module.scss";
import UiFormLabel from "@/components/FormLabel";
import UiFormMessage from "@/components/FormMessage";
import UiIcon from "@/components/Icon";
import { useResize } from "@/hooks";
import clsx from "clsx";
import { useId, useLayoutEffect, useRef, useState } from "react";

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
  startAdornment,
  endAdornment,
  clearable=true,
  multiline,
  rows=0,
  maxRows,
  inputProps,
  error,
  message,
  errorMessage,
  children,
  onChange,
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
    // console.log("handleResizeHeight")
  };
  useLayoutEffect(() => { //DOM 크기를 측정하거나 조작해야 할때 사용
    if(multiline && textareaRef.current) {
      // textareaHeightRef.current = 24;
      textareaHeightRef.current ||= textareaRef.current?.clientHeight;
      queueMicrotask(handleResizeHeight); // DOM 측정/ 조작 후 , 랜더링 안정화 직후 실행
    }
  }, [])
  useResize(handleResizeHeight)

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
            <>
              {startAdornment && <span className={clsx(style.startAdornment)}>{startAdornment}</span>}
              <div className={clsx(style.inputInner)}>
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
                {clearable && (!readonly && !disabled && !multiline && innerValue!=="" ) && (
                  <button 
                    type="button" 
                    className={clsx(style.clearable)}       
                    onClick={()=>{
                      setInnerValue("");
                      onChange?.({ target: { value: "" } });
                    }}>
                    <UiIcon icon="close-circle" color="secondary" aria-label="삭제"/>
                  </button>
                )}
              </div>
              {endAdornment && <span className={clsx(style.endAdornment)}>{endAdornment}</span>}
            </>
          )}
        </div>
        {children && <div className={clsx(style.inputActions)}>{children}</div>}
      </div>
      <UiFormMessage message={message} errorMessage={errorMessage}/>
    </div>
  )
}
