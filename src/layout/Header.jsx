import React from "react";
import style from "@/assets/style/module/layout.module.scss";

export default function Header({meta}){
  console.log('meta',meta)
  return(
    <header className={style.header}>
      <button type="button">
        <i className="icon-large arrow-left" aria-label="이전"></i>
      </button>
      <h1>
        {meta.name || ""}
      </h1>
      <button type="button">
        <i className="icon-large home" aria-label="홈"></i>
      </button>
      <button type="button">
        <i className="icon-large menu" aria-label="메뉴"></i>
      </button>
    </header>
  )
} 