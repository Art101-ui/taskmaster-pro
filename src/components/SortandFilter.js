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

const SortandFilter = ({tasklist,onSort,onFilterItems,filteredItems}) => {
  const [sortId, setSortId] = useState(0)
  const [sortDisplay, setSortDisplay] = useState(false)
  const [filterDisplay, setFilterDisplay] = useState(false)

  let sortItems = sortArray.map((item)=>{
    return (
      <li className='listItems' key={item.id}>{item.name} <input onChange={()=>{
        setSortDisplay(false)
        handleSort(item.id)
        setSortId(item.id)}} type="checkbox" checked={item.id === sortId} className="checkbox-round"/></li>
    )
  })

  let tagsArray = tasklist.length !== 0 ? tasklist.map(item=>item.tags).join().split(','): []
  let tagsWithId = tagsArray.map((item,index)=>{
    return {id:index,item:item}
  })
  
  let filterItems = tagsWithId.length!==0 && tagsWithId.map((item)=>{
    return (
      <li className='listItems' key={item.id}>{item.item} <input onChange={()=>{
        setFilterDisplay(false)
        onFilterItems(item) 
      }} type="checkbox" checked={filteredItems.some(i =>i.id===item.id)} className="checkbox"/></li>
    )
  })
 

  function handleSort(id){
    let sortedArr = [...tasklist]
    let newArr=null;
    switch (id) {
      case 1:
        // newArr = originalArray
        break;
      case 2:
        // newArr.sort(a,b)
        break;
      case 3:
        newArr = sortedArr.sort((a,b)=>a.complexity_index - b.complexity_index)
        break;
      case 4:
        newArr = sortedArr.sort((a,b)=>b.complexity_index - a.complexity_index)
        break;
      case 5:
        newArr = sortedArr.sort((a,b)=>a.priority_index - b.priority_index)
        break;
      case 6:
        newArr = sortedArr.sort((a,b)=>b.priority_index - a.priority_index)
        break;   
      default:
        break;
    }
    onSort(newArr)
  }

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