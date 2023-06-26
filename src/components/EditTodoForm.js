import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const [time, setTime] = useState(task.time);

    const handleSubmit = e => {
      if(value){
        e.preventDefault();
        editTodo(value, time, task.id);
        setTime('');
        setValue("");
      }else{
        alert("empty task");
    }
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" 
        placeholder='task '
        value={(value)}
        onChange={(e) => setValue(e.target.value)}></input>
          <input
        type="time"
        className="time-input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
