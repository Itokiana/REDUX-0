import { createSelector } from "reselect"
import { filterSelector } from "./filterSelectors"

export const todosSelector = ({ todos }) => todos

export const filteredTodoSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    if( filter === null ) {
      return todos
    }

    return todos.filter(todo => todo.completed === filter)
  }
)

// export const filteredTodoSelector = ({ todos, filter }) => {
//   if( filter === null ) {
//     return todos
//   }

//   return todos.filter(todo => todo.completed === filter)
// }