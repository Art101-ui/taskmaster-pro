import React from 'react'
import { FaArrowLeft,FaPlus } from "react-icons/fa";


const AddTaskForm = () => {
  let value= []
  for (let index = 0; index < 10; index++) {
    let list = <li className='list-wrapper'>{index + 1}</li>
    value.push(list)   
  }

  return (
    <div className='addTaskForm'>
        <div class="header">
            <div className='arrowLeft'>
               <FaArrowLeft />
            </div>
            <h1>Add New Task</h1>
        </div>
        <div class="form-content">
            <h2>Task Name</h2>
            <input type="text" className='searchBar'/>
            <h2>Select Priority Level</h2>
            <ul className='flex'>
                {value}
            </ul>
            <h2>Select Complexity Level</h2>
            <ul className='flex'>
                {value}
            </ul>
            <div class="time-content">
                <div class="due-date">
                    <h2>Select Due Date</h2>
                    <input type='date'/>
                </div>
                <div class="time">
                    <h2>Select Time</h2>
                    <input type='time'/>
                </div>
            </div>
            <div class="checklist">
                <h2>Add Checklist</h2>
                <div class="checklist-input">
                  <input type="text"/>
                  <div class="addChecklist">
                    <FaPlus className='plus-form'/>
                  </div>
                </div>
                <ul></ul>
            </div>
            <div class="tags">
                <h2>Add Tags</h2>
                <input type="text" placeholder='Tag 1,Tag 2....'/>
            </div>
            <div className='saveTask'>
            <button className='addButton'>Save Task</button>

            </div>
        </div>
    </div>
  )
}

export default AddTaskForm