import style from "@/assets/style/module/dialog.module.scss";
import UiIcon from "@/components/Icon";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock"; // focus trap, open한 버튼으로 포커드 이동 및 open 시 dialog 내부로 포커스 이동
export default function Dialog({
  open,
  // size,
  fullScreen = false,
  bottomSheet = false,
  maxWidth = 'md',
  title,
  onClose,
  actions,
  children,
  dimHide,
}) {
  const dialogRef = useRef(null);
  const rootRef = useRef(null);
  useEffect(() => {
    const body = document.body;
    const root = document.getElementById('root');
    rootRef.current = root;
    if (open) {
      body.style.overflow = "hidden";
      root?.setAttribute('aria-hidden', 'true');
      return () => {
        const hasOtherDialogs  = document.querySelectorAll('.dialog-root');
        if (hasOtherDialogs.length === 0) {
          body.style.overflow = "";
          root?.removeAttribute('aria-hidden');
        }
      };
    }
  }, [open]);
  if (!open) return null;
  return createPortal(
    <div ref={dialogRef} role="presentation" className="dialog-root">
      <FocusLock returnFocus>
        <div
          role="dialog"
          aria-modal="true"
          className={clsx(
            style.dialogWrap,
            // style[size],
            {[style.fullScreen]:fullScreen},
            {[style.bottomSheet]:bottomSheet},
            {[style.dimHide]: dimHide},
            style[maxWidth],
          )}>
          <div className={style.dialogContainer}>
            <div className={style.dialogTitle}>
              {title && <p className={style.title}>{title}</p>}
              <button type="button" onClick={() => onClose()}>
                <UiIcon icon="close" size="large" 
                aria-label="닫기"/>
              </button>
            </div>
            <div
              className={clsx(style.dialogContent,
                {[style.dialogContentActions]: actions}
              )}
            >
              {children}
            </div>
            {actions && <div className={clsx("button-group", style.dialogActions)}>{actions}</div>}
          </div>
          {!dimHide && (
            <div className={style.dialogDim} onClick={() => onClose()}></div>
          )}
        </div>
      </FocusLock>
    </div>,
    document.body
  );
}
