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
  return {
    type: types.ADD_TO_CART,
    payload: itemId,
  };
}

export function getFruits(fruits) {
  return {
    type: types.ADD_FRUITS,
    payload: fruits,
  };
}

export function getMeats(meats) {
  return {
    type: types.ADD_MEATS,
    payload: meats,
  };
}

export const getStock = () => dispatch => {
  // let fruits;
  // let meats;
  // axios.get(fruitsApi)
  //   .then(res => {
  //     fruits = res.data;

  //     axios.get(meatsApi)
  //       .then(res => {
  //         meats = res.data;
  //       });
  //   });

  const fruitsPromise = axios.get(fruitsApi);
  const meatsPromise = axios.get(meatsApi);

  Promise.all([fruitsPromise, meatsPromise])
    .then(([fruitsApiResponse, meatsPromiseResponse]) => {
      const fruits = fruitsApiResponse.data;
      const meats = meatsPromiseResponse.data;
      // ???????? what now
    });
};
