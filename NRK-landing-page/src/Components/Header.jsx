import '../App.css'
import nrkbanner from './images/nrkbanner.jpeg'
import Cards from './Cards'
import Footer from './Footer'
import Home from './Home'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../Context'

function Header() {
 
   const {setUserVal} = useContext(UserContext)

  return (
    <div
    className='w-full flex justify-evenly items-center py-5 px-8 nav-box bg-white'
    >
      <div className="nav-logo-con flex justify-center items-center">
        <img
        className='w-1/3'
         src={nrkbanner} alt="logo-img" />
      </div>
      <ul className="nav-menu-con flex justify-evenly items-center font-semibold ">
        <li>
          <NavLink
          to="/"
          >
            Home
          </NavLink>
          </li> 

        <li>
           <NavLink
          to="/cards"
          >
            Properties
          </NavLink>
          </li> 

        <li>
          <a href='#footerPage'>Contact</a>
        </li>

        <input
        onChange={(e)=> setUserVal(e.target.value.trim())}
           className='bg-gray-300 p-2 rounded outline-0 w-60'
         type="search"  placeholder='Search by location & price' />
      </ul>
    </div>
  )
}

export default Header