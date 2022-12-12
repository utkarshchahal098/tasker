import { useState } from "react"
import "./InputField.css"

interface props{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleInput: (e:React.FormEvent) => void;
}

export const InputField: React.FC<props> = ({todo,setTodo, handleInput}) =>{
    
    return (
        <form className="input" onSubmit={handleInput}>
            <input type="input" 
                   className="input__task"
                   value={todo} 
                   onChange={
                    (e) => setTodo(e.target.value)
                   }
                   placeholder="Enter the task"></input>
            <button type="submit" className="input__go">Go</button>
        </form>
        
    )
}