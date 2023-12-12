import { useState} from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";
import DetailPage from './pages/DetailPage';




function App() {
  const initialData = {
    taskname:'',
    priority_index:null,
    complexity_index:null,
    due_date:'',
    select_time:'',
    checklist:[],
    selectedItemIds:[],
    tags:''
   }
  
  const [view,setView] = useState(2)
  const [listformData, setListFormData] = useState([])
  const [idCounter, setIdCounter] = useState(0);
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

   function handleUpdateData(toggleId){
    setListFormData(
      listformData.map(item=>{
        if(item.id === toggleId){
          return {...item, ...formData}
        }else{
          return item
        }
      })
    )

     setformData(initialData)
   }


   function handleFormData(){ 
    const newTask = {id: idCounter , ...formData}
    setIdCounter(prev=>prev + 1) 
    setListFormData([...listformData,newTask])
    setformData(initialData)
   }

  //  formData
const [title,setTitle] = useState('add')

function handleView(viewId,changeText){
     if(viewId === 0 && changeText===null){
      setView(0)
      setformData(initialData)
     }else if(viewId === 1 && changeText ==='edit'){
       setView(1)
       setTitle('edit')
     }else if(viewId === 1 && changeText ==='add'){
       setView(1)
       setTitle('add')
     }else if(viewId === 2 && changeText ===null){
       setView(2)
       
     }
  }

  //*********Subtask selectedIds********************/ 
  function handleSelectedIds(todo,toggleId){ 
    setListFormData(
      listformData.map(item=>{
        if(item.id === todo.id){
          let updatedItem = {
            ...item, 
            selectedItemIds: item.selectedItemIds.includes(toggleId) ? item.selectedItemIds.filter(id=>id!== toggleId) : [...item.selectedItemIds,toggleId]}
          setformData(updatedItem)
          return updatedItem
        }else{
          return item
        }
      })
    ) 
    
  }
  function handleRepeatTask(todo){ 
    setListFormData(
      listformData.map(item=>{
        if(item.id === todo.id){
          let updatedItem = {
            ...item, 
            selectedItemIds: []}
          setformData(updatedItem)
          return updatedItem
        }else{
          return item
        }
      })
    )   
  }

  function handleDeleteTask(todo){ 
    setListFormData(
      listformData.filter(item=>item.id !== todo.id)
    )   
  }

  // **************************************************
 

  return (
    <div className="App">
       {
        view === 0  &&
        <TodoHome
        onView = {handleView}
        listformData = {listformData}
        tags= {formData.tags}
        editformData ={(value)=>setformData(value)}
        detailTodoData ={(value)=>setformData(value)
        }
        />

       }
      {
        view === 1 && 
        <AddTaskForm 
         title = {title}
         onView = {()=>{
          handleView(0,null)}}
          id={formData.id}
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
         onUpdate = {handleUpdateData}
         />
      }
      {
        view === 2 &&
        <DetailPage
          onView = {handleView}
          item ={formData}
          onSelectedIds = {handleSelectedIds}
          onRepeatTask = {handleRepeatTask}
          onDeleteTask = {handleDeleteTask}
        
        />
      }
    </div>
    
  );
}

export default App;


