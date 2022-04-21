import React, { useState } from "react";

const EditList = ({ updateItem, index }) => {
  let [updateTask, setUpdateTask] = useState("");
  return (
    <div className="editBlock">
      <input
        type="text"
        value={updateTask}
        name="updateTask"
        onChange={e => {
          setUpdateTask(e.target.value);
        }}
        placeholder="Enter the a new task"
      />
      <button
        onClick={() => {
          updateItem(index, updateTask, setUpdateTask);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default EditList;
