import React from "react";

const styles = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={styles}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
