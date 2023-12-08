import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

let sortArray = [
  {id:0, name:'Default'},
  {id:1, name:'Ascending Date'},
  {id:2, name:'Descending Date'},
  {id:3, name:'Ascending Complexity'},
  {id:4, name:'Descending Complexity'},
  {id:5, name:'Ascending Priority'},
  {id:6, name:'Descending Priority'},
]

const SortandFilter = ({tasklist,onSort,onFilterItems,filteredItems, sortId}) => {
  
  const [sortDisplay, setSortDisplay] = useState(false)
  const [filterDisplay, setFilterDisplay] = useState(false)

  let sortItems = sortArray.map((item)=>{
    return (
      <li className='listItems' key={item.id}>{item.name} <input onChange={()=>{
        setSortDisplay(false)
        onSort(item.id)}} type="checkbox" checked={item.id === sortId} className="checkbox-round"/></li>
    )
  })

  let tagsArray = tasklist.length !== 0 ? tasklist.map((item)=>{
    return item.tags
  }).join().split(','): []
  let tagsWithId = tagsArray.map((item,index)=>{
    return {id:index,item:item}
  })
  
  let filterItems =  tagsWithId.map((item)=>{
    return (
      <li className='listItems' key={item.id}>{item.item} <input onChange={()=>{
        setFilterDisplay(false)
        onFilterItems(item) 
      }} type="checkbox" checked={filteredItems.some(i =>i.id===item.id)} className="checkbox"/></li>
    )
  })
 



  return (
    <div className='sortFilter'>
      <div className='sortWrapper'>
        <div className='sort' onClick={()=>setSortDisplay(sortDisplay=>!sortDisplay)}>
           <p>Sort</p>
           <IoIosArrowDown />
        </div>
        <ul className={sortDisplay ? 'sortItems display-block':'display-none'}>
         {sortItems}
        </ul>
      </div>


      <div className='filterWrapper'>
        <div className='filter' onClick={()=>setFilterDisplay(filterDisplay=>!filterDisplay)}>
           <p>Filter</p>
           <IoIosArrowDown />
        </div>
        <ul className={filterDisplay ? 'filterItems display-block':'display-none'}>
           {filterItems}
        </ul>
      </div>

    </div>
  )
}



export default SortandFilter