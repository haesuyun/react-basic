import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import style from "@/assets/style/module/accordion.module.scss"

export default function Accordion({
  className,
  title,
  header,
  children,
  variant = "standard" }) {
  const [toggle, setToggle] = useState(false);
  const detailsRef = useRef();
  const [detailsHeight, setDetailsHeight] = useState(0);
  useEffect(() => {
    if (!toggle) {
      setDetailsHeight(0);
      return;
    }
    const updateHeight = () => {
      setDetailsHeight(detailsRef.current?.clientHeight||0)
    }
    updateHeight(); // 초기 높이 설정
    window.addEventListener("resize", updateHeight);
    return () => {
      // cleanup 
      window.removeEventListener("resize", updateHeight);
    }
  },[toggle])
  return (
    <dl className={clsx("accordion", className, style.accordion, style[variant],toggle&&style.expanded)}>
      <dt className={clsx(style.summary)}>
        {header && <div className={clsx(style.header)}>{ header}</div>}
        <button type="button"
          className={clsx(style.btnToggle, title&&"flex-1-1")}
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
        >
          {title&&<p className={style.title}>
            {title}
          </p>}
          <i className={clsx(style.icon, "icon-large down")} aria-label={toggle?"닫기":"열기"}></i>
        </button>
      </dt>
      <dd className={clsx(style.details)} style={{ maxHeight: detailsHeight }}>
        <div ref={detailsRef} className={clsx(style.detailsInner)} role="region">{ children }</div>
      </dd>
    </dl>
  )
}