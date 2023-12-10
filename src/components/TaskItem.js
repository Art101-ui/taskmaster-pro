import React,{useState} from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark, IoMdArrowUp } from "react-icons/io";
import { TiArrowMove } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { convertDate, scalePosition } from '../utilis/utilisfn';

const TaskItem = ({item,onEditTask, onView}) => {
  let percentage= 25;

  const [done,setDone] = useState(false)

  const [view,setView] = useState(0)

  return (
    <div  className={(done ? 'bg-green' : 'bg-white') +" task-content cursor-pointer"} onClick={()=>onView(2,null)}>
        <div className="task-heading flex">
            <div className="taskName">
              <div className="labelColor mr-10"></div>
                {item.taskname}
            </div>
            <div className="taskTools">
                <div onClick={(e)=>{
                  e.stopPropagation()
                  onEditTask()}} className="editTools mr-20">
                  <CiEdit className='tool'/>
                </div>
                <div className="checkmark" onClick={(e)=>{
                  e.stopPropagation()
                  setDone(prev=>!prev)
                }}>
                  <IoMdCheckmark className='tool'/>           
                </div>
            </div>
        </div>
        <div className="task-body flex">
            <div className="task-info">
                <div><MdOutlineDateRange/> Due Date: {convertDate(item.due_date) === undefined && item.select_time === '' ?'': convertDate(item.due_date) + ','+ item.select_time} </div>
                <div><IoMdArrowUp/> Priority: {scalePosition(item.priority_index)} ({item.priority_index==null ? 0 : item.priority_index}/10)</div>
                <div><TiArrowMove/> Complexity: {scalePosition(item.complexity_index)} ({item.complexity_index==null ? 0 : item.complexity_index}/10) </div>
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