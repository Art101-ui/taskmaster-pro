import React from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TaskItem = () => {
  let percentage= 22;
  return (
    <div className="task-content">
        <div className="task-heading flex">
            <div className="taskName">
              <div className="labelColor mr-10"></div>
              Build a javascript project
            </div>
            <div className="taskTools">
                <div className="editTools mr-20">
                  <CiEdit className='tool'/>
                </div>
                <div className="checkmark">
                  <IoMdCheckmark className='tool'/>           
                </div>
            </div>
        </div>
        <div className="task-body flex">
            <div className="task-info">
                <div><MdOutlineDateRange/> Due Date: 17/10/2023 </div>
                <div><IoMdArrowUp/> Priority: Low (2/10)</div>
                <div><TiArrowMove/> Complexity: High (3/10) </div>
            </div>
            <div>
              <CircularProgressbar className='circularProgress' value={percentage} text={`${percentage}%`} styles={buildStyles({textSize:"30px",pathColor:"green",textColor:"#181818",trailColor:"#ddf8dd"},)}/>
            </div>
        </div>
        <ul className="tags">
            <li>biggy</li>
            <li>new</li>
            <li>grand</li>
            <li>authentic</li>
            <li>right</li>
            <li>ditch</li>
            <li>word</li>    
        </ul>
    </div>
  )
}

export default TaskItem