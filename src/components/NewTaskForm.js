import React, { useState } from "react";
import { CATEGORIES } from "../data";


function NewTaskForm() {
  const {categories, onTaskFormSubmit } = props;
  const [text, setText] = useState('');
  const [category, setCategory] = useState(CATEGORIES[1]);


  function handleTextChange(e){
    setText(e.target.value);
  }

  function handleCategoryClick(e){

  }






  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
