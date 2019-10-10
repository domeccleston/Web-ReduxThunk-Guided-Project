import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

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
      <Cart stock={stock} cart={cart} />
    </div>
  );
}

function Cart({ cart, stock }) {
  return (
    <>
      <h5>Cart:</h5>
      {
        cart.length
          ? cart.map(itemId => {
            debugger
            const allItems = stock.meats.concat(stock.fruits);
            const theItem = allItems.find(item => item.id === itemId);
            return <div>{theItem.name}</div>;
          })
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Item({ item, addToCart }) {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => addToCart(item.id)}>Add To Cart</button>
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
