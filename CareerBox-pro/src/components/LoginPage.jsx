import '../cssfiles/login.css'
import '../App.css'

function LoginPage() {
  return (
    <div
    className='w-full h-screen flex justify-center items-center main-con'
    >
        <form 
        className='w-1/3 rounded-2xl px-8 py-5 relative bg-inherit'
        autoComplete='off'
        >
            <i className="fas fa-times text-xl text-white absolute top-5 right-6 cursor-pointer"></i>
            <h1
            className='font-bold text-2xl text-center my-3'
            >Log <span>in</span></h1>

            <label
            className='text-white font-medium'
            htmlFor="email">Email :</label> <br />
            <input
            className='w-full outline-0 border-2 border-blue-500 rounded-2xl px-3 py-1 text-white my-2'
            type="email" required name='email' placeholder='Users Email' /> <br /> 

            <label
            className='text-white font-medium'
            htmlFor="password">Password :</label> <br />
            <input 
             className='w-full outline-0 border-2 border-blue-500 rounded-2xl px-3 py-1 text-white my-2'
            type="password" name="password" placeholder='Enter password' required />
            
            <div className="w-full flex justify-center items-center mt-3 flex-col">
                <button 
                className='py-1 px-6 text-white bg-blue-500 rounded font-bold cursor-pointer'
                type="submit">Log In</button>
                <p
                className='mt-2 text-white font-medium '
                >Don't have an account ? <span className='s-link'>Sign up</span></p>
            </div>
        </form>
    </div>
  )
}

export default LoginPage