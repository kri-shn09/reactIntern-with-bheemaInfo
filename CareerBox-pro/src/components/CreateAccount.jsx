import '../cssfiles/CreateAccount.css'
import {Link} from 'react-router-dom'

function CreateAccount() {
  return (
    <div
    className='w-full h-screen flex justify-center items-center'
    >
      <form 
      autoComplete='off'
      className='w-1/4 border-gray-400 border-1 rounded-xl py-4 px-5 relative'
      >
        <h1
        className='font-bold text-2xl text-center'
        >
          Create Your Account
          </h1>
          <p
          className='head-para font-bold text-gray-500 mt-3 text-center mb-6'
          >
            Already have an account ?
             <span className='text-blue-600 cursor-pointer'>
              <Link
              to="/signin"
              >
              Sign in
              </Link>
              </span>
          </p>

          <label
          className='full-label font-medium text-gray-500 '
          htmlFor="fullname"
          >
            Fullname :
            </label> <br />
            <i className="fas fa-user absolute top-37 left-7 text-gray-500"></i>
          <input
          className='pl-7 w-full h-10 border-1 border-gray-400 rounded-xl my-2 outline-0 '
           type="text" 
           name='fullname'
           placeholder='Brevis'  />

            <label
          className='full-label font-medium text-gray-500 '
          htmlFor="email"
          >
            Email :
            </label> <br />
            <i className="fas fa-envelope absolute top-57 left-7 text-gray-500"></i>
          <input
          className='pl-7 w-full h-10 border-1 border-gray-400 rounded-xl my-2 outline-0 '
           type="email" 
           name='email'
           placeholder='youexample@gmail.com'  />

            <label
          className='full-label font-medium text-gray-500 '
          htmlFor="password"
          >
            Password :
            </label> <br />
            <i className="fas fa-lock absolute top-77 left-7 text-gray-500"></i>
          <input
          className='pl-7 w-full h-10 border-1 border-gray-400 rounded-xl my-2 outline-0 '
           type="text" 
           name='password'
           placeholder='*******'  />
             <i className="fas fa-eye absolute top-77 right-8 text-gray-500 cursor-pointer"></i>

             <p className='special-para text-gray-400'><i className="fas fa-times text-gray-400"></i> At least 8 characters</p>
             <p className='special-para text-gray-400'><i className="fas fa-times text-gray-400"></i> At least one capital letter</p>
             <p className='special-para text-gray-400'><i className="fas fa-times text-gray-400"></i> At least one number</p>
             <p className='special-para text-gray-400 mb-4'><i className="fas fa-times text-gray-400"></i> At least one special character</p>

             <label className='full-label font-medium text-gray-500'>Account type </label> <br />
             <select className='border-1 border-gray-400 rounded w-full h-10 pl-3 select-tag font-semibold text-gray-500 mb-4'>
              <option value="Standard">standard user</option>
             </select>

             <div className='w-full flex items-center gap-1'>
                 <input type="checkbox" /> 
                 <p
                 className='text-gray-500 font-medium check-text'
                 >I agree with the 
                   <span 
                  className='text-blue-600 cursor-pointer ml-1'
                  >
                    terms and conditions
                    </span>
                    </p>
             </div>

             <div className="w-full flex justify-center items-center mt-3">
             <button
             className='w-1/2 px-3 cursor-pointer bg-blue-500 text-white font-medium rounded h-9 create-btn' 
             > 
              Create Account
              </button>
              </div>
      </form>
      </div>
  )
}

export default CreateAccount