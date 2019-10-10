// (3)
import * as types from './actionTypes';
// - rename the reducer, give it a unique name, expose it
// - make sure the reducer is a "pure" function
// - which takes state (slice) and an action as args
// - and returns FRESH NEW STATE (slice)
// - NO RANDOMNESS no uuid() no moment.js no Math.random()
// - we need a default parameter to supply the initial value for the slice
const initialValueCount = 0;
export function countReducer(count = initialValueCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}

const initialFormState = {
  fname: '',
  lname: '',
};
export function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}

const initialCart = [];
export function cartReducer(state = initialCart, action) {
  // implement
  return state;
}

const intialStock = { meats: [], fruits: [] };
export function stockReducer(state = intialStock, action) {
  // implement
  return state;
}
