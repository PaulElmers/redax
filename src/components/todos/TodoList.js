import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { tasks, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
