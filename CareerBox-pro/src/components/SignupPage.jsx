import React from 'react'
import '../App.css'
import '../cssfiles/signUp.css'

function SignupPage() {
  return (
    <div
     className='w-full h-screen login-main-con flex justify-center items-center'
    >
      <form 
      autoComplete='off'
      className='w-1/3 bg-inherit py-5 px-7 rounded-2xl animate__animated animate__backInDown relative'
      >
        <i className="fas fa-times absolute top-5 right-5 text-xl text-white cursor-pointer"></i>
        <h1
        className='font-bold text-center text-3xl pb-5'
        >Sign <span>up</span></h1>

        <label
        className='font-medium text-white'
        htmlFor="fullName">
            Fullname :
            </label> <br />
        <input
        className='my-4 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-white'
        type="text" name="fullName" placeholder='Enter Full Name' required  />

         <label
        className='font-medium text-white'
        htmlFor="email">
            Email :
            </label> <br />
        <input
        className='my-4 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-white'
        type="email" name="email" placeholder='Enter your Email' required />

         <label
        className='font-medium text-white'
        htmlFor="phone">
            Phone No. :
            </label> <br />
        <input
        className='my-4 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-white'
        type="phone" name="phone" placeholder='Enter Phone Number' required  />

         <label
        className='font-medium text-white'
        htmlFor="password">
            Password :
            </label> <br />
        <input
        className='my-4 w-full outline-0 py-1 pl-3 rounded-2xl border-2 border-blue-400 text-white'
        type="password" name="password" placeholder='Enter Password' required  />

        <div className="w-full flex justify-center items-center">
           <button 
        type='submit'
        className='px-6 py-1 font-bold mt-5 rounded'
        >
          Sign up
        </button>

        </div>

        </form> 

    </div>
  )
}

export default SignupPage