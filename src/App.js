import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setValue] = useState('');
  const inputRef = useRef('asa');
  useEffect(() => {
    inputRef.current = name;
  }, [name])
  return (
    <div className="App">
      <input value={name} onChange={(e) => setValue(e.target.value)}/>
      <p>{inputRef.current}</p>
    </div> 
  );
}

export default App;
 