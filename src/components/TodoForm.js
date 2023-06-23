import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        if(value){
            e.preventDefault();

            addTodo(value);
            setValue("")
        }else{
            alert("You Can't add an empty task");
        }
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" 
        placeholder='Write your task here '
        value={(value)}
        onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
