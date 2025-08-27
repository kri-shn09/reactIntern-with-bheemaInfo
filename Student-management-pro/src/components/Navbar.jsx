import '../App.css'
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div
    className='w-full py-4 flex justify-evenly items-center header-main-con '
    >
        <div
         className="logo-box">
            <h1
             className='font-bold text-xl logo-text'
            >Student Management</h1>
         </div>

        <ul
        className="menu-con flex justify-evenly items-center font-bold">
            <li>
                <NavLink
                 to="/"
                  className={({isActive})=>
                  `${isActive ? "text-orange-600" : "text-black"}`
                  }>
                    StudentList
                    </NavLink>
                    </li>
            <li>
                 <NavLink
                 to="/EditStudent"
                  className={({isActive})=>
                  `${isActive ? "text-orange-600" : "text-black"}`
                  }>
                    EditStudent
                    </NavLink>
            </li>
            <li>
                 <NavLink
                 to="/AddStudent"
                  className={({isActive})=>
                  `${isActive ? "text-orange-600" : "text-black"}`
                  }>
                    AddStudent
                    </NavLink>
            </li>

            </ul>
     </div>
        
    
  )
}

export default Header
