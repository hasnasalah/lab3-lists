
import TaskItem from "../TaskItem/TaskItem.tsx";
import type { TaskListProps } from "../../types/index.ts";
import type {Task} from "../../types/index.ts"
export default function TaskList({tasks, onStatusChange,onDelete }: TaskListProps) {

   
  return (
    <ul>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

