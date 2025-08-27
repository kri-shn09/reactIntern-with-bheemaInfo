import '../App.css'
import bgImage from './bgImage.jpg'
import ContactForm from './ContactForm'

function HeroSection() {
  return (
    <div
     className="w-full h-220 my-5">
       <a href="#"><button
       className=' text-white px-5 py-2 rounded cursor-pointer font-medium enroll-btn'
       >Enroll now</button></a>
       <ContactForm />
      <img
      className='w-full h-220 bg-img'
       src={bgImage} alt="image" />
       
     </div>
  )
}

export default HeroSection