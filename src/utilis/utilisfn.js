function convertDate(date_str) {
  if(date_str === ''){
    return ''
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let temp_date = date_str.split("-");
  console.log(months[Number(temp_date[1]) - 1] + " " + temp_date[2]   + " " + temp_date[0])
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
    case 1:
      newArr = sortedArr.sort((a,b)=>new Date(a.due_date) - new Date(b.due_date))
      break;
    case 2:
      newArr = sortedArr.sort((a,b)=>new Date(b.due_date) - new Date(a.due_date))
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

 function scalePosition(value){
   if(value===null || value<=4){
     return 'Low'
   }else if(value===5 || value<=7){
     return 'Moderate'
   }else{
     return 'High'
   }
 }

 function getTaskProgress(selectArr,checklistArr){
  let value = null
  if(selectArr.length=== 0 && checklistArr.length === 0){
    value = 0
  }else{
    value = (selectArr.length / checklistArr.length).toFixed(2)
  }
  return value
 }


 function getTime(value){
  if(value ===''){
    return ''
  }
   const [hours, minutes] = value.split(':')

   let amPm='AM'
   let displayHours = parseInt(hours,10)

   if(displayHours > 12){
    displayHours -= 12;
    amPm = 'PM'
   }

   return `${displayHours}:${minutes} ${amPm}`
 }

 function deadline(value){
    if(value == ''){
      return 
    }
    let timeNow = new Date()
    let timeDifference = new Date(value) - timeNow

    const daysRemaining = Math.ceil(timeDifference/(1000 * 60 * 60 * 24))

    return daysRemaining
 
 }

 function deadlineColor(value,a,b,c){
  let className = ''   
    if(value===undefined){
      className = a
    }else if(value > 3){
      className = a
    }else if(value > 1 && value <= 3){
      className = b
    }else if(value <= 1){
      className = c
    }
    return className
 }

 function textColor(value,a,b,c){
  let className = ''
    if(value > 3){
      className = a
    }else if(value > 1 && value <= 3){
      className = b
    }else if(value <= 1){
      className = c
    }
    return className
 }

 let pathColor = (value,a,b,c)=>{
  let color = ''
  if(value===undefined){
    color = a
  }else if(value > 3){
     color = a
   }else if(value > 1 && value <= 3){
     color = b
   }else if(value <= 1){
      color = c
   }
   return color
}
 

export {convertDate, searchItems, filteredtodos, sortedTodos, scalePosition, getTaskProgress, getTime,deadline,deadlineColor, textColor, pathColor}