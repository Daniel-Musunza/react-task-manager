import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== '') {
      addTodo(value, time);
      setValue('');
      setTime('');
    } else {
      alert("You can't add an empty task");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Write your task here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="time"
        className="todo-input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
