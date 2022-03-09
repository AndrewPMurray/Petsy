const ADD = 'cart/ADD'
const REMOVE = 'cart/REMOVE'
const UPDATE_COUNT = 'cart/UPDATE_COUNT'

export const addToCart = (id) => ({
  type: ADD,
  id
})

export const remove = (id) => ({
  type: REMOVE,
  id
})

export const updateCount = (id, count) => {
  if (count < 1) return remove(id)
  return {
    type: UPDATE_COUNT,
    id,
    count
  }
}

const cartReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD: {
      const newState = {...state};
      newState[action.id] = {id: action.id, count: 1}
      return newState;
    }
    case REMOVE: {
      const newState = {...state};
      delete newState[action.id]
      return newState;
    }
    case UPDATE_COUNT: {
      const newState = {...state};
      newState[action.id].count = action.count
      return newState;
    }
    default:
      return state;
  }
}

export default cartReducer;
