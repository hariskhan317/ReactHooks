import React, { useState } from "react";

function App() {
  // const [state, setState] = useState({count: 4, theme:"blue"});
  // const count = state.count;
  // const theme = state.theme;

  // we can use two state to define value seperatly to do our task rather than defining values seperaly.
  // forexample

  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState('blue');

  const function1 = () => {
    setCount((prevState) => prevState + 1);
    setTheme('red');
  }

  return (
    <div className="App">
      <span>{count}</span>
      <span>{theme}</span>
      <div>
        <button onClick={function1}>+</button> 
      </div>
    </div>
  );
}

export default App;
 