import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


const SortandFilter = () => {
  return (
    <div className='sortFilter'>
        <div className='sort'>
           <p>Sort</p>
           <IoIosArrowDown />
        </div>
        <div className='filter'>
           <p>Filter</p>
           <IoIosArrowDown />
        </div>
    </div>
  )
}

export default SortandFilter