import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => {
            // Assuming you have a way to remove a task
          }}
        />
      ))}
    </div>
  );
};

export default TaskList;