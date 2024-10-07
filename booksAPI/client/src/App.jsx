import AddTask from "./componenten/AddTask";
import TaskList from "./componenten/TaskList";
import "./App.css";
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/tasks/')
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
 
    fetchTasks();
  }, []);
 
  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <AddTask onTaskAdded={handleTaskAdded} />
      {/* Geef de tasks door aan TaskList */}
      <TaskList tasks={tasks} />  
    </>
  );
}

export default App;
