import { ADD_TODO } from '../../src/actions/types'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const nextId = state.reduce((max, todo) => (Math.max(max, todo.id)), 0) + 1
      return [
        ...state,
        { id: nextId, text: action.payload.text, complete: false },
      ]
    }
    default:
      return state
  }
}

export default todosReducer
