import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'incrementedDispatch',
  DECREMENT : 'decrementedDispatch',
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1};
    case ACTIONS.DECREMENT:
      return { count: state.count - 1};
    default:
      return state
  }
}
function App() {
  const [state, displatch]  = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <button onClick={() => displatch({type: 'incrementedDispatch'})}>+</button>
      <div>{state.count}</div>
      <button onClick={() => displatch({type: 'decrementedDispatch'})}>-</button>
    </div>
  );
}

export default App;
