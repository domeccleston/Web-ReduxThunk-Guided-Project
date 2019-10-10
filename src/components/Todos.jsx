import React, { useReducer } from 'react';
import uuid from 'uuid';

const todosApi = 'http://localhost:4000/todos';

const MARK = 'MARK';

const initialState = [
  { id: uuid(), name: "sweeping", completed: false },
  { id: uuid(), name: "mopping", completed: false },
  { id: uuid(), name: "washing dishes", completed: false },
];

function reducer(state, action) {
  switch (action.type) {
    case MARK:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo;
        return {
          id: todo.id,
          name: todo.name,
          complete: action.payload.isComplete,
        };
      });
    default:
      return state;
  }
}

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const markTodo = (id, isComplete) => () => {
    dispatch({
      type: MARK,
      payload: { id, isComplete },
    });
  };

  return (
    <div className='component'>
      {
        todos.map((todo) => (
          <div key={todo.id} style={{ color: !todo.complete ? 'red' : 'green' }}>
            {todo.name}
            <button onClick={markTodo(todo.id, true)}>Mark complete</button>
            <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
          </div>
        ))
      }
    </div>
  );
}
