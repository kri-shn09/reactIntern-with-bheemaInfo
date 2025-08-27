import '../App.css'
import Card from './Card'

function Header({home,card,contact}) {
  return (
    <div
    className='w-full py-4 flex justify-evenly items-center header-main-con '
    >
        <div
         className="logo-box">
            <h1
             className='font-bold text-xl logo-text'
            >Real State Agency</h1>
         </div>

        <ul
        className="menu-con flex justify-evenly items-center font-bold">
            <a href=''><li>{home}</li></a>
            <a href={Card}><li>{card}</li></a>
            <a href=""><li>{contact}</li></a>
            </ul>
     </div>
        
    
  )
}

export default Header
