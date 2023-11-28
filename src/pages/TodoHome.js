import React from 'react'
import SearchBar from '../components/SearchBar'
import SortandFilter from '../components/SortandFilter'
import TaskItem from '../components/TaskItem'

const TodoHome = () => {
  return (
    <div className='todoHome'>
        <SearchBar/>
        <SortandFilter/>
        <TaskItem/>
    </div>
  )
}

export default TodoHome