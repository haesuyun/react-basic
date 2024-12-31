import React, { useState } from "react";
function TodoItem({ item, index, onRemove }) {
  return (
    <li>
      <div>{item}</div>
      <button type="button" onClick={() => onRemove(index)}>
        삭제
      </button>
    </li>
  );
}
function TodoBoard({ itemList, onRemove }) {
  console.log("props:", itemList);
  return (
    <div>
      <h1>TodoList</h1>
      <ul className="todo-list">
        {itemList.map((item, index) => (
          <TodoItem key={index} item={item} index={index} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
}
function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const addItem = () => {
    console.log(inputValue);
    if (inputValue !== "") {
      setItemList([...itemList, inputValue]);
      setInputValue("");
    }
  };
  const removeItem = (index) => {
    const newItemList = itemList.filter((item, i) => i !== index);
    console.log(newItemList, index);
    setItemList(newItemList);
  };
  return (
    <main>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="button" onClick={addItem}>
        추가
      </button>
      <TodoBoard itemList={itemList} onRemove={removeItem} />
    </main>
  );
}
export default TodoList;
