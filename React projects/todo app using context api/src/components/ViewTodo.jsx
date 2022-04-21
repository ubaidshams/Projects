import React, { Fragment, useContext } from "react";
import { GlobalState } from "../apis/GlobalState";

const ViewTodo = () => {
  let { todoList, editTask, deleteItem } = useContext(GlobalState);

  return (
    <section className="viewBlock">
      {todoList.map((todo, index) => {
        return (
          <div key={index} className="task">
            <p>
              {index + 1}.{todo}
            </p>
            <button
              onClick={() => {
                editTask(index);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteItem(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ViewTodo;
