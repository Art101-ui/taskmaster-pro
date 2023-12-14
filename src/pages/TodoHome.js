import React, {useMemo,useState} from 'react'
import SearchBar from '../components/SearchBar'
import SortandFilter from '../components/SortandFilter'
import TaskItem from '../components/TaskItem'
import AddTaskButton from '../components/AddTaskButton'
import { searchItems, filteredtodos, sortedTodos } from '../utilis/utilisfn'

const TodoHome = ({onView,listformData,onSelectedIdChange}) => {

  // Search state variable
  const [searchInput, setSearchInput] = useState('')
  const [searchedText, setSearchedText] = useState('')

  // Sort state variable
  const [sortId, setSortId] = useState(0)

  // Filter state variable
  const [filteredItems, setFilteredItems] = useState([])
  
  // search
  function handleChange(e){
    setSearchInput(e.target.value)
  }

  function handleSearch(value){
    setSearchedText(value)
  }
  
  // filter
  function handleFilterItems(toggle){
    if(filteredItems.some(item=>item.id===toggle.id)){
      setFilteredItems(filteredItems.filter(id=> id.id!==toggle.id))
    }else{
      setFilteredItems([...filteredItems,toggle])
    }
}

// Sort
   function handleSort(sortId){
      setSortId(sortId)
   }

  const filteredTodos = useMemo(()=> filteredtodos(listformData,filteredItems),[listformData,filteredItems])
  const sortTodos = useMemo(()=> sortedTodos(filteredTodos,sortId),[filteredTodos,sortId])
  const searchTodos = useMemo(()=> searchItems(sortTodos,searchedText),[sortTodos,searchedText])


 
 
  let tasklist = searchTodos.map(item=>{
    return <TaskItem onView={onView}  key={item.id} item={item}  onSelectedIdChange={onSelectedIdChange} />
  })

  return (
    <div className='todoHome'>
        <SearchBar searchInput={searchInput} onSearch={()=>handleSearch(searchInput)} onChange={handleChange}/>
        <SortandFilter sortId={sortId} onSort={handleSort} tasklist={listformData} filteredItems = {filteredItems}  onFilterItems={handleFilterItems}/>
        {tasklist}
        <AddTaskButton onSelectedIdChange={onSelectedIdChange} onShow = {()=>onView(1,'add')}/>
    </div>
  )
}

export default TodoHome