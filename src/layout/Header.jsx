import React from "react";
import style from "@/assets/style/module/layout.module.scss";

export default function Header({meta}){
  console.log('meta',meta)
  return(
    <header className={style.header}>
      <button type="button">
        <i className="icon back-black" aria-label="뒤로가기"></i>
      </button>
      <h1>
        {meta.name || ""}
      </h1>
    </header>
  )
} 