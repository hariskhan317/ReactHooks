import React, { useReducer, useState } from 'react'
import Todo from './todo'
export const ACTIONS = {
  ADD_TODO: 'addTodoDispatch', 
  TOGGLE_TODO: 'toggleTodoDispatch', 
  DELETE_TODO: 'deleteTodoDispatch', 
}

// todos is going to be the list which contains all the todo
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo, complete: !todo.complete
          };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false}
}

function App() {
  const [name, setName] = useState('');
  // passing reducer function and empty array where we will store our array
  const [todos, dispatch] = useReducer(reducer, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })
    setName('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
      {todos.map((todo) => {
        return <Todo todo={todo} dispatch={dispatch} />
      })}
      {console.log(todos)}
    </div>
  );
}

export default App;
