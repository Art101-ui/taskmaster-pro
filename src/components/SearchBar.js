import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { filterItems } from '../utilis/utilisfn'

const SearchBar = ({searchInput,onChange,onSearch}) => {
  return (
    <div className='wrapper'>
      <input onChange={onChange} value={searchInput}  type="text" className='searchBar' placeholder="Search"/>
      <IoSearch className='iconSearch'/>
      <div className='bg-button' onClick={onSearch}>
         <FaArrowRight className='searchButton' />
      </div>
    </div>
  )
}

export default SearchBar