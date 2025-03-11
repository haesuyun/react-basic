import React, { useEffect, useState } from "react";
import style from "@/assets/style/module/dialog.module.scss";
function Dialog({
  open,
  type,
  size,
  title,
  onClose,
  actions,
  children,
  dimHide,
}) {
  const [dialogs, setDialogs] = useState(null);
  useEffect(() => {
    const htmlElement = document.documentElement;
    // console.log("mount", title, open);
    setDialogs(document.querySelectorAll(".dialog-wrap"));
    if (open && !dimHide) {
      htmlElement.style.overflow = "hidden";
      // console.log("isTrue:", title, open);
      return () => {
        htmlElement.style.overflow = "";
        // console.log("isCleanup:", title, open);
      };
    }
  }, [open]);
  if (!open) return null;
  // size: default, full-scren,
  // type: bottom-sheet,
  return (
    <div
      className={`${style.dialogWrap} ${style[type] || ""} ${
        style[size] || ""
      } ${dimHide ? style.dimHide : ""}`.trim()}
    >
      {/* style={{ zIndex: 100 + dialogs.length }} */}
      <div className={style.dialogContainer}>
        <div className={style.dialogTitle}>
          {title.length && <p className={style.title}>{title}</p>}
          <button type="button" onClick={() => onClose()}>
            <i className="icon icon-large close-black" aria-label="닫기"></i>
          </button>
        </div>
        <div
          className={`${style.dialogContent} ${
            actions ? style.dialogContentActions : ""
          }`.trim()}
        >
          {children}
        </div>
        {actions && <div className={style.dialogActions}>{actions}</div>}
      </div>
      {!dimHide && (
        <div className={style.dialogDim} onClick={() => onClose()}></div>
      )}
    </div>
  );
}
export default Dialog;
