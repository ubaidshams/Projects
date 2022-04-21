import React, { useState } from "react";

const TodoInput = ({ addItems, setTodo }) => {
  let [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (value === "") {
      alert("Please add  something to-do");
    }
    addItems(value);
    setValue("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TodoInput;
