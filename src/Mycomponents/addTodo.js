import React, { useState } from 'react';

export default function AddTodo({addTodo}) {
  const [title, setTitle]= useState("");
  const [desc,setDesc]= useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!title  || !desc){
      alert("Title or Description cannot be blank")
    }else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="max-w-70% mx-auto">
    <h3 className="text-3xl font-bold text-green-700 text-center">Add a Todo</h3>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='title'>
          Todo Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter your Title"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="desc">
          Todo Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="desc"
          type="text"
          placeholder="Enter your description"
          value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}
