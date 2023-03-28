import React, { useState } from 'react';
import './App.css';

function App() {

 const [value, setValue] = useState<string> ('');
 const [addValue, setAddValue] = useState<string[]>([]);
 const [errorMessage, setErrorMessage] = useState<string>('');
//  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
 
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
 }

 const handleAddItem = () => {
  if (value.trim() === ''){
    setErrorMessage("Please enter a valid value!");
    setTimeout(() => {
      setErrorMessage("");
    },3000)
    return;
   }
   setAddValue([...addValue,value]);
  //  setCheckedItems([...checkedItems,false]);
   setValue('');
   setErrorMessage('');
 }

 const handleAllDelete = () => {
      
  setAddValue([]);
  // setCheckedItems([]);

 }

//  const handleItemDelete = () => {
//     const filteredItems = addValue.filter((item,index) => !checkedItems[index]);
//     const filteredCheckedItems = checkedItems.filter((item,index) => !checkedItems[index]);
//     setAddValue(filteredItems);
//     setCheckedItems(filteredCheckedItems);
//  }

  return (
    <div className="App">
      <header className="App-header">
     
       <div className='todo-app '>
     
        <div>
        <input 
         type="text" 
         value={value} 
         onChange= {handleChange} 
         className='mt-5  todo-input' />
         <div className='h-5'>
         {errorMessage && <div className=' text-red-500 font-extralight' >{errorMessage}</div>}
         </div>
        </div>
        <div>
          <button className='delete-btn'>delete</button>
          <button onClick={handleAddItem} className='add-btn'>add</button>
        </div>
        <div className='todo-list'>
           <div className='todo-list-item'>
              <ul className='mt-5'>
              
                {addValue.map((item, index) => (
                  <li className='flex' key={index}>
                 <input 
                 type="checkbox" 
                //  checked = {checkedItems[index]}
                 className='todo-checkbox'/>{item}
                 </li>
                ))}
                  
              </ul>
           </div>
        </div>
        <div>
          <button onClick={handleAllDelete} className='all-delete'>ALL DELETE</button>
        </div>
       </div>
      
      </header>
    </div>
  );
}

export default App;
