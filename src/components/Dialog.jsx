import React, { useEffect, useState } from "react";
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
    console.log(dialogs);
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
      className={`dialog-wrap ${type || ""} ${size || ""} ${dimHide ? "dim-hide" : ""}`.trim()}
    >
      {/* style={{ zIndex: 100 + dialogs.length }} */}
      <div className="dialog-container">
        <div className="dialog-title">
          {title.length && <p className="title">{title}</p>}
          <button type="button" onClick={() => onClose()}>
            닫기
          </button>
        </div>
        <div
          className={`dialog-content ${actions ? "dialog-content-actions" : ""}`.trim()}
        >
          {children}
        </div>
        {actions && <div className="dialog-actions">{actions}</div>}
      </div>
      {!dimHide && <div className="dialog-dim" onClick={() => onClose()}></div>}
    </div>
  );
}
export default Dialog;
