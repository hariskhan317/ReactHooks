import React from 'react'
import {ACTIONS} from './App'
const Todo = ({todo, dispatch}) => {
  return (
    <div style={{background: todo.complete ? 'pink' : 'green'}}>
      <div>{todo.name}</div>
      <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>TOGGLE</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>DELETE</button>
    </div>
  )
}

export default Todo
