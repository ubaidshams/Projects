import React from "react";
import { useRoutes } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import ViewTodo from "../components/ViewTodo";
import Home from "../components/Home";
const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <AddTodo />,
    },
    {
      path: "/view",
      element: <ViewTodo />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;
