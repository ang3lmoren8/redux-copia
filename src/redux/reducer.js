let id = 0

function reducer(state = [], action) {
  switch (action.type) {

    case 'ADD':
      id++
      return [
        ...state,
        {
          id,
          text: action.payload.text
        }
      ]

    case 'DELETE':
      const index = state.findIndex(item => item.id === action.payload.id)
      state.splice(index, 1)
      return [...state]

    case 'EDIT':
      const item = state.find(item => item === action.payload.id)
      item.complete != item.complete
      return [...state]

    default:
      return state

  }
}

export default reducer
