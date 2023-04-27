import React from "react";
import { useState } from "react";
import Task from "./Task";


function CategoryFilter(categories) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredTasks = selectedCategory === 'All' ? tasks: tasks.filter(task => task.category === selectedCategory)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category => (
        <button key={category} className={category === selectedCategory ? 'selected':null } onClick={handleCategoryClick(category)}>{category}</button>
      )))}
    </div>
  );
}

export default CategoryFilter;
