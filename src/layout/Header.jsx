import React, {useState, useEffect, useContext} from "react";
import style from "@/assets/style/module/layout.module.scss";
import { ColorSchemeContext } from "@/context/ColorScheme";
// mui
import Switch from '@mui/material/Switch';
import { useColorScheme } from "@mui/material";

export default function Header({meta}){
  // console.log('meta',meta)
  
  // ui theme
  const { isDark, setIsDark } = useContext(ColorSchemeContext);
  const [toggle, setToggle] = useState(()=>isDark); // 마운트 시점에 한 번만 실행, 이후에는 무시
  
  // mui theme
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode(toggle?'dark' : 'light')
  },[])
  // const [toggle, setToggle] = useState(() => mode === 'dark'); // 마운트 시점에 한 번만 실행, 이후에는 무시
  return(
    <header className={style.header}
    >
      {meta.showHeaderPrev&&<button type="button">
        <i className="icon-large arrow-left" aria-label="이전"></i>
      </button>}
      <h1>
        {meta.name || ""}
      </h1>
      <Switch
        checked={toggle}
        onChange={e => {
          setToggle(e.target.checked)
          setIsDark(e.target.checked) //ui theme
          setMode(e.target.checked ? 'dark' : 'light') //mui theme
        }}
        label="Toggle Mode" />
      {meta.showHeaderHome&&<button type="button">
        <i className="icon-large home" aria-label="홈"></i>
      </button>}
      {meta.showHeaderMenu&&<button type="button">
        <i className="icon-large menu" aria-label="메뉴"></i>
      </button>}
    </header>
  )
} 