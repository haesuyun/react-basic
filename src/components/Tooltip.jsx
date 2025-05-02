import React, {useState, useEffect} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/tooltip.module.scss";
export default function Tooltip({
  open=false,
  title,
  content,
  children,
  onChange,
}) {
  const [toggle, setToggle] = useState(open);
  // 외부에서 open가 변경될 때 동기화
  useEffect(() => {
    setToggle(open)
  }, [open])
  return (
    <div role="tooltip" className={clsx(style.tooltipWrap, toggle && style.active)}>
      {React.Children.map(children, (child) => {
        if(!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          onClick: () => { setToggle(!toggle); onChange?.(!toggle)}
        })
      })}
      <div className={clsx(style.tooltipContainer)}>
        <span className={clsx(style.tooltipArrow)}></span>
        <div className={clsx(style.tooltipTitle)}>
          {title && <p className={style.title}>{title}</p>}
          <button type="button" onClick={() => {
            setToggle(false)
            onChange?.(false)
          }}>
            <i className="icon icon-small close" aria-label="닫기"></i>
          </button>
        </div>
        <div className={clsx(style.tooltipContent)}>
          {content}
        </div>
      </div>
    </div>
  )
}