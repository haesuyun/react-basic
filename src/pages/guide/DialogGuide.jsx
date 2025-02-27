import React, { useState } from "react";
import Dialog from "../../components/Dialog";

function DialogBody() {
  return <div>dialog body</div>;
}
function DialogGuide() {
  const [open, setOpen] = useState({
    dialog01: false,
    dialog02: true,
    dialog03: false,
  });
  const handleClickOpen = (key) => {
    setOpen((prev) => ({ ...prev, [key]: true }));
  };
  const handleClose = (key) => {
    setOpen((prev) => ({ ...prev, [key]: false }));
  };
  const temp = Array.from({ length: 100 });
  return (
    <div>
      <button type="button" onClick={() => handleClickOpen("dialog01")}>
        Alert Popup
      </button>
      <Dialog
        open={open.dialog01}
        onClose={() => {
          handleClose("dialog01");
        }}
        title="Dialog Title 1"
        actions={
          <>
            <button
              type="button"
              className="button-large bg-grey"
              onClick={() => handleClose("dialog01")}
            >
              취소
            </button>
            <button
              type="button"
              className="button-large bg-secondary"
              onClick={() => handleClose("dialog01")}
            >
              확인
            </button>
          </>
        }
      >
        <DialogBody />
      </Dialog>
      <br />
      <br />
      <button type="button" onClick={() => handleClickOpen("dialog02")}>
        Full Screen Popup
      </button>
      <Dialog
        size="fullScreen"
        dimHide
        open={open.dialog02}
        onClose={() => {
          handleClose("dialog02");
        }}
        title="Dialog Title 2"
        actions={
          <>
            <button
              type="button"
              className="button-large bg-grey"
              onClick={() => handleClose("dialog02")}
            >
              취소
            </button>
            <button
              type="button"
              className="button-large bg-secondary"
              onClick={() => handleClose("dialog02")}
            >
              확인
            </button>
          </>
        }
      >
        {temp.map((t, i) => (
          <span key={i}>
            {t, i}lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        ))}
      </Dialog>
      <br />
      <br />
      <button type="button" onClick={() => handleClickOpen("dialog03")}>
        Bottom Sheet Popup(dimHide)
      </button>
      <Dialog
        type="bottom-sheet"
        dimHide
        open={open.dialog03}
        onClose={() => {
          handleClose("dialog03");
        }}
        title="dialog title3"
        actions={
          <>
            <button type="button" onClick={() => handleClose("dialog03")}>
              취소
            </button>
            <button type="button" onClick={() => handleClose("dialog03")}>
              확인
            </button>
          </>
        }
      >
        {temp.map((t, i) => (
          <p key={i}>
            {(t, i)}lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </Dialog>
    </div>
  );
}
export default DialogGuide;
