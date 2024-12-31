import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

function OptionsList({ value, options, onCheck }) {
  const [selectValue, setSelectValue] = useState(value);
  return (
    <ul className="option-list">
      {options.map((item, index) => (
        <li
          className={selectValue === index ? "active" : ""}
          key={index}
          onClick={() => {
            setSelectValue(index);
            onCheck(index);
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
function Select({ value, options, onChange, containerRef }) {
  const [selectValue, setSelectValue] = useState(value);
  const [open, setOpen] = useState({
    dialog: false,
  });
  const [inputValue, setInputValue] = useState(options[selectValue].label);
  // console.log(value, open, inputValue);
  const handleClickOpen = (key) => {
    setOpen((prev) => ({ ...prev, [key]: true }));
  };
  const handleClose = (key) => {
    setOpen((prev) => ({ ...prev, [key]: false }));
  };
  const onCheck = (index) => {
    onChange(index);
    setSelectValue(index);
    setInputValue(options[index].label);
    setOpen((prev) => ({ ...prev, dialog: false }));
  };
  const temp = Array.from({ length: 100 });
  return (
    <div className="select">
      <input
        type="text"
        readOnly
        value={inputValue}
        onClick={() => handleClickOpen("dialog")}
      ></input>
      {containerRef.current &&
        ReactDOM.createPortal(
          <Dialog
            type="bottom-sheet"
            open={open.dialog}
            onClose={() => handleClose("dialog")}
            title="option title"
          >
            <OptionsList
              value={selectValue}
              options={options}
              onCheck={onCheck}
            />
            {temp.map((t, i) => (
              <p key={i}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            ))}
          </Dialog>,
          // containerRef.current.nextSibling,
          containerRef.current,
        )}
    </div>
  );
}
export default Select;
