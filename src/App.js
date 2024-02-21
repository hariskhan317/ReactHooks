import React, { useState, useEffect } from "react";

function App() {
  const [resource, setResource] = useState('posts');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const apiFetch = async () => {
      try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        const data = await responce.json();
        console.log(`${resource}`, data);
        setItems(data);
      } catch (error) {
        console.log(error)
      }
    }

    apiFetch();
  },[resource])
  return (
    <div className="App">
      <button onClick={() => setResource('posts')}>posts</button>
      <button onClick={() => setResource('users')}>users</button>
      <button onClick={() => setResource('comments')}>comments</button>
      <p>{resource}</p> 
      <ul>
        {items.map((item) => (
          //  <li key={item.id}>{item.title || item.name}</li>
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
