import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 mb-4">
  <h1 className="text-2xl font-bold text-purple-600 mb-2">{todo.title}</h1>
  <p className="text-gray-800">{todo.desc}</p>
  <button 
    className="px-4 py-2 mt-2 bg-blue-500 hover:bg-red-500 text-white rounded-md focus:outline-none"
    onClick={() => onDelete(todo)}
  >
    Delete
  </button>
</div>

  )
}
