import React, { useState } from 'react';
import './App.css';
import { InputField } from './Components/InputField/InputField';
import TodoList  from './Components/TodoList/TodoList';
import { Todo } from './Model/Todo';

const App: React.FC = () => {
  const[todo, setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);

  const handleTodos = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("");
    }

  }
  console.log(todos)
  return (
    <div className="App">
    <span className="heading">Tasker</span>

    <InputField todo={todo} setTodo={setTodo} handleInput={handleTodos}></InputField>
    <TodoList todos={todos} setTodos={setTodos}></TodoList>
    {/* {todos.map((t)=>(
      <li>{t.todo}</li>
    ))} */}
    </div>
  );
}

export default App;
