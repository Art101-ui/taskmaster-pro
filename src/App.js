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
  
  const [view,setView] = useState(0)
  const [listformData, setListFormData] = useState([])
  const [selectedId,setSelectedId] = useState(null)
   const [formData, setformData] = useState(initialData)


  


// Add or Edit
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
          return {
            ...item, 
            selectedItemIds: item.selectedItemIds.includes(toggleId) ? item.selectedItemIds.filter(id=>id!== toggleId) : [...item.selectedItemIds,toggleId]}
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
          return {
            ...item, 
            selectedItemIds: []} 
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
 
  const selectedItem = listformData.find(item=>item.id === selectedId)
  console.log(listformData)
  console.log(selectedId)
  console.log(selectedItem)

  return (
    <div className="App">
       {
        view === 0  &&
        <TodoHome
        onView = {handleView}
        listformData = {listformData}
        selectedId={selectedId}
        onSelectedIdChange = {setSelectedId}
        />

       }
      {
        view === 1 && 
        <AddTaskForm 
         title = {title}
         onView = {()=>{
          handleView(0,null)}}
         listformData={listformData}
         onListFormDataChange =  {setListFormData}
         selectedId={selectedId}
         selectedItem = {selectedItem}
         />
      }
      {
        view === 2 &&
        <DetailPage
          onView = {handleView}
          item ={selectedItem}
          onSelectedIds = {handleSelectedIds}
          onRepeatTask = {handleRepeatTask}
          onDeleteTask = {handleDeleteTask}
        
        />
      }
    </div>
    
  );
}

export default App;


