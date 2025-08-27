import '../App.css'

function HeroSection({head,subTitle,btn}) {
  return (
    <div
     className="w-full flex justify-center items-center flex-col my-8">
       <h1 
       className="font-bold text-2xl heading "
       >{head}</h1>
       <h3
       className='font-medium my-5'
       >{subTitle}</h3>
       <a href="#"><button
       className='bg-blue-400 text-white px-4 py-2 rounded cursor-pointer'
       >{btn}</button></a>
     </div>
  )
}

export default HeroSection