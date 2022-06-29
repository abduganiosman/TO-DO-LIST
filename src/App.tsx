import React, {FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTasks';
import { ITask } from './interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);

  //State Interface - Holds multiple states (name and deadline)
  const [todoList, setTodoList] = useState<ITask[]>([]); //Array

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name === "task"){
    setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () : void =>{
    const newTask = {taskName: task, deadline: deadline};

    setTodoList([...todoList, newTask])
    setTask("");
    setDeadline(0);
    console.log(newTask);
  };

  const CompleteTask = (taskNameToDelete: string): void => {
    //loops through all our tasks and if task is not equal to our delete we keep it in our array
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  };

  return (
    <div className="App"> 
    <div className="header">
      <div className="inputContainer">

      <input 
        type = "text" 
        placeholder="Task..." 
        name= "task" 
        value={task}
        onChange={handleChange}/>

      <input 
        type = "number" 
        placeholder="Deadline (in Days)..." 
        name = "deadline"
        value={deadline}
        onChange={handleChange}/>

      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="todoList"></div>
    {todoList.map((task: ITask, key: number) =>{
      return <TodoTask key={key} task={task} completeTask = {CompleteTask}/>;
    })}
    </div>

  );
}

export default App;