import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log(TASKS);

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)

  function handleDelete(event){

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        category={CATEGORIES}/>
      <NewTaskForm />
      <TaskList 
        taskData={TASKS}
        onTaskDelete={handleDelete}
        />
    </div>
  );
}

export default App;
