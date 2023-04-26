import React from "react";
import Task from "./Task";

function TaskList(prop) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task key={prop} />
    </div>
  );
}

export default TaskList;
