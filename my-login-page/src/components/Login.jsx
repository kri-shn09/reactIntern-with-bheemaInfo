import React, { useState } from 'react'
import '../App.css'

function Login() {

  const [userEmail , setUserEmail] = useState('')
  const [userPassword , setUserPassword] = useState('')

 const  handleSubmit = (e) =>{
     e.preventDefault();
     alert(`User email is ${userEmail} &
        password is ${userPassword} `);
 }
  return (
    <div
     className='login-main-con flex justify-center items-center'>
        <div className="log-con flex justify-center items-center flex-col">
             <h2 
                 className='font-bold text-3xl mb-8'
                 >Log in</h2>
             <form className='login-form  '>
                 <label
                  className='text-xl font-medium '
                  htmlFor="">
                    Your Email : </label> <br  />
                    <input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className='input-name my-3 px-2 h-10'
                    type="email" placeholder='Enter Your Email' /> <br />

                    <label
                      className='text-xl font-medium mb-3'
                     htmlFor="">Enter Password :</label> <br />
                    <input
                    onChange={(e)=> setUserPassword(e.target.value)}
                    value={userPassword}
                    className='input-name my-3 px-2 h-10'
                     type="password" placeholder='Enter Your password' /> <br />
                 
                
             </form>
              <button
              onClick={handleSubmit}
                 className='bg-white text-xl cursor-pointer font-bold px-8 py-2 rounded mt-8 '
                 >Log in</button>
             </div>
     </div>
  )
}

export default Login