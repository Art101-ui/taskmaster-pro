import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='wrapper'>
      <input type="text" className='searchBar' placeholder="Search"/>
      <IoSearch className='iconSearch'/>
      <div className='bg-button'>
       <FaArrowRight className='searchButton' />
      </div>
    </div>
  )
}

export default SearchBar