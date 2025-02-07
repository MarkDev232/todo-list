import React, { FC , ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange =(event: ChangeEvent<HTMLInputElement>): void=>{
    if(event.target.name === "task")
      setTask(event.target.value);
    else
    setDeadline(Number(event.target.value));
  };
  const addTask = (): void =>{
    const newtask: ITask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newtask]);
    console.log(todoList);
  }
  return (
    <div className="App">
      {"Hello World"}
      <div className ="header">
        <div className="inputcontainer">
        <input type="text" 
            placeholder="Task..." 
            name='task'
            onChange={handleChange}/>
        <input type="number" 
            placeholder="DeadLine (in Days)..."
            name='deadline'
            onChange={handleChange}/>
        </div>
        <button>Add Task</button>
      </div>
      <div className ="todoList"
      onClick={addTask}>
        sdsdsd</div>
      
    </div>
  );
}

export default App;
