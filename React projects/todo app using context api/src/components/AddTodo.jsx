import React, { useContext, useState } from "react";
import { GlobalState } from "../apis/GlobalState";

const AddTodo = () => {
  let [newTask, setNewTask] = useState("");
  let { addTask } = useContext(GlobalState);
  let handleSubmit = e => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  return (
    <section className="addBlock">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task here"
          value={newTask}
          name="newTask"
          onChange={e => {
            setNewTask(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default AddTodo;
