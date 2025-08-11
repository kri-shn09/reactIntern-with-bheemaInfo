import { useEffect, useRef, useState } from 'react'
import './App.css'
import ToggleButton from './component/ToggleButton'

function App() {
  const [count, setCount] = useState(0);
  const [isOn , setIsOn] = useState(false);
  const bgBox = useRef();

  const toggleOn = () =>{
    setIsOn(prev => !prev);

    if(isOn)
    {
      bgBox.current.className = "bg-white sub-con flex justify-center items-center flex-col";
      document.querySelector("body").className = "text-black"
    }
    else{
      document.querySelector("body").className = "text-white"
      bgBox.current.className = "bg-black sub-con flex justify-center items-center flex-col";
    }
  }

  const letDecrease = ()=>{
    if(count > 0)
    {
      setCount((prev)=> prev-1);
    }
  }

  const letIncrease = ()=>{
    setCount((prev)=> prev+1);
  }

  return (
    <>
      <div
       className="main-con flex justify-center items-center m-0 p-0">

         <div className="sub-con flex justify-center items-center flex-col "
           ref={bgBox}>

          < ToggleButton isOn={isOn} toggleOn={toggleOn} />

          <div className="w-120 h-50 border-3 rounded flex justify-evenly items-center my-5">
            <button 
            className='px-5 py-2 bg-gray-500 text-xl text-white font-bold rounded cursor-pointer'
             onClick={letDecrease}
                 >
                  Decrease
              </button>
              <h2
              className='font-bold text-2xl'
              >{count}</h2>
              <button
              onClick={letIncrease}
               className='px-5 py-2 bg-gray-500 text-xl text-white font-bold rounded cursor-pointer'
              >Increase</button>
          </div>

         </div>
      </div>
    </>
  )
}

export default App
