import React from "react";
import EditList from "./EditList";

const TodoItem = ({ todo, deleteItems, updateItem, isEdit, setEdit }) => {
  return (
    <div className="container">
      <div className="list-container">
        {todo.map((item, index) => {
          return (
            <div className="list">
              <li key={index}>
                {index + 1}.{item}
              </li>
              <div className="button-sec">
                <button
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteItems(index);
                  }}
                >
                  Delete
                </button>
              </div>
              {isEdit ? (
                <EditList index={index} updateItem={updateItem} />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoItem;
