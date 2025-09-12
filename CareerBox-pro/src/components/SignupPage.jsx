import React from 'react'
import '../App.css'
import '../cssfiles/signUp.css'
import {Link} from 'react-router-dom'

function SignupPage() {
  return (
    <div
     className='w-full h-screen login-main-con flex justify-center items-center'
    >
      <form 
      autoComplete='off'
      className='w-1/3 bg-white py-5 px-7 rounded-2xl animate__animated animate__backInDown relative'
      >
        <i className="fas fa-times absolute top-5 right-5 text-xl text-gray-400 cursor-pointer"></i>
        <h1
        className='font-bold text-center text-3xl'
        >Sign up</h1>

        <label
        className='font-medium '
        htmlFor="fullName">
            Fullname :
            </label> <br />
            <i className="fas fa-user cursor-pointer absolute top-25 left-10 text-gray-500 user-icon"></i>
        <input
        className='my-2 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-blue-600'
        type="text" name="fullName" placeholder='Enter Full Name' required  />

         <label
        className='font-medium '
        htmlFor="email">
            Email :
            </label> <br />
            <i className="fas fa-envelope text-gray-500 top-44 left-10 absolute email-icon"></i>
        <input
        className='my-2 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-blue-600'
        type="email" name="email" placeholder='Enter your Email' required />

         <label
        className='font-medium '
        htmlFor="phone">
            Phone No. :
            </label> <br />
            <i className="fas fa-phone-square-alt  text-gray-500 top-63 left-9 absolute phone-icon"></i>
        <input
        className='my-2 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-blue-600'
        type="phone" name="phone" placeholder='Enter Phone Number' required  />

         <label
        className='font-medium '
        htmlFor="password">
            Password :
            </label> <br />
            <i className="fas fa-lock text-gray-500 top-81 left-10 absolute pass-icon"></i>
        <input
        className='my-2 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-blue-600'
        type="password" name="password" placeholder='Enter Password' required  />
        <i className="fas fa-eye  text-gray-500 top-81 right-10 absolute cursor-pointer"></i>

        <div className="w-full flex justify-center items-center flex-col">
           <button 
        type='submit'
        className='px-6 py-1 font-bold mt-5 rounded'
        >
          Sign up
        </button>
        <p>Already have an account!
           <span>
            <Link
            to="/login"
            >
            Login
            </Link></span></p>
        </div>

        </form> 

    </div>
  )
}

export default SignupPage