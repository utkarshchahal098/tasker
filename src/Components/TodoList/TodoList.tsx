import React from 'react'
import { Todo } from '../../Model/Todo'
import "./TodoList.css"
import TodoCard from '../TodoCard/TodoCard'

interface props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<props> = ({todos, setTodos}) => {
  return (
        <div className='todos'>
      {todos.map((t)=>(
        <TodoCard 
            todo={t}  
            key={t.id} 
            todos={todos} 
            setTodos={setTodos}></TodoCard>
      ))}
    </div>
    
  )
}

export default TodoList
