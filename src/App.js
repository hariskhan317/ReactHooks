import React, { useState, useCallback } from "react";
import GetList from './getList'


function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false)
  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number])
  function handleTheme() {
    setTheme(!theme);
  }
  return (
    <div style={{backgroundColor: theme ? 'pink' : 'green'}} className="App">
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={handleTheme}>TOGGLE</button>
      <GetList getItem={getItem} />
    </div>
  );
}

export default App;
