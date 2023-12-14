import React from 'react'
import { FaPlus } from "react-icons/fa6";

const AddTaskButton = ({onShow,onSelectedIdChange}) => {
  return (
    <button onClick={()=>{
      onSelectedIdChange(null)
      onShow()}}  className='addButton'><FaPlus className='plus-sign'/> Add New Task</button>
  )
}

export default AddTaskButton