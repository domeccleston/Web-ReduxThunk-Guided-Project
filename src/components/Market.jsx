import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

export default connect(
  state => state,
  actionCreators,
)(Market);

export function Market({ addToCart, stock, cart, getStock }) {
  useEffect(() => {
    getStock();
  }, []);

  return (
    <div className="component">
      <ItemsList items={stock.fruits} addToCart={addToCart} />
      <ItemsList items={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

function Cart({ items }) {
  return (
    <>
      <h5>Cart:</h5>
      {
        items.length
          ? items.map((item, idx) => <div key={item.id + idx}>{item.name}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Item({ item, addToCart }) {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  );
}

function ItemsList({ items, addToCart }) {
  return (
    <>
      {
        items.map(
          (item) => (
            <Item
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}
