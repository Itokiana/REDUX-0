let id = 3

const initialState = [
  {
    id: 1,
    title: 'Test 1',
    completed: false
  },
  {
    id: 2,
    title: 'Test 2',
    completed: true
  }
]

export const ADD_TODO_ACTION =  'ADD_TODO_ACTION'
export const UPDATE_TODO_ACTION =  'UPDATE_TODO_ACTION'
export const DELETE_TODO_ACTION =  'DELETE_TODO_ACTION'


export function todoReducer(state = initialState , action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }]

    case UPDATE_TODO_ACTION:
      return state.map(todo => {
        if( todo.id === action.payload.id ) {
          return { ...todo, ...action.payload }
        } else {
          return todo
        }
      })

    case DELETE_TODO_ACTION:
      return state.filter( todo => todo.id !== action.payload)
  
    default:
      return state
  }
}
