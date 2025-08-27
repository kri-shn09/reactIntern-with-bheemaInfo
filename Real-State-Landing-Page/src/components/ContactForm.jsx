import '../App.css';
import { useState } from 'react';

function ContactForm() {
    const [phoneVal , setPhoneVal] = useState("")
    const [emailVal , setEmailVal] = useState("")

    const contact = (e)=>{
      e.preventDefault();

       console.log(phoneVal);
    console.log(emailVal);
    }
   
    
  return (

    <form onSubmit={contact}
    className="w-1/4 form py-5 px-4 rounded text-white"
    >
     <h1
     className='text-xl font-medium text-center'
     >
        Contact Form
     </h1>

     <label htmlFor="phone">Phone No :</label> <br />
     <input
     onChange={(e) => setPhoneVal(e.target.value)}
     type="number" placeholder='Enter your number' name="phone"
     className='my-3 py-1 text-black pl-3 bg-white rounded w-full outline-0'
      /> <br />
     <label htmlFor="email">Email Id :</label> <br />
     <input
     onChange={(e) => setEmailVal(e.target.value)}
     type="email" placeholder='Enter your email' name='email' 
     className='bg-white pl-3 py-1 text-black my-3 outline-0 rounded w-full'
     /> <br />
     <button
      className='px-4 py-1 rounded my-5  bg-white text-black cursor-pointer'
      type='submit'
      >
        Submit
        </button>
    </form>
  )
  
}

export default ContactForm