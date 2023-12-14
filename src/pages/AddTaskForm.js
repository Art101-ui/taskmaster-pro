import React,{useState} from 'react'
import { FaArrowLeft,FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { v4 as uuidv4 } from 'uuid';


// let id = 0;
const initialData = {
  taskname:'',
  priority_index:null,
  complexity_index:null,
  due_date:'',
  select_time:'',
  checklistArr:[],
  selectedItemIds:[],
  tags:''
 }
const AddTaskForm = (props) => {
  const {onView, onUpdate, title, listformData, onListFormDataChange, selectedItem, selectedId } = props
  let initialValue = selectedId !== null ? selectedItem : initialData

  const [formData, setformData] = useState(initialValue)
  const [checklistInput,setChecklistInput] = useState('')


  // Event Handlers
  function handleTaskName(e){
    setformData({
     ...formData,
     taskname:e.target.value
    })
  }

  function handlePriorityIndex(value){
   setformData({
     ...formData,
     priority_index:value
   })
  }

  function handleComplexityIndex(value){
   setformData({
     ...formData,
     complexity_index:value
   })
  }

  function handleDueDate(e){
   setformData({
     ...formData,
     due_date:e.target.value
    })
  }

  function handleSelectTime(e){
   setformData({
     ...formData,
     select_time:e.target.value
    })
  }

  function handleChecklistInput(e){
    setChecklistInput(e.target.value)
  }

  function handleChecklistArr(value){
    setformData({
      ...formData,
      checklistArr:[...formData.checklistArr, value]
     })
   }

   function handleTags(e){
    setformData({
      ...formData,
      tags:e.target.value
     })
   }

   function handleDeleteChecklistItem(value){
    setformData({
      ...formData,
      checklistArr: formData.checklistArr.filter(item=>{
        return item !== value
      })
     })
   }

   function handleSaveTask(){
     onListFormDataChange((prevlistformData)=>[
       ...prevlistformData,
       {id: uuidv4(),...formData}
      ])
    }

   function handleUpdateData(toggleId){
    onListFormDataChange(
      listformData.map(item=>{
        if(item.id === toggleId){
          return {...item, ...formData}
        }else{
          return item
        }
      })
    )
   }


//   Priority and Complexity level
  let value= [1,2,3,4,5,6,7,8,9,10]

  let valuePriority = value.map(item=>{
    return <li key={item} onClick={()=> {
      handlePriorityIndex(item)       
    }
    } className={formData.priority_index === item ? 'chosen' : 'checklist-wrapper'}>{item}</li>
  });

  let valueComplexity = value.map(item=>{
    return <li key={item} onClick={()=> {
      handleComplexityIndex(item)      
    }
    } className={formData.complexity_index === item ? 'chosen' : 'checklist-wrapper'}>{item}</li>
  })
  
//   checklist array
 let checklistArr = formData.checklistArr.map(item=>{
    return(
        <li className='item' key={item}>
            {item}
            <div className='cancel-wrapper' onClick={()=>handleDeleteChecklistItem(item)}>
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
            <h1>{title === 'edit' ? 'Edit Task' : 'Add New Task'}</h1>
        </div>
        <div className="form-content">
            <h2>Task Name</h2>
            <input type="text" className='searchBar' value={formData.taskname} onChange={handleTaskName}/>
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
                    <input type='date' value={formData.due_date} onChange={handleDueDate}/>
                </div>
                <div className="time">
                    <h2>Select Time</h2>
                    <input type='time' value={formData.select_time} onChange={handleSelectTime}/>
                </div>
            </div>
            <div className="checklist">
                <h2>Add Checklist</h2>
                <div className="checklist-input">
                  <input type="text" value={checklistInput} onChange={handleChecklistInput}/>
                  <div className="addChecklist" onClick={()=>{
                    handleChecklistArr(checklistInput)
                    setChecklistInput('')
                    }}>
                    <FaPlus className='plus-form'/>
                  </div>
                </div>
                <ul className = 'checklistItems'>{checklistArr}</ul>
            </div>
            <div className="tags">
                <h2>Add Tags</h2>
                <input type="text" placeholder='Tag 1,Tag 2....' value={formData.tags} onChange={handleTags}/>
            </div>
             {
              title === 'edit' 
              && <div onClick={()=>{
                handleUpdateData(selectedItem.id)
                setformData(initialValue)
                onView()
              }} className='saveTask'>
                <button className='addButton'>Update Task</button>
              </div>
             }
             {
              title === 'add'
              && <div onClick={()=>{
                handleSaveTask()
                setformData(initialValue)
                onView()
              }} className='saveTask'>
                <button className='addButton'>Save Task</button>
              </div>
             }
        </div>
    </div>
  )
}

export default AddTaskForm