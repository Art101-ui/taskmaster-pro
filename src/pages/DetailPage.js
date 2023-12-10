import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FiRepeat } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";

const DetailPage = ({onView}) => {
  return (
    <div className='detailPage '>
        <div className="detail-heading">
          <div className="back-button">
             <FaArrowLeft/>
          </div>
          <h1>Task Details</h1>
          <div className="edit-button">
             <CiEdit/>
          </div>
        </div>
        {/* {(done ? 'bg-green' : 'bg-white') +" task-content"} */}
        <div  className= "task-content bg-white mb-15">
            <div className="task-heading flex mb-15">
                <div className="taskName font-22">
                <div className="labelColor mr-10"></div>
                    New Item
                    {/* {item.taskname} */}
                </div>
            </div>
            <div className="task-body mb-15 ">
                <div className="task-info font-18">
                    <div className='mb-10'><MdOutlineDateRange/> Due Date: date 
                    {/* {convertDate(item.due_date) === undefined && item.select_time === '' ?'': convertDate(item.due_date) + ','+ item.select_time}  */}
                    </div>
                    <div className='mb-10'><IoMdArrowUp/> Priority: priority
                    {/* {scalePosition(item.priority_index)} ({item.priority_index==null ? 0 : item.priority_index}/10) */}
                    </div>
                    <div className='mb-10'><TiArrowMove/> Complexity: complexity
                    {/* {scalePosition(item.complexity_index)} ({item.complexity_index==null ? 0 : item.complexity_index}/10)  */}
                    </div>
                </div>
            </div>
            <div class="task-complete flex">
                <h3>Task Complete</h3>
                <h3>50%</h3>
            </div>
            <div class="progress-wrapper">
                <progress className='progress-bar' value={0.5} max={1} />
            </div>
        </div>
        <ul className='checklistItems'>
          <p className='font-bold'>Checklist for subtask</p>
          <li className='item' >
            new Item
            <div className='done-wrapper cursor-pointer' >
              <IoMdCheckmark className='done'/>
            </div>
        </li>
        </ul>
        <div className='repeat'>
          <button className='detailButton repeatButton'><FiRepeat className='mr-10'/>Repeat Task</button>
        </div>
        <div className='delete'>
          <button className='detailButton deleteButton'><MdDelete className='mr-10'/>Delete Task</button>
        </div>
    </div>
  )
}

export default DetailPage