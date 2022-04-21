import React, { useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./CustomRoutes";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const addItems = task => {
    const newTodoItem = [...todo, task];
    setTodo(newTodoItem);
  };
  const deleteItems = index => {
    const newTodoItem = [...todo];
    newTodoItem.splice(index, 1);
    setTodo(newTodoItem);
  };
  const updateItem = (index, updateTask, setUpdateTask) => {
    const newTodoItem = [...todo];
    // let newTask = prompt(`Enter a new task`);
    newTodoItem.splice(index, 1, updateTask);
    setTodo(newTodoItem);
    setUpdateTask("");
    setEdit(false);
  };
  return (
    <Router>
      <Navbar />
      <CustomRoutes
        todo={todo}
        addItems={addItems}
        setTodo={setTodo}
        deleteItems={deleteItems}
        updateItem={updateItem}
        isEdit={isEdit}
        setEdit={setEdit}
      />
    </Router>
  );
};

export default App;
