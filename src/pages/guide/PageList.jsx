import style from "@/assets/style/module/pagelist.module.scss";
import UiTextField from "@/components/TextField";
import { pageList } from "@/router.jsx";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import clsx from "clsx";
import { useState } from "react";

export default function PageList() {
  const [path, setPath] = useState(null);
  const newRoutes = pageList.slice(1);
  const [ openPreView, setOpenPreView] = useState(false);
  return (
    <>
    <style>{`
    html,
    body,
    .hide-scrollbar {
      /* Internet Explorer 및 Edge를 위한 설정 */
      -ms-overflow-style: none;  
      /* Firefox를 위한 설정 */
      scrollbar-width: none;  
    }
      /* Chrome, Safari, Opera, New Edge(Chromium)를 위한 설정 */
    html::-webkit-scrollbar,
    body::-webkit-scrollbar,
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    `}</style>
    <section className={style.pageListWrap}>
      <div className={style.listWrap}>
        <div className={style.listTop}>
          <h1>화면목록</h1>
          <div>
            <UiTextField placeholder="검색"/>
          </div>
        </div>
        <div className={style.tableWrap}>
          <table>
            <tbody>
              {newRoutes.map((route, index) => (
                <tr key={index}>
                  <td>
                    {route?.meta?.depth01 || null}
                  </td>
                  <td>{route?.meta?.depth02 || null}</td>
                  <td>{route?.meta?.depth03 || null}</td>
                  <td>{route?.meta?.name || null}</td>
                  <td>
                    <button
                      type="button"
                      className="button-text"
                      onClick={() => {
                        setPath(route.path);
                        setOpenPreView(true);
                      }}
                    >
                      {route.path}
                    </button>
                    <a href={route.path} target="_blank" aria-label="새창">
                      <OpenInNewIcon />
                    </a>
                  </td>
                  <td>{route?.meta?.author || null}</td>
                  <td>
                    {route?.meta?.state && (
                      <span className="chip">{route.meta.state}</span>
                    )}
                  </td>
                  <td>{route?.meta?.createdDate || null}</td>
                  <td>{route?.meta?.note || null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={clsx(style.previewWrap,{'open':openPreView})}>
        <button type="button"
          className={style.toggleButton}
          onClick={() => {
            setOpenPreView(!openPreView);
          }}>
            <i className={clsx("icon", "icon-xlarge", [!openPreView?"prev-white":"next-white"])} aria-label=""></i>
          </button>
        <iframe src={path} style={{border: 'none'}} width="420px"></iframe>
      </div>
    </section>
    </>
  );
}
