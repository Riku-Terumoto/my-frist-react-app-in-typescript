import React, { useReducer } from "react";

type StateType = { count: number };
const initialState: StateType = {count: 0};

type ActionType = { type: 'decrement' | 'increment' | 'reset'};


function reducer(state: StateType, action: ActionType): StateType | never {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  // useReducerは状態を受け取って新たな状態を返す
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </>
  );
}

export default CounterWithReducer;