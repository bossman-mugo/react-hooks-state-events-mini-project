import React, { useState } from "react";

function Task(props){
  const [isCompleted, setIsCompleted] = useState(false);
  const {text, category} = props;

  function handleCheckBocClick(){
    setIsCompleted(!isCompleted);
  };

  function handleDeleteClick(){
    props.deleteTask(props.id);
  };


  return (
    <div className={isCompleted ? "task completed" : "task"}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckboxClick} />
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;














