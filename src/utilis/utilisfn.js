function convertDate(date_str) {
  if(date_str === ' '){
    return ' '
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let temp_date = date_str.split("-");
  return months[Number(temp_date[1]) - 1] + " " + temp_date[2]   + " " + temp_date[0];
}

function filterItems(items, query) {
  // query = query.toLowerCase();
  console.log(query)
  console.log(items.map(item=>item.taskname))
  // return items.map(item=>item.taskname)
  // items.filter(item =>
  //   item.taskname.split(' ').some(word =>
  //     word.toLowerCase().startsWith(query)
  //   )
  // );
}

function filteredtodos(items,filteredItems){
  if(filteredItems.length ===0){
    return items
  }else{
    return items.filter(item=>filteredItems.some(i=>item.tags.includes(i.item)))  
  }
 }
export {convertDate, filterItems, filteredtodos}