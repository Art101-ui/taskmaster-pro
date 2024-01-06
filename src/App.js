import { useState } from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";
import DetailPage from './pages/DetailPage';
import { useTodosContext } from './context/TodosContext';


function App() {
 

  const [view,setView] = useState(0)
  const [selectedId,setSelectedId] = useState(null)

  const context = useTodosContext()

// Add or Edit
const [title,setTitle] = useState('add')

function handleView(viewId,changeText){
     if(viewId === 0 && changeText===null){
      setView(0)
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

  // SelectedItem
 const selectedItem = context.listformData.find(item=>item.id === selectedId)

  return (
    <div className="App">
       {
        view === 0  &&
        <TodoHome
        onView = {handleView}
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
         selectedId={selectedId}
         selectedItem = {selectedItem}
         
         />
      }
      {
        view === 2 &&
        <DetailPage
          onView = {handleView}
          item ={selectedItem}
        />
      }
    </div>
    
  );
}

export default App;


