import {useState} from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";

function App() {

  const [view,setView] = useState(0)
  const [formData, setformData] = useState({
    taskname:'',
    priority_index:null,
    complexity_index:null,
    due_date:'',
    select_time:'',
    checklist:[],
    tags:[]
   })

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
        return item != value
      })
     })
   }

   function handleTags(value){
    setformData({
      ...formData,
      tags:[...formData.tags, value]
     })
   }
  
  
  
   function handleFormData(){  
     console.log(formData)
   }
  



  return (
    <div className="App">
       {
        view === 0  &&
        <TodoHome
        onView = {()=>setView(1)}
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
         onTaskName = {handleTaskName}
         onDueDate = {handleDueDate}
         onSelectTime = {handleSelectTime}
         onChecklist = {handleChecklist}
         onTags = {handleTags}
         onDeleteItem = {handleDeleteChecklistItem}
         onPriority = {handlePriorityIndex} 
         onComplexity= {handleComplexityIndex} 
         priority={formData.priority_index} 
         complexity={formData.complexity_index}/>
      }

    
       <button onClick={handleFormData}>Display</button>
    </div>
    
  );
}

export default App;
