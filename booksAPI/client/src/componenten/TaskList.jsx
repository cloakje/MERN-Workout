import React from "react";


const TaskList = ({ tasks }) => {
    return (
      <div>
        <h1>Tasks</h1>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    );
  };
  
  export default TaskList;
  