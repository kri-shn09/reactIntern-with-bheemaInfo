import '../cssfiles/login.css'
import '../App.css'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div
    className='w-full h-screen flex justify-center items-center main-con'
    >
        <form 
        className='w-1/3 rounded-2xl px-8 py-5 relative bg-white animate__animated animate__backInDown login-form'
        autoComplete='off'
        >
            <i className="fas fa-times text-xl absolute text-gray-500 top-5 right-6 cursor-pointer"></i>
            <h1
            className='font-bold text-2xl text-center my-3 login-head'
            >Log <span>in</span></h1>

            <label
            className='font-medium'
            htmlFor="email">Email :</label> <br />
            <i className="fas fa-envelope text-gray-500 absolute top-30 left-11 email-icon"></i>
            <input
            className='w-full outline-0 border-2 border-blue-500 rounded-2xl pr-3 pl-8 py-1 text-blue-600 my-2 login-inputs'
            type="email" required name='email' placeholder='Users Email' /> <br /> 

            <label
            className='font-medium'
            htmlFor="password">Password :</label> <br />
              <i className="fas fa-lock text-gray-500 top-49 left-11 absolute pass-icon"></i>
            <input 
             className='w-full outline-0 border-2 border-blue-500 rounded-2xl pl-1 py-1 text-blue-600 my-2 login-inputs'
            type="password" name="password" placeholder='Enter password' required  />
             <i className="fas fa-eye text-gray-500 absolute top-49 right-11 eye-icon"></i>
            
            <div className="w-full flex justify-center items-center mt-5 flex-col">
                <button 
                className='py-2 px-9 text-white bg-blue-500 rounded font-bold cursor-pointer'
                type="submit">Log In</button>
                <p
                className='mt-2  font-medium login-para'
                >Don't have an account ? 
                <span className='s-link'>
                  <Link
                  to="/"
                  >
                   Sign up
                  </Link>
                 </span></p>
            </div>
        </form>
    </div>
  )
}

export default LoginPage