import style from "@/assets/style/module/layout.module.scss";

export default function Footer({meta}) {
  return (
    <>
    {meta.footer&&<footer className={style.footer}>
      <ul className={style.menu}>
        <li>
          <a href="#none">공지사항</a>
        </li>
        <li>
          <a href="#none">고객센터</a>
        </li>
        <li>
          <a href="#none">개인정보처리방침</a>
        </li>
      </ul>
      <p className={style.address}>
        서울특별시 중구 을지로 1234 123
      </p>
      <p className={style.copyright}>
        COPYRIGHT© 2025, ALL RIGHTS RESERVERD.
      </p>
    </footer>}
    </>
  )
}