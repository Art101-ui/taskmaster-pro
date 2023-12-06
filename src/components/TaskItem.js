import React from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { convertDate } from '../utilis/utilisfn';

const TaskItem = ({item}) => {
  let percentage= 22;

  return (
    <div className="task-content">
        <div className="task-heading flex">
            <div className="taskName">
              <div className="labelColor mr-10"></div>
                {item.taskname}
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
                <div><MdOutlineDateRange/> Due Date: {convertDate(item.due_date) !== undefined ? convertDate(item.due_date) : ''}, {item.select_time == undefined ? ' ' : item.select_time} </div>
                <div><IoMdArrowUp/> Priority: Low ({item.priority_index==null ? 0 : item.priority_index}/10)</div>
                <div><TiArrowMove/> Complexity: High ({item.complexity_index==null ? 0 : item.complexity_index}/10) </div>
            </div>
            <div>
              <CircularProgressbar className='circularProgress' value={percentage} text={`${percentage}%`} styles={buildStyles({textSize:"30px",pathColor:"green",textColor:"#181818",trailColor:"#ddf8dd"},)}/>
            </div>
        </div>
        <ul className="tags">
          {
            item.tags.split(',').map(i=>{
              return <li key={i}>{i}</li>
            })
          }   
        </ul>
    </div>
  )
}

export default TaskItem