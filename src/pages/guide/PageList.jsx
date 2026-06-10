import style from "@/assets/style/module/pagelist.module.scss";
import UiIcon from "@/components/Icon";
import UiTab from "@/components/Tab";
import UiTabs from "@/components/Tabs";
import UiTextField from "@/components/TextField";
import { pageList } from "@/router.jsx";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import clsx from "clsx";
import { useMemo, useState } from "react";

export default function PageList() {
  // 미리보기 영역 오픈 여부
  const [openPreView, setOpenPreView] = useState(false);
  const [path, setPath] = useState(null);
  // newRoutes는 페이지 라우트 목록에서 첫 번째 항목(pagelist)을 제외한 값
  const newRoutes = useMemo(() => pageList.slice(1), []);
  // 화면 목록 검색어 상태
  const [search, setSearch] = useState("");
  // 탭 선택 값
  const [tabValue, setTabValue] = useState("all");

  // 탭 선택 값(tabValue)에 따라 화면 목록을 먼저 필터링합니다.
  const filteredByTab = useMemo(() => {
    // all인 경우 전체 목록을 그대로 유지합니다.
    if (tabValue === "all") return newRoutes;
    // tabValue가 guide/login/고객센터 등으로 바뀌면 해당 카테고리 경로만 추려서 반환합니다.
    return newRoutes.filter(route => {
      const meta = route?.meta || {};
      return meta?.depth01 === tabValue;
    });
  }, [tabValue, newRoutes]);

  const displayedRoutes = useMemo(() => {
    // 검색어(search)가 입력된 경우, 탭 필터링 결과(filteredByTab)를 기준으로 추가 검색을 수행합니다.
    const q = (search || "").toString().trim().toLowerCase();
    // 검색어가 비어있으면 탭 필터 결과 전체를 그대로 사용합니다.
    if (!q) return filteredByTab;
    
    return filteredByTab.filter((route) => {
      const meta = route?.meta || {};
      // 이 값은 실제로 렌더링할 테이블 행 데이터이며,
      const candidates = [
        route?.path || "",
        meta?.name || "",
        meta?.depth01 || "",
        meta?.depth02 || "",
        meta?.depth03 || "",
        meta?.author || "",
        meta?.state || "",
        meta?.note || "",
      ];

      return candidates.some((v) =>
        v.toString().toLowerCase().includes(q)
      );
    });
  }, [search, filteredByTab]); // tabValue와 search가 변경될 때만 다시 계산됩니다.

  return (
    <>
    <section className={style.pageListWrap}>
      <div className={style.listWrap}>
        <div className={style.listTop}>
          <h1>화면목록</h1>
          <UiTabs
            className={clsx(style.tabsWrap, "theme-dark")} 
            value={tabValue} 
            variant="rounded"
            onChange={(_,newValue)=>setTabValue(newValue)}>
            <UiTab label="전체화면" value="all"/>
            <UiTab label="가이드" value="guide"/>
            <UiTab label="로그인" value="로그인"/>
            <UiTab label="고객센터" value="고객센터"/>
          </UiTabs>
          <UiTextField 
            className={style.searchWrap}
            placeholder="검색어 입력" 
            startAdornment={<UiIcon icon="search" size="large" color="primary"/>}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className={style.tableWrap}>
          <table>
            <tbody>
              {displayedRoutes.map((route, index) => (
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
    </>
  );
}
