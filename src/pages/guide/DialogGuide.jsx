import React, { useState, useRef } from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiDialog from "@/components/Dialog";
// mui
import { 
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function MuiDialog() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button ref={buttonRef} variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // closeAfterTransition={false}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function DialogBody() {
  return <div>dialog body</div>;
}
export default function DialogGuide() {
  const [open, setOpen] = useState({
    dialog01: false,
    dialog02: false,
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
    <section>
      <h1 className={style.h1}>Dialog</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th className="text-center">type</th>
            <th>size</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>material Dialog</th>
            <td></td>
            <td>
              <MuiDialog/>
            </td>
          </tr>
          <tr>
            <th>Alert</th>
            <td>small (w: 300)</td>
            <td>
              <button
                type="button"
                className="button bg-secondary"
                onClick={() => handleClickOpen("dialog01")}
              >
                Alert Dialog
              </button>
            </td>
          </tr>
          <tr>
            <th>full Screen</th>
            <td>full (w: 600)</td>
            <td>
              <button
                type="button"
                className="button bg-secondary"
                onClick={() => handleClickOpen("dialog02")}
              >
                Full Screen Dialog
              </button>
            </td>
          </tr>
          <tr>
            <th>Bottom Sheet</th>
            <td>half (w: 600, h: 600)</td>
            <td>
              <button
                type="button"
                className="button bg-secondary"
                onClick={() => handleClickOpen("dialog03")}
              >
                Bottom Sheet Dialog(dimHide)
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* alert */}
      <UiDialog
        open={open.dialog01}
        onClose={() => {
          handleClose("dialog01");
        }}
        title="Dialog Title 1"
        actions={
          <>
            <button
              type="button"
              className="button bg-secondary"
              onClick={() => handleClose("dialog01")}
            >
              취소
            </button>
            <button
              type="button"
              className="button bg-primary"
              onClick={() => handleClose("dialog01")}
            >
              확인
            </button>
          </>
        }
      >
        <DialogBody />
      </UiDialog>
      {/* full screen */}
      <UiDialog
        size="fullScreen"
        // dimHide
        open={open.dialog02}
        onClose={() => {
          handleClose("dialog02");
        }}
        title="Dialog Title 2"
        actions={
          <>
            <button
              type="button"
              className="button-large bg-secondary"
              onClick={() => handleClose("dialog02")}
            >
              취소
            </button>
            <button
              type="button"
              className="button-large bg-primary"
              onClick={() => handleClose("dialog02")}
            >
              확인
            </button>
          </>
        }
      >
        {temp.map((t, i) => (
          <span key={i}>
            {(t, i)}lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        ))}
      </UiDialog>
      {/* bottom sheet */}
      <UiDialog
        type="bottomSheet"
        // dimHide
        open={open.dialog03}
        onClose={() => {
          handleClose("dialog03");
        }}
        title="dialog title3"
        actions={
          <>
            <button
              type="button"
              className="button-large bg-secondary"
              onClick={() => handleClose("dialog03")}
            >
              취소
            </button>
            <button
              type="button"
              className="button-large bg-primary"
              onClick={() => handleClose("dialog03")}
            >
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
      </UiDialog>
    </section>
  );
}
