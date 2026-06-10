import style from "@/assets/style/module/layout.module.scss";
import { ColorSchemeContext } from "@/context/ColorScheme";
import { useContext, useEffect, useState } from "react";
// mui
import UiIcon from "@/components/Icon";
import { useColorScheme } from "@mui/material";
import Switch from '@mui/material/Switch';

export default function Header({meta}){
  
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
    <>
    {meta.header&&<header className={style.header}
    >
      {meta.header.prev&&<button type="button">
        <UiIcon icon="arrow-left" size="large" aria-label="이전"/>
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
      {meta.header.home&&<button type="button">
        <UiIcon icon="home" size="large" aria-label="홈"/>
      </button>}
      {meta.header.menu&&<button type="button">
        <UiIcon icon="menu" size="large" aria-label="메뉴"/>
      </button>}
    </header>}
    </>
  )
} 