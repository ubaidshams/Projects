import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const CustomRoutes = ({
  todo,
  addItems,
  setTodo,
  isEdit,
  deleteItems,
  updateItem,
  setEdit,
}) => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/view",
      element: (
        <TodoItem
          todo={todo}
          setTodo={setTodo}
          deleteItems={deleteItems}
          updateItem={updateItem}
          isEdit={isEdit}
          setEdit={setEdit}
        />
      ),
    },
    {
      path: "/add",
      element: <TodoInput addItems={addItems} />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;
