import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SortandFilter from '../components/SortandFilter'
import TaskItem from '../components/TaskItem'
import AddTaskButton from '../components/AddTaskButton'
import { filterItems } from '../utilis/utilisfn'

const TodoHome = ({onView,listformData,onSort,onFilterItems,filteredTodos,tags,filteredItems}) => {
  const [searchInput, setSearchInput] = useState('')

  function handleChange(e){
    setSearchInput(e.target.vaue)
  }

  console.log(searchInput)

  let tasklist = filteredTodos.map(item=>{
    return <TaskItem key={item.taskname} item={item} />
  })

  function handleSearch(){
    tasklist = filterItems(filteredTodos,searchInput)
  }

  return (
    <div className='todoHome'>
        <SearchBar searchInput={searchInput} onSearch={handleSearch} onChange={handleChange}/>
        <SortandFilter tags={tags} onSort={onSort} tasklist={listformData} filteredItems = {filteredItems}  onFilterItems={onFilterItems}/>
        {tasklist}
        <AddTaskButton onShow = {onView}/>
    </div>
  )
}

export default TodoHome