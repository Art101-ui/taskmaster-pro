import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FiRepeat } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { convertDate, scalePosition, getTaskProgress } from '../utilis/utilisfn';

const DetailPage = ({onView,item, onSelectedIds,onRepeatTask,onDeleteTask}) => {
     
    let value = getTaskProgress(item.selectedItemIds, item.checklist)

    let checklistArrId = item.checklist.map((item,index)=>{
        return {id: index++,item:item}
    })

    let checklistArr = checklistArrId.map(a=>{
        return(
            <li className='item  cursor-pointer' key={a.id} onClick={()=>{
                onSelectedIds(item,a.id)
            }}>
                {a.item}
                <div className={(item.selectedItemIds.includes(a.id) && 'bg-blue') + ' done-wrapper'} >
                  <IoMdCheckmark className='done'/>
                </div>
            </li>
        )
    })

  return (
    <div className='detailPage '>
        <div className="detail-heading">
          <div className="back-button" onClick={()=>onView(0,null)}>
             <FaArrowLeft/>
          </div>
          <h1>Task Details</h1>
          <div className="edit-button" onClick={()=>onView(1,'edit')}>
             <CiEdit/>
          </div>
        </div>
        {/* {(done ? 'bg-green' : 'bg-white') +" task-content"} */}
        <div  className= "task-content bg-white mb-15">
            <div className="task-heading flex mb-15">
                <div className="taskName font-22">
                <div className="labelColor mr-10"></div>         
                    {item.taskname}
                </div>
            </div>
            <div className="task-body mb-15 ">
                <div className="task-info font-18">
                    <div className='mb-10'><MdOutlineDateRange/> Due Date:  
                    {convertDate(item.due_date) === undefined && item.select_time === '' ?'': convertDate(item.due_date) + ','+ item.select_time} 
                    </div>
                    <div className='mb-10'><IoMdArrowUp/> Priority: 
                    {scalePosition(item.priority_index)} ({item.priority_index==null ? 0 : item.priority_index}/10)
                    </div>
                    <div className='mb-10'><TiArrowMove/> Complexity: 
                    {scalePosition(item.complexity_index)} ({item.complexity_index==null ? 0 : item.complexity_index}/10) 
                    </div>
                </div>
            </div>
            <div className="task-complete flex">
                <h3>Task Complete</h3>
                <h3>{value * 100}%</h3>
            </div>
            <div className="progress-wrapper">
                <progress className='progress-bar' value={value} max={1} />
            </div>
        </div>
        <ul className='checklistItems'>
          <p className='font-bold'>Checklist for subtask</p>
          {checklistArr}
        </ul>
        <div className='repeat' onClick={()=>onRepeatTask(item)}>
          <button className='detailButton repeatButton'><FiRepeat className='mr-10'/>Repeat Task</button>
        </div>
        <div className='delete' onClick={()=>{
            onDeleteTask(item)
            onView(0,null)}}>
          <button className='detailButton deleteButton'><MdDelete className='mr-10'/>Delete Task</button>
        </div>
    </div>
  )
}

export default DetailPage