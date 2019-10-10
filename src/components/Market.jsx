import React, { useReducer } from 'react';
import uuid from 'uuid';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
  cart: [],
  stock: {
    fruits: ['pear', 'mango', 'banana', 'kiwi'],
    meats: ['beef', 'chicken', 'fish'],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: state.cart.concat(action.payload) };
    default:
      return state;
  }
}

export default function Market() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = name => dispatch({
    type: ADD_TO_CART,
    payload: { id: uuid(), name },
  });

  return (
    <div className="component">
      <ItemsList items={state.stock.fruits} addToCart={addToCart} />
      <ItemsList items={state.stock.meats} addToCart={addToCart} />
      <Cart items={state.cart} />
    </div>
  );
}

function Cart({ items }) {
  return (
    <>
      <h5>Cart:</h5>
      {
        items.length
          ? items.map(item => <div key={item.id}>{item.name}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Item({ name, addToCart }) {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function ItemsList({ items, addToCart }) {
  return (
    <>
      {
        items.map(
          (itemName) => (
            <Item
              key={itemName}
              name={itemName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}
