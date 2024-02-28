import React, {useEffect, useMemo, useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => {slowFunction(number);},[number])
  const themestyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : " black", 
    }
  }, [dark])

  useEffect(() => {
    console.log('theme Changed')
  },[themestyle])

  return (
    <div className="App">
      <input value={number} type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
      <div>
      <button onClick={() => setDark(!dark)}>change theme</button>
      </div>
      <button style={themestyle}>{doubleNumber}</button>
    </div>
  );

  function slowFunction(num) {
    console.log('Slow Function');
    for (var i = 0; i <= 10000; i++) {}
    return num * 2;
  }
}

export default App;
