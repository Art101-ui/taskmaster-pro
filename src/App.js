import {useState} from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";

function App() {

  const [formData, setformData] = useState({
    taskname:'',
    priority_index:null,
    complexity_index:null,
    due_date:'',
    select_time:'',
    checklist:'',
    tags:''
   })

   const [view,setView] = useState(0)
  
  
  
   function handleFormData(){  
     console.log(formData)
   }
  
   function handleTaskName(e){
     setformData({
      ...formData,
      taskname:e.target.value
     })
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
         onPriority = {value=>{
          setformData({
            ...formData,
            priority_index:value
          })
        
        }} 
         onComplexity= {value=>{
          setformData({
            ...formData,
            complexity_index:value
          })
        }} 
         priority={formData.priority_index} 
         complexity={formData.complexity_index}/>
      }

    
       <button onClick={handleFormData}>Display</button>
    </div>
    
  );
}

export default App;
