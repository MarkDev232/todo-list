import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [taskid, setTaskid] = useState<number>(1);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [iscompleted, setIscompleted] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else setDeadline(Number(event.target.value));
  };
  const addTask = (): void => {
    if (!task.trim()) {
        alert("Task name cannot be empty!");
        return;
    }if (deadline == 0) {
      alert("Task number cannot be 0!");
      return;
    }if (deadline < 0) {
      alert("Task number cannot be lestthan 0!");
      return;
    }
    // Calculate deadline as today's date + input days
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + deadline);

  // Format the date as YYYY-MM-DD
  const formattedDeadline = currentDate.toISOString().split("T")[0];

    const newtask: ITask = {
      taskid: taskid,  // Assuming taskid is a state variable
      taskName: task,
      deadline: formattedDeadline,
      iscompleted : iscompleted
    };

    setTodoList([...todoList, newtask]);
    setTaskid(taskid + 1); // Increment task ID
    setTask("");           // Clear input
    setDeadline(0);
    setIscompleted(false)        // Reset deadline
};


const completeTask = (taskidToComplete: number): void => {
  setTodoList((prevTasks) =>
    prevTasks.map((task) =>
      task.taskid === taskidToComplete ? { ...task, iscompleted: true } : task
    )
  );
};

  return (
    <div className="App">
      <h1 className="heading">Todo List</h1>
      <div className="header">
        <div className="inputcontainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="DeadLine (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        <h1 className="taskh1">Task</h1>
        <table>
          <thead>
            <tr className="tableHeader">
              <th>Task ID</th>
              <th>Task</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {todoList
    .filter((task: { iscompleted: any; }) => !task.iscompleted) // Hide completed tasks
    .map((task: ITask, key: number) => (
      <TodoTask
        key={key}
        taskid={task.taskid}
        task={task}
        completeTask={completeTask}
      />
    ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
