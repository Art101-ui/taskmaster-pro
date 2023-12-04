import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

let sortArray = [
  {id:0, name:'Default', isChecked: true},
  {id:1, name:'Ascending Date', isChecked: false},
  {id:2, name:'Descending Date', isChecked: false},
  {id:3, name:'Ascending Complexity', isChecked: false},
  {id:4, name:'Descending Complexity', isChecked: false},
  {id:5, name:'Ascending Priority', isChecked: false},
  {id:6, name:'Descending Priority', isChecked: false},
]

const SortandFilter = () => {
  let sortItems = sortArray.map((item)=>{
    return (
      <li className='listItems' key={item.id}>{item.name} <input type="checkbox" checked={item.isChecked} className="checkbox-round"/></li>
    )
  })

  return (
    <div className='sortFilter'>
      <div className='sortWrapper'>
        <div className='sort'>
           <p>Sort</p>
           <IoIosArrowDown />
        </div>
        <ul className='sortItems'>
         {sortItems}
        </ul>
      </div>


      <div className='filterWrapper'>
        <div className='filter'>
           <p>Filter</p>
           <IoIosArrowDown />
        </div>
        <ul className='filterItems'>
        <li>new</li>
        <li>new</li>
        <li>new</li>
        <li>new</li>
        <li>new</li>
        </ul>
      </div>

    </div>
  )
}



export default SortandFilter