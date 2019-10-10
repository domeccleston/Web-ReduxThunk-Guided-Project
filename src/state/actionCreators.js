import axios from 'axios';
import * as types from './actionTypes';

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

export function addFruits(fruits) {
  return { type: types.ADD_FRUITS, payload: fruits };
}

export function addMeats(fruits) {
  return { type: types.ADD_MEATS, payload: fruits };
}

export function addToCart(item) {
  return { type: types.ADD_TO_CART, payload: item };
}

export const getStock = () => dispatch => {
  const fruitsPromise = axios.get(fruitsApi);
  const meatsPromise = axios.get(meatsApi);

  Promise.all([fruitsPromise, meatsPromise])
    .then(([fruitsAxiosRes, meatsAxiosRes]) => {
      dispatch(addFruits(fruitsAxiosRes.data));
      dispatch(addMeats(meatsAxiosRes.data));
    });
};
