import React from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { convertDate, scalePosition, getTaskProgress, getTime, deadline, deadlineColor, textColor, pathColor } from '../utilis/utilisfn';
import { useTodosContext } from '../context/TodosContext';

const TaskItem = ({item, onView,onSelectedIdChange}) => {
  

  const {listformData, setListFormData} = useTodosContext()
  let taskProgress = getTaskProgress(item.selectedItemIds, item.checklistArr)
  let due_date = convertDate(item.due_date) === '' ? 'No Set Date' : convertDate(item.due_date)
  let select_time = getTime(item.select_time) === '' ? '' : `, ${getTime(item.select_time)}`
  
  
  let priority_position = scalePosition(item.priority_index)
  let complexity_position = scalePosition(item.complexity_index)

  function editTask(id){
    onView(1,'edit')
    onSelectedIdChange(id)
 }
 
 function handleDoneTodo(value){
  setListFormData(listformData.map(item=>{
    if(value.id === item.id){
      return {...item, done: !item.done}
    }else{
      return item
    }
   }))
 }
  

  return (
    <div  className={(item.done ? 'bg-green' : 'bg-white') +" task-content cursor-pointer"} onClick={()=>{
      onSelectedIdChange(item.id)
      onView(2,null)
      }}>
        <div className="task-heading flex">
            <div className="taskName">
              <div className={deadlineColor(deadline(item.due_date),'bg-mediumgreen','bg-mediumorange','bg-mediumred')+" labelColor mr-10"}></div>
              {item.done ? <del>{item.taskname}</del> : item.taskname}
            </div>
            <div className="taskTools">
                <div onClick={(e)=>{
                  e.stopPropagation()
                  editTask(item.id)
                  }} className={deadlineColor(deadline(item.due_date),'bg-lightgreen','bg-lightorange','bg-lightred') + " editTools mr-20"}>
                  <CiEdit className='tool'/>
                </div>
                <div className={deadlineColor(deadline(item.due_date),'bg-lightgreen','bg-lightorange','bg-lightred') + " checkmark"} onClick={(e)=>{
                  e.stopPropagation()
                  handleDoneTodo(item)
                }}>
                  <IoMdCheckmark className='tool'/>           
                </div>
            </div>
        </div>
        <div className="task-body flex">
            <div className="task-info">
                <div><MdOutlineDateRange/> Due Date: <span className={textColor(deadline(item.due_date),'text-darkgreen','text-orange','text-red')+' font-bold'}>{ due_date + select_time }</span>  </div>
                <div><IoMdArrowUp/> Priority: {priority_position} ({item.priority_index==null ? 0 : item.priority_index}/10)</div>
                <div><TiArrowMove/> Complexity: {complexity_position} ({item.complexity_index==null ? 0 : item.complexity_index}/10) </div>
            </div>
            <div>
              <CircularProgressbar className='circularProgress' value={taskProgress*100} text={`${taskProgress*100}%`} styles={buildStyles({textSize:"30px",pathColor:`${pathColor(deadline(item.due_date),'green','orange','red')}`,textColor:"#181818"},)}/>
            </div>
        </div>
        <ul className="tags">
          {
            item.tags.split(',').map(i=>{
              return i!=='' && <li key={i} className={deadlineColor(deadline(item.due_date),'bg-lightgreen','bg-lightorange','bg-lightred') +' listTags'}>{i}</li>
            })
          }   
        </ul>
    </div>
  )
}

export default TaskItem