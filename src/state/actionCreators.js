import axios from 'axios';
import * as types from './actionTypes';

const todosApi = 'http://localhost:4000/todos';
const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random, async...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF!
export function increment() {
  return { type: types.INCREMENT };
}

export function decrement() {
  return { type: types.DECREMENT };
}

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value,
    },
  };
}

export function addToCart(itemId) {
  // implement
}

export function getFruits(fruits) {
  // implement
}

export function getMeats(fruits) {
  // implement
}

export const getStock = () => dispatch => {
  // implement
};
