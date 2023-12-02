import React from 'react'
import { FaArrowLeft,FaPlus } from "react-icons/fa";



const AddTaskForm = ({ priority, onPriority, complexity, onComplexity, onView}) => {
  let value= [1,2,3,4,5,6,7,8,9,10]
  let valuePriority = value.map(item=>{
    return <li key={item} onClick={e=> {
         onPriority(item)
        console.log(priority)
    }
    } className={priority == item ? 'chosen' : 'checklist-wrapper'}>{item}</li>
  });

  let valueComplexity = value.map(item=>{
    return <li key={item} onClick={e=> {
         onComplexity(item)
        console.log(priority)
    }
    } className={complexity == item ? 'chosen' : 'checklist-wrapper'}>{item}</li>
  })
  

  return (
    <div  className='addTaskForm'>
        <div className="header">
            <div onClick={onView} className='arrowLeft'>
               <FaArrowLeft />
            </div>
            <h1>Add New Task</h1>
        </div>
        <div className="form-content">
            <h2>Task Name</h2>
            <input type="text" className='searchBar'/>
            <h2>Select Priority Level</h2>
            <ul className='flex'>
                {valuePriority}
            </ul>
            <h2>Select Complexity Level</h2>
            <ul className='flex'>
               {valueComplexity}
            </ul>
            <div className="time-content">
                <div className="due-date">
                    <h2>Select Due Date</h2>
                    <input type='date'/>
                </div>
                <div className="time">
                    <h2>Select Time</h2>
                    <input type='time'/>
                </div>
            </div>
            <div className="checklist">
                <h2>Add Checklist</h2>
                <div className="checklist-input">
                  <input type="text"/>
                  <div className="addChecklist">
                    <FaPlus className='plus-form'/>
                  </div>
                </div>
                <ul></ul>
            </div>
            <div className="tags">
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