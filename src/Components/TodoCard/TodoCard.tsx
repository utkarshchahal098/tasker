import React from 'react'
import { Todo } from '../../Model/Todo'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdOutlineDownloadDone} from 'react-icons/md'
import './TodoCard.css'

interface props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoCard:React.FC<props> = ({todo,todos,setTodos}) => {
  return (
    <form className='TodoCard'>
      <span className='TodoCard__single-text'>
        {todo.todo}
      </span>
      <div>
        <span className='icon'><AiFillEdit/></span>
        <span className='icon'><AiFillDelete/></span>
        <span className='icon'><MdOutlineDownloadDone /></span>
      </div>
    </form>
  )
}

export default TodoCard
