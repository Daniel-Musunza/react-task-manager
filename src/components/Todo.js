import React from 'react';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task} {task.time}hrs
      </p>
      <div>
        <i className="fa-solid fa-pen-to-square" onClick={() => editTodo(task.id)}></i>
        <i className="fa-solid fa-trash" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  );
};
