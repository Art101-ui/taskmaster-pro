import React from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TaskItem = () => {
    let percentage= 22;
  return (
    <div className="task-content">
        <div className="task-heading flex">
            <div className="taskName">
              <div className="labelColor mr-10"></div>
              <div className="labelName">Build a javascript project</div>
            </div>
            <div className="taskTools">
                <div class="editTools mr-20">
                  <CiEdit className='tool'/>
                </div>
                <div class="checkmark">
                  <IoMdCheckmark className='tool'/>           
                </div>
            </div>
        </div>
        <div className="task-body flex">
            <div className="task-info">
                <div>Due Date: </div>
                <div>Priority: </div>
                <div>Complexity: </div>
            </div>
            <div>
              <CircularProgressbar className='circularProgress' value={percentage} text={`${percentage}%`} styles={buildStyles({textSize:"30px",pathColor:"green",textColor:"#181818",trailColor:"#ddf8dd"},)}/>
            </div>
        </div>
        <ul className="tags">
            <li>biggy</li>
        </ul>
    </div>
  )
}

export default TaskItem