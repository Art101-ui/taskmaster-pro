import React,{useState} from 'react'
import { FaArrowLeft,FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const AddTaskForm = (props) => {
  const {taskname, due_date, select_time, checklist,onTaskName, onDueDate, onSelectTime, onChecklist, onTags, priority, onPriority, complexity, onComplexity, onView, onDeleteItem } = props

//   state variables
  const [checklistInput, setChecklistInput] = useState('')
  const [tagInput, setTagInput] = useState('')

  function handleChecklistInput(e){
    setChecklistInput(e.target.value)
  }

  function handleTagInput(e){
    setTagInput(e.target.value)
  }


//   Priority and Complexity level
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
  
//   checklist array
 let checklistArr = checklist.map(item=>{
    return(
        <li className='item' key={item}>
            {item}
            <div className='cancel-wrapper' onClick={()=>onDeleteItem(item)}>
              <ImCross className='cancel'/>
            </div>
        </li>
    )
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
            <input type="text" className='searchBar' value={taskname} onChange={onTaskName}/>
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
                    <input type='date' value={due_date} onChange={onDueDate}/>
                </div>
                <div className="time">
                    <h2>Select Time</h2>
                    <input type='time' value={select_time} onChange={onSelectTime}/>
                </div>
            </div>
            <div className="checklist">
                <h2>Add Checklist</h2>
                <div className="checklist-input">
                  <input type="text" value={checklistInput} onChange={handleChecklistInput}/>
                  <div className="addChecklist" onClick={()=>{
                    setChecklistInput('')
                    onChecklist(checklistInput)}}>
                    <FaPlus className='plus-form' />
                  </div>
                </div>
                <ul className = 'checklistItems'>{checklistArr}</ul>
            </div>
            <div className="tags">
                <h2>Add Tags</h2>
                <input type="text" placeholder='Tag 1,Tag 2....' value={tagInput} onChange={handleTagInput}/>
            </div>
            <div className='saveTask'>
            <button className='addButton'>Save Task</button>

            </div>
        </div>
    </div>
  )
}

export default AddTaskForm