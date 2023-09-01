import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskdesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskdesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTasks);
  };

  const editTaskById = (id, newTitle, newTaskDesc) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id)
        return {
          id,
          title: newTitle,
          taskdesc: newTaskDesc,
        };

      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
