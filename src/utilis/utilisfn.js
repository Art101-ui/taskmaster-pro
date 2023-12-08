function convertDate(date_str) {
  if(date_str === ' '){
    return ' '
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let temp_date = date_str.split("-");
  return months[Number(temp_date[1]) - 1] + " " + temp_date[2]   + " " + temp_date[0];
}

function searchItems(items, query) {
  query = query.toLowerCase();
 
  return items.filter(item =>
    item.taskname.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

function filteredtodos(items,filteredItems){
  if(filteredItems.length ===0){
    return items
  }else{
    return items.filter(item=>filteredItems.some(i=>item.tags.includes(i.item)))  
  }
 }


 function sortedTodos(items,id){
  let sortedArr = [...items]
  let newArr=null;
  switch (id) {
    case 0:
      newArr = sortedArr
      break;
    case 2:
      // newArr.sort(a,b)
      break;
    case 3:
      newArr = sortedArr.sort((a,b)=>a.complexity_index - b.complexity_index)
      break;
    case 4:
      newArr = sortedArr.sort((a,b)=>b.complexity_index - a.complexity_index)
      break;
    case 5:
      newArr = sortedArr.sort((a,b)=>a.priority_index - b.priority_index)
      break;
    case 6:
      newArr = sortedArr.sort((a,b)=>b.priority_index - a.priority_index)
      break;   
    default:
      break;
  }

  return newArr
 }


export {convertDate, searchItems, filteredtodos, sortedTodos}