import React, { useState, useRef } from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiDialog from "@/components/Dialog";
import UiSelect from "@/components/Select";
// mui
import { 
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  Switch,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
} from '@mui/material';

function MuiDialog() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');
  const buttonRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    // console.log("event.target.value,",event.target.value)
    setMaxWidth(
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };


  return (
    <React.Fragment>
      <Button ref={buttonRef} variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
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
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
          <DialogContentText id="alert-dialog-description">
            <MuiDialog/>
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
  return <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, aut!
  </div>;
}
export default function DialogGuide() {
  const [open, setOpen] = useState({
    dialog01: false,
    dialog02: false,
    dialog03: false,
    dialog04: false,
  });
  const [select, setSelect] = useState({
    label: "Dialog Size 선택",
    placeholder: "Dialog Size 선택",
    value: 2,
    options: [
      {
        id: 0,
        label: "xs",
      },
      {
        id: 1,
        label: "sm",
      },
      {
        id: 2,
        label: "md",
      },
      {
        id: 3,
        label: "lg",
      },
      {
        id: 4,
        label: "xl",
      },
    ],
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
            <th>default</th>
            <td>md</td>
            <td>
              <button
                type="button"
                className="button bg-secondary"
                onClick={() => handleClickOpen("dialog01")}
              >
                default Dialog
              </button>
            </td>
          </tr>
          <tr>
            <th>size</th>
            <td>xs, sm, md, lg, xl</td>
            <td>
              <button
                type="button"
                className="button bg-secondary"
                onClick={() => handleClickOpen("dialog04")}
              >
                size Dialog
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
                Bottom Sheet Dialog
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* default */}
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
      {/* size */}
      <UiDialog
        open={open.dialog04}
        onClose={() => {
          handleClose("dialog04");
        }}
        maxWidth={select.options[select.value].label}
        title="Dialog Title 1"
        actions={
          <>
            <button
              type="button"
              className="button bg-secondary"
              onClick={() => handleClose("dialog04")}
            >
              취소
            </button>
            <button
              type="button"
              className="button bg-primary"
              onClick={() => handleClose("dialog04")}
            >
              확인
            </button>
          </>
        }
      >
        <UiSelect
          {...select}
          onChange={(index) =>
            setSelect((prev) => ({ ...prev, value: index }))
          }
        />
        <br/>
        <DialogBody />
      </UiDialog>
      {/* full screen */}
      <UiDialog
        fullScreen
        open={open.dialog02}
        onClose={() => {
          handleClose("dialog02");
        }}
        title={["Dialog Title 2", <br key={0} />,"Title에 br태그 넣는 방법"]}
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
        <button
          type="button"
          className="button bg-secondary"
          onClick={() => handleClickOpen("dialog01")}
        >
          Alert Dialog
        </button>
        {temp.map((t, i) => (
          <span key={i}>
            {(t, i)}lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        ))}
      </UiDialog>
      {/* bottom sheet */}
      <UiDialog
        bottomSheet
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
        {temp.map((t, i) => (
          <p key={i}>
            {(t, i)}lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
    </section>
  );
}
