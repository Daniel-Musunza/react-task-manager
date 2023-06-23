import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
      if(value){
        e.preventDefault();

        editTodo(value, task.id);
        setValue("");
      }else{
        alert("You Can't add an empty task");
    }
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" 
        placeholder='task '
        value={(value)}
        onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
