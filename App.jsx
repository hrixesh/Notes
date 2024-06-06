import React, {useState} from 'react'
import List from './List'
import Input from './Input'

export default function App() {
  const [items, setItem] = useState ([]);
 

  function addTask(task){
    const newItem = [ ...items, task   ];
    setItem(newItem);
  }

  function removeItem(index){
    const data = [...items];
    data.splice(index,1);
    setItem(data);  
  }
  
  return (

    <div className='max-w-[1100px] mx-auto '>
        <Input addTaskHandler = {addTask}/>  
        <List data={items} removeItemHandler={removeItem}/>
    </div>
    
  )
}
