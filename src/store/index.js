import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todosReducer";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: filterReducer
  }),
  applyMiddleware(thunk)
)



export default store;