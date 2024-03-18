import React from 'react'
import TodoItem from "./todoItem";

export default function Todos(props) {
  return (
    
    <div class="min-h-70vh  mx-60">
      <div className="container">
      <h3 className="text-3xl font-bold text-pink-500 text-center">Todos List</h3>
      {props.todos.length===0 ? <h1 className="text-4xl font-bold text-yellow-500 text-center mt-20">No Todos To display</h1> :
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
          </>)
          
      })
      }
      
    </div>
    </div>

  )
}
