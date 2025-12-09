// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

import type {TaskFilterProps} from "../../types/index";
import type {TaskStatus} from "../../types/index";


export function TaskFilter({onFilterChange}:TaskFilterProps){


  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as TaskStatus;
    onFilterChange({status} );
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priority = e.target.value as 'low' | 'medium' | 'high' ;
    onFilterChange({ priority });
  };



    return(
 
    <div className="task-filter">
      <select onChange={handleStatusChange}>
        <option  value="">All Status</option>
        <option  value="pending">Pending</option>
        <option  value="in-progress">In Progress</option>
        <option  value="completed">Completed</option>
      </select>

      <select onChange={handlePriorityChange}>
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}




