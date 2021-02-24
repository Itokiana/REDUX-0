import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from '../store/todosActions';
import { filteredTodoSelector } from '../store/todosSelectors';


function TodoItem ({ todo, onToggle, onDelete }) {
  return(
    <li>
      <label>
        <input type="checkbox" checked={ todo.completed } onChange={ () => onToggle(todo) } />
        { todo.title }
        <button onClick={ () => onDelete(todo) }>X</button>
      </label>
    </li>
  )
}


function TodoList ({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={ todo.id } onDelete={ onDelete } />)}
    </ul>
  )
}

function TodoListStore () {
  const todos = useSelector(filteredTodoSelector)
  const dispatch = useDispatch()
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo))
  }, [dispatch])
  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo))
  }, [dispatch])

  return <TodoList todos={ todos } onToggle={ onToggle } onDelete={ onDelete } />
}

// const TodoListStore = connect(
//   (state) => ({
//     todos: todosSelector(state)
//   }),
//   (dispatch) => ({
//     onToggle: todo => dispatch(toggleTodoAction(todo))
//   })
// )(TodoList)

export default TodoListStore