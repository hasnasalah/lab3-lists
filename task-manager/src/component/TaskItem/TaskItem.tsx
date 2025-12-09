import { useState } from "react";
import type { TaskItemProps } from "../../types/index";
import type { TaskStatus } from "../../types/index";

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const [status, setStatus] = useState<string>(task.status);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as TaskStatus;
    setStatus(newStatus);
    onStatusChange(task.id, newStatus);
  };

  return (
 <li className="task-item">

  <div className="task-item-header">
    <h2>{task.title}</h2>

    <div className="controls">
      <select value={status} onChange={handleChange}>
        <option value={task.status}>{task.status}</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  </div>

  <div className="task-item-body">
    <p className="description">{task.description}</p>

    <div className="task-item-footer">
      <p className={`priority-badge ${task.priority}`}>
       Priority : {task.priority}
      </p>
      <p className="due">Due: {task.dueDate}</p>
    </div>
  </div>

</li>

  );
}
