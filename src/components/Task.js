import React, { useState } from "react";

function Task(props){
  const [isCompleted, setIsCompleted] = useState(false);
  const {text, category} = props;

  function handleCheckBoxClick(){
    setIsCompleted(!isCompleted);
  };

  function handleDeleteClick(){
    props.deleteTask(props.id);
  };


  return (
    <div className={isCompleted ? "task completed" : "task"}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckBoxClick} />
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;














