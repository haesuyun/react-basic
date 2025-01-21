import React, { useState } from "react";
import routes from "@/routes/routes";
import style from "@/assets/pagelist.module.scss";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export default function PageList() {
  const [path, setPath] = useState(null);
  return (
    <section className={style.pageListWrap}>
      <div className={style.listWrap}>
        <div className={style.listTop}>
          <h1>Page List</h1>
        </div>
        <table>
          <tbody>
            {routes.map((route, index) => (
              <tr key={index}>
                <td>{route?.meta?.depth01 || null}</td>
                <td>{route?.meta?.depth02 || null}</td>
                <td>{route?.meta?.depth03 || null}</td>
                <td>{route?.meta?.name || null}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setPath(route.path);
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
                  <div className="chip">{route?.meta?.state || null}</div>
                </td>
                <td>{route?.meta?.createdDate || null}</td>
                <td>{route?.meta?.note || null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={style.previewWrap}>
        <iframe src={path} frameBorder="0" width="400px"></iframe>
      </div>
    </section>
  );
}
