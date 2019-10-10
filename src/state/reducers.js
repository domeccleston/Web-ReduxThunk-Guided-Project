// (3)
// import { INCREMENT, DECREMENT, RESET } from "./actionTypes";
import * as types from './actionTypes';
// - rename the reducer, give it a unique name
// - export the reducer
// - make sure the reducer is a "pure" function
// - which takes state (slice) and an action
// - NO RANDOMNESS no uuid() no moment.js no Math.random()
// - and returns FRESH NEW STATE (slice)
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
