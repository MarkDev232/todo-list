import React from "react";
import { ITask } from "../interfaces";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

const TodoTask: React.FC<{
  taskid: number;
  task: ITask;
  completeTask: (taskid: number) => void;
}> = ({ taskid, task, completeTask }) => {
  return (
    <tr key={task.taskid}>
      <td>{task.taskid}</td>
      <td>{task.taskName}</td>
      <td>{task.deadline}</td>
      <td className="action">
        <button onClick={() => completeTask(task.taskid)} className="deletebtn">
          <FaRegTrashAlt />
        </button>
        <button onClick={() => completeTask(task.taskid)} className="completebtn">
          <FaCheck /> Complete
        </button>
      </td>
    </tr>
  );
};

export default TodoTask;
