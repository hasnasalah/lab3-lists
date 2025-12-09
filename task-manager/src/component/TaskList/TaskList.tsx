
import TaskItem from "../TaskItem/TaskItem.tsx";
import type { TaskListProps } from "../../types/index.ts";
import {useState} from 'react'
import type {Task} from "../../types/index.ts"
export default function TaskList({tasks, onStatusChange }: TaskListProps) {

const [task, setTasks] = useState<Task[]>(tasks);
const handleDelete = (id: string) => {
    const updatedList = task.filter((item) => item.id !== id);
    setTasks(updatedList);
  };
   
  return (
    <ul>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

