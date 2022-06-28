import React from "react";
import Task from "./Task";

function TaskList({ taskData, onTaskDelete }) {
  const taskList = taskData.map(task => {
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onTaskDelete={onTaskDelete}
      />
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
