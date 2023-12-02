import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SortandFilter from '../components/SortandFilter'
import TaskItem from '../components/TaskItem'
import AddTaskButton from '../components/AddTaskButton'
import AddTaskForm from './AddTaskForm'

const TodoHome = ({onView}) => {

  return (
    <div className='todoHome'>
        <SearchBar/>
        <SortandFilter/>
        <TaskItem/>
        <AddTaskButton onShow = {onView}/>
    </div>
  )
}

export default TodoHome