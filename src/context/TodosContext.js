import { createContext, useContext, useState, useEffect } from "react"


const TodosContext = createContext(null)

const TodosContextProvider = ({children}) => {
    let items = localStorage.getItem('items') !== null ? JSON.parse(localStorage.getItem('items')) : []
    const [listformData, setListFormData] = useState(items)

    useEffect(() => {
        localStorage.setItem('items',JSON.stringify(listformData))
       
      }, [listformData]);
  return (
    <TodosContext.Provider
     value={{
        listformData,
        setListFormData
     }}
    >{children}</TodosContext.Provider>
  )
}

export default TodosContextProvider


export function useTodosContext (){
     const context = useContext(TodosContext);
     if(!context){
        throw new Error('The component should be inside TodosContextProvider')
     }
     
     
    return context
}