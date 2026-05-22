import style from "@/assets/style/module/layout.module.scss";
import clsx from "clsx";

export default function Fnb({ meta }) {
  const menu = [
    {
      icon: "card",
      label: "카드신청"
    },
    {
      icon: "wallet",
      label: "사용내역"
    },
    {
      icon: "map-search",
      label: "지점 찾기"
    },
    {
      icon: "my-account",
      label: "나의 정보"
    },
    {
      icon: "customer",
      label: "고객센터"
    },
  ]
  return (
    <>
    {meta.fnb&&<nav className={style.fnb}>
      <ul className={style.menu}>
        {menu.map((item, index)=><li key={index}>
          <a href="#none">
            <i className={clsx("icon-large", item.icon+`-white`)}></i>
            <span>
              {item.label}
            </span>
          </a>
        </li>)}
      </ul>
    </nav>}
    </>
  )
}