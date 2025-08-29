import '../App.css'
import nrkbanner from './images/nrkbanner.jpeg'

function Footer() {
  return (
    <div
    id="footerPage"
    className='w-full mt-5 px-10 py-10 flex justify-evenly items-center  bg-gray-300'
    >
      <div 
      className="w-1/3 flex justify-center items-center"
      >
         <img
         className='w-60 h-20 '
          src={nrkbanner} alt="logo" />
      </div>

      <div
       className="w-1/3 flex justify-center items-center flex-col font-medium"
       >
         <address>
            Email : gupxxxxx7174@gmail.com
         </address>

         <address>
          Phone : 74xxxxxx59
         </address>
        
        <address>
            <i className="fas fa-map-pin mr-2"></i>
            Address : Behind C21 mall
             </address>
       </div>

    </div>
  )
}

export default Footer