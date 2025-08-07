
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [userTask , setUserTask] = useState([]);
  const [inputValue , setInputValue] = useState('');
  const checkboxes = useRef([]);
  const buttons = useRef([])
  
const addTask = (evt)=>{
    evt.preventDefault(); 
     if(inputValue.trim() !== '')
     {
      setUserTask((pre)=> [...pre , inputValue]);
     setInputValue('')
     }
  }

  const firstCheck = (index)=>{
    const box = checkboxes.current[index];              // get the box clicked
    box.classList.toggle('bg-green-600');        // toggle green class
  }

  const deletTask = (ind)=>{
   const some =  buttons.current[ind].parentElement;
   const mainParent = some.parentElement;
   mainParent.remove();
  }
 
  return (
  
   <div className="main-con flex justify-center items-center">
    <div
    className='main-sub-con flex justify-center items-center flex-col'>
    <h1 className='text-4xl text-center font-bold mb-5'>Task For Today</h1>
    <input
    onChange={(e)=> setInputValue(e.target.value)}
    value={inputValue}
    className='input-box '
    type="text" placeholder='Enter Your Task'/>

    <div className="task-con">
     {
       userTask.map((inp , i) =>{
        return(
        <div key={i}
         className='w-full p-2 border-2 border-gray-400
          flex justify-evenly items-center my-2 rounded'
         >
          <div className='check-con' >
            <div 
            ref={el => checkboxes.current[i] = el}
            onClick={()=> firstCheck(i)}
            className="w-6 cursor-pointer rounded-full
             h-6 border-3 border-gray-700 flex justify-center items-center">
                  <i className="fas fa-check text-7 text-white "></i>
            </div>
          </div>
          <div className="para-con">
            <p>{inp}</p>
          </div>
           <div className="cross-con">
            <button
            ref={(el) => buttons.current[i] = el}
            onClick={()=> deletTask(i)}
            className='font-extrabold text-red-600 text-3xl cursor-pointer'
            >X</button>
           </div>
        </div>
        )
       })
     }
    </div>
    <button
    onClick={addTask}
    className='px-4 py-2 bg-black text-white text-xl rounded cursor-pointer'>
      Add Task
      </button>
   </div>
    </div>
  )
}


export default App
