import React from 'react'
import SearchBar from '../components/SearchBar'
import SortandFilter from '../components/SortandFilter'
import TaskItem from '../components/TaskItem'
import AddTaskButton from '../components/AddTaskButton'

const TodoHome = () => {
  return (
    <div className='todoHome'>
        <SearchBar/>
        <SortandFilter/>
        <TaskItem/>
        <AddTaskButton/>
    </div>
  )
}

export default TodoHome