import React from 'react'

export default function About() {
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About Todo List Application</h2>
        <p className="text-lg mb-4">Welcome to the Todo List Application! This application helps you organize your tasks efficiently.</p>
        <h3 className="text-xl font-bold mb-2">Features</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Add new tasks: You can easily add new tasks by providing a title and description.</li>
          <li>Delete tasks: Remove completed or unnecessary tasks with a simple click.</li>
          <li>View list of tasks: Your tasks are displayed in a clean and organized list format.</li>
          <li>Data Persistence: Your tasks are saved locally in your browser using LocalStorage, ensuring that your tasks are retained even after closing the browser.</li>
        </ul>
        <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>React: A JavaScript library for building user interfaces.</li>
          <li>React Router: Provides navigation and routing functionality for single-page applications.</li>
          <li>LocalStorage: HTML5 feature used to store data locally within the user's browser.</li>
        </ul>
        <p className="text-lg">Thank you for using the Todo List Application. We hope it helps you stay organized and productive!</p>
      </div>
    );
  
}
