import React, { createContext, useState } from "react";

export let GlobalState = createContext();

const GlobalStateC = ({ children }) => {
  let [todoList, setTodoList] = useState([]);
  let addTask = task => {
    let newTodo = [...todoList, task];
    setTodoList(newTodo);
  };
  let editTask = index => {
    let newTodo = [...todoList];
    let task = prompt("Enter a new task");
    newTodo.splice(index, 1, task);
    setTodoList(newTodo);
  };
  let deleteItem = index => {
    let newTodo = [...todoList];
    newTodo.splice(index, 1);
    console.log(newTodo);
    setTodoList(newTodo);
  };
  return (
    <GlobalState.Provider
      value={{
        todoList: todoList,
        addTask: addTask,
        editTask: editTask,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalStateC;
