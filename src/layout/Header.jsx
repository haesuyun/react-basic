import React, {useState, useEffect} from "react";
import style from "@/assets/style/module/layout.module.scss";
import { useColorScheme } from "@mui/material";
// mui
import Switch from '@mui/material/Switch';

export default function Header({meta}){
  // console.log('meta',meta)
  const { mode, setMode } = useColorScheme();
  const [darkMode, setDarkMode] = useState(mode === 'dark');
  useEffect(() => {
    setMode(darkMode ? 'dark' : 'light')
  },[darkMode])
  return(
    <header className={style.header}
    >
      {meta.showHeaderPrev&&<button type="button">
        <i className="icon-large arrow-left" aria-label="이전"></i>
      </button>}
      <h1>
        {meta.name || ""}
      </h1>
      <Switch checked={darkMode} onChange={e => {
        console.log(e.target.checked)
        setDarkMode(e.target.checked)
      }} label="Toggle Mode" />
      {meta.showHeaderHome&&<button type="button">
        <i className="icon-large home" aria-label="홈"></i>
      </button>}
      {meta.showHeaderMenu&&<button type="button">
        <i className="icon-large menu" aria-label="메뉴"></i>
      </button>}
    </header>
  )
} 