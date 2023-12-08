import { useState} from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";



function App() {
  
  const [view,setView] = useState(0)
  
  const [listformData, setListFormData] = useState([])
  const [idCounter, setIdCounter] = useState(0);
  
  const initialData = {
    id:idCounter,
    taskname:'',
    priority_index:null,
    complexity_index:null,
    due_date:'',
    select_time:'',
    checklist:[],
    tags:''
   }

   const [formData, setformData] = useState(initialData)

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


   function handleChecklist(value){
    setformData({
      ...formData,
      checklist:[...formData.checklist, value]
     })
   }

   function handleDeleteChecklistItem(value){
    setformData({
      ...formData,
      checklist: formData.checklist.filter(item=>{
        return item !== value
      })
     })
   }

   function handleTags(e){
    setformData({
      ...formData,
      tags:e.target.value
     })
   }


   function handleFormData(){ 
    setIdCounter(prev=>prev + 1)
     setListFormData([
      ...listformData,
      formData
     ])
 
   }

  

  return (
    <div className="App">
       {
        view === 0  &&
        <TodoHome
        onView = {()=>{
          setformData(initialData)
          setView(1)}}
        listformData = {listformData}
        tags= {formData.tags}

        />

       }
      {
        view === 1 && 
        <AddTaskForm 
         onView = {()=>setView(0)}
         taskname = {formData.taskname}
         due_date = {formData.due_date}
         select_time = {formData.select_time}
         checklist = {formData.checklist}
         tags = {formData.tags}
         onTaskName = {handleTaskName}
         onDueDate = {handleDueDate}
         onSelectTime = {handleSelectTime}
         onChecklist = {handleChecklist}
         onTags = {handleTags}
         onDeleteItem = {handleDeleteChecklistItem}
         onPriority = {handlePriorityIndex} 
         onComplexity= {handleComplexityIndex} 
         priority={formData.priority_index} 
         complexity={formData.complexity_index}
         onSave = {handleFormData}
         />
      }
    </div>
    
  );
}

export default App;


