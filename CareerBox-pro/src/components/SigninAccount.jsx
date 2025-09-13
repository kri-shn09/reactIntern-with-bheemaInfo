
import '../cssfiles/signinAccount.css';
import google from './images/google.png'
import {Link} from 'react-router-dom'

function SigninAccount() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4 h-auto rounded flex justify-center items-center flex-col'>
            <div className="w-full bg-gray-100 py-5 mb-8">
                <h1
                 className='text-center text-black font-bold text-2xl'>
                    WelCome Back
                    </h1>
                    <p
                 className='text-center text-gray-700 para'>
                    Sign in to access your account and manage you bookings
                    </p>
            </div>

            <h1 className='font-bold text-2xl text-center'>
                Sign in to your account
            </h1>
            <p className='text-center font-medium '>
                Or 
                   <span className='ml-1 font-bold text-blue-600 cursor-pointer'>
                    <Link
                    to="/createAccount"
                    >
                       create a new account
                    </Link>
                    </span>
                    </p>

                    <div className="btn-box flex justify-evenly items-center mt-8">
                        <button
                        className='w-30 h-8 border-1 g-btn px-4 border-gray-400 flex justify-evenly items-center cursor-pointer'
                        >
                        <img
                        className='bg-white'
                        src={google} alt="google-icon" />
                        <span
                        className='font-bold '
                        >Google</span>
                        </button>

                         <button
                        className='w-30 h-8 border-1 g-btn px-4 border-gray-400 flex justify-evenly items-center cursor-pointer'
                        >
                        <i className="fab fa-facebook fb-icon"></i>
                        <span
                        className='font-bold '
                        >Facebook</span>
                        </button>
                    </div>

                    <div
                     className="w-full px-4 flex justify-between items-center my-3">
                        <div className="w-20 border-1 border-gray-300"></div>
                        <span className='additional-text font-bold'>
                            or continue with email address
                            </span>
                        <div className="w-20 border-1 border-gray-300"></div>
                     </div>

                     <form 
                     autoComplete='off'
                     className='w-full py-4 relative px-5'
                     >

                        <label htmlFor="email"
                        className='email-label'
                        >Email address:
                        </label> <br />
                        <input
                         type="email" 
                         placeholder='Enter Your email'
                         className='w-1/2 py-1 my-2 border-1 border-gray-400 rounded email-input pl-2 outline-0'
                         name='email'
                         /> <br />

                          <label htmlFor="password"
                        className='email-label'
                        >Password:
                        </label> <br />
                        <i className="fas fa-eye absolute top-33 right-10 text-gray-500 cursor-pointer"></i>
                        <input
                         type="password" 
                         placeholder='Enter Your password'
                         className='w-1/2 py-1 my-2 border-1 border-gray-400 rounded email-input pl-2 outline-0'
                         name='email'
                         /> <br />
                         <div className='w-full flex justify-between items-center'>
                            <div className="w-60 flex items-center gap-1">
                            <input type="checkbox" value="reme" /> <span className='rem-span text-gray-500'>Remember me</span>
                        </div>
                        <p className='forgot-para font-medium cursor-pointer'>Forgot password</p>
                            </div>
                            <button
                            className='w-full text-white bg-blue-600 text-bold mt-4 rounded py-1 cursor-pointer'
                            >Sign in</button>
                     </form>
        </div>
    </div>
  )
}

export default SigninAccount