import { useState } from 'react'
import TaskList from './component/TaskList/TaskList';
import { TaskFilter } from './component/TaskFilter/TaskFilter';
import type{Task} from "./types"
import  type {TaskStatus} from "./types/index"

import './App.css'

function App() {
    const initialTasks: Task[] = [
    { id: "1", title: "Task 1", description: "Do X", status: "Pending", priority: "low", dueDate: "2025-12-10" },
    { id: "2", title: "Task 2", description: "Do Y", status: "In Progress", priority: "medium", dueDate: "2025-12-12" },
    { id: "3", title: "Task 3", description: "Do Z", status: "Completed", priority: "high", dueDate: "2025-12-15" },
  ];
  const [filredTasks,setFiltredTasks]=useState<Task[]>(initialTasks);
  const [tasks,setTasks]=useState<Task[]>(initialTasks);

  const handleFilterChange = (filters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => {
  const { status, priority } = filters;
  setFiltredTasks(
    tasks.filter(task => {
      const statusMatch = !status||task.status === status;
      const priorityMatch =!priority||task.priority === priority;
      return statusMatch && priorityMatch;
    })
  );
};
const handleStatusChange = (id: string, newStatus: TaskStatus) => {
  const updatedTasks = tasks.map(task =>
    task.id === id ? { ...task, status: newStatus } : task
  );

  setTasks(updatedTasks);
  setFiltredTasks(updatedTasks
  );
};

const handleDelete = (id: string) => {
    const updatedList = tasks.filter((item) => item.id !== id);
     setTasks(updatedList);
    setFiltredTasks(updatedList);
  };

 return (
    <div className="app-container">
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList tasks={filredTasks} onDelete={handleDelete} onStatusChange={handleStatusChange} />
    </div>
  );
}
export default App
