import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Counter(props) {
  // `count` comes from the state of the app
  // `increment` is an action creator
  // THE GOODIES COME FROM PROPS!!!!! YOU WILL FORGET THIS
  const { count, increment, decrement } = props;
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

// `connect` PLUGS THE APP STATE AND THE ACTION CREATORS
// INTO THE COMPONENT!!! (through its props)
export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(Counter);

// NOTE: we could inject this instead of the 'state => state' callback
// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   };
// }
