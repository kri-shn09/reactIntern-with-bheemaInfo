import React from 'react'
import '../App.css'

function ToggleButton({isOn , toggleOn,lightOrDark}) {
  return (
    <div className="w-85 flex justify-evenly items-center">

          <span>Light Background</span>
           <div className=' h-8 rounded-2xl border-2 flex items-center toggle-box'>
            <div
            onClick={toggleOn}
            
            className={`w-6 h-6 rounded-full bg-gray-500 cursor-pointer toggle-circle 
              ${isOn ? 'toggle-on' : ''}
            `}></div>
            </div>
            <span>Dark Background</span>
           </div>
  )
}

export default ToggleButton