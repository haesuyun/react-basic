import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import clsx from "clsx";
import style from "@/assets/style/module/accordion.module.scss"
import { useResize } from "@/hooks"
import debounce from "lodash/debounce";

export default function Accordion({
  expanded=false,
  className,
  title,
  header,
  children,
  onChange,
  variant = "standard" }) {
  const [toggle, setToggle] = useState(expanded);
  const [detailsHeight, setDetailsHeight] = useState(0); // 열릴때 애니메이션을 주기위한 높이 값
  const [displayNone, setDisplayNone] = useState(false); // 닫혔을때 display none 설정 (포커스 이동 막기)
  const detailsRef = useRef();

  // 외부에서 expanded가 변경될 때 동기화
  useEffect(() => {
    setToggle(expanded)
  }, [expanded])

  // 높이 측정 함수 (debounce로 dom 생성 후 실행)
  const debouncedUpdateHeight = useMemo(() => 
    debounce(() => {
      const height = detailsRef.current?.clientHeight || 0;
      setDetailsHeight(height) //display none이 삭제된 후 높이값 담기
    }, 0)
  , [])
  const debouncedDisplayNone = useMemo(() => 
    debounce((value) => {
      setDisplayNone(value); // 닫히는 애니메이션 후 display: none
    },300) // 스타일 애니메이션 지속시간과 맞춤
  , [])
  
  // 리사이즈 대응
  useResize(() => {
    if (toggle) debouncedUpdateHeight()
  })

  // 열림/닫힘 상태 처리
  useEffect(() => {
    if (!toggle) { // 닫힘
      setDetailsHeight(0);
      debouncedDisplayNone(true);
    } else { // 열림
      setDisplayNone(false); // 열릴때 바로 보여주기
      debouncedUpdateHeight(); // 초기 열릴 때 높이 계산
    }
    return () => {
      debouncedUpdateHeight.cancel();
      debouncedDisplayNone.cancel();
    }
  }, [toggle, debouncedDisplayNone, debouncedUpdateHeight])
  
  const handleClick = (e) => {
    setToggle((prev) => !prev);
    onChange?.(e, !toggle);
  }

  return (
    <dl className={clsx(
      "accordion",
      style.accordion,
      className,
      style[variant],
      toggle && style.expanded)}>
      <dt className={clsx(style.summary)}>
        {header && <div className={clsx(style.header)}>{ header}</div>}
        <button type="button"
          className={clsx(style.btnToggle, title&&"flex-1-1")}
          aria-expanded={toggle}
          onClick={handleClick}
        >
          {title&&<p className={style.title}>{ title }</p>}
          <i className={clsx(style.icon, "icon-large down")} aria-label={toggle?"닫기":"열기"}></i>
        </button>
      </dt>
      <dd className={clsx(style.details)} style={{ maxHeight: detailsHeight }}
        inert={!toggle ? "" : undefined} // 닫혔을때 포커스 이동 막기 (최신 브라우져)
      >
        <div ref={detailsRef}
          className={clsx(style.detailsInner,
            displayNone && "d-none" // 닫혔을때 포커스 이동 막기 (최신 브라우져 외)
          )}
          role="region"
          aria-hidden={!toggle}
        >
          {children}
        </div>
      </dd>
    </dl>
  )
}