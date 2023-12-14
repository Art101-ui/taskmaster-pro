import { useState} from 'react'
import TodoHome from "./pages/TodoHome";
import './App.css'
import AddTaskForm from "./pages/AddTaskForm";
import DetailPage from './pages/DetailPage';




function App() {
  const [view,setView] = useState(0)
  const [listformData, setListFormData] = useState([])
  const [selectedId,setSelectedId] = useState(null)

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
 const selectedItem = listformData.find(item=>item.id === selectedId)

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
          listformData = {listformData}
          onListFormDataChange =  {setListFormData}
        />
      }
    </div>
    
  );
}

export default App;


