import '../App.css'

function Footer({gmail,phone,address}) {
  return (
    <>
      <h1 className="text-center font-medium text-2xl">Contact us</h1>
    <div
     className='w-full flex justify-evenly items-center pt-10 px-10 pb-15'>

     <div
      className="logo-con flex justify-center items-center">
       <h1 className='font-bold text-xl footer-logo'>SATYAM School</h1> 
      </div>

     <div className='contact-info-con flex justify-center items-center flex-col'>
        <address>Gmail : {gmail}</address>
        <address>Phone : {phone}</address>
       <address>Address : {address}</address>
     </div>
    </div>
      <p className='text-center mb-5'>Developed by krishn</p>
    </>
  )
}

export default Footer