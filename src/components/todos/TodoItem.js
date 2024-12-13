import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../store/todoSlice';

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
