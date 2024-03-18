import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="bg-gray-800 p-2">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex container-fluid">
        <span className="text-white text-lg font-bold ">{props.title}</span>
      </div>
      <div className="hidden md:flex">
        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white mx-3 px-4 py-2 rounded-md text-sm font-medium">About</Link>
      </div>
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"></path>
          </svg>
        </button>
      </div>
      <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>
          </form>
    </div>
  </nav>
  )
}

Header.defaultProps ={
  title:"Your Title Here",
  SearchBar : true
}

Header.propTypes ={
  title : PropTypes.string,
  SearchBar: PropTypes.bool.isRequired
  
}
