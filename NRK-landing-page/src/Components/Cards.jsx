import { useContext, useEffect, useRef } from 'react'
import '../App.css'
import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import home3 from './images/home3.jpg'
import { UserContext } from '../Context'

function Cards({location,prices,title}) {

   const {userVal} = useContext(UserContext)
   const ourParas = useRef([])
   console.log(ourParas.innerHTML);
   

   const priceVal = Object.values(prices);
   const locationVal = Object.values(location);

      useEffect( ()=>{
             ourParas.current.forEach((para)=>{
              if(para && para.innerHTML.includes(userVal) )
              {
                 para.parentElement.className = "w-1/2 card-con rounded-4xl"
              }
              else{
                 para.parentElement.className = "w-1/2 card-con "
              }
             })
            
      },[userVal] )

  return (
    <div 
    id='cardPage'
     className='w-full flex px-8 py-5 justify-evenly items-center mt-25 gap-10'
    >

        <ul className='w-1/2 card-con'>
         <li
         className='w-full h-80'
         >
          <img
          className='w-full h-80'
           src={home1} alt="home-img" />
           </li>

           <li>
            <h3 
            className='text-center font-medium my-3 text-xl'
            >
              {title}
              </h3>
           </li>

           <p 
           ref={(el) => {
          if (el && !ourParas.current.includes(el)) {
             ourParas.current.push(el);
            }
           }}
           className='text-center font-semibold shadow-black para gap-2'
           >
            <i className="fas fa-rupee-sign"></i> 
            {prices.first}
            {prices.first >= 10000000 ? (<i className="fas fa-gem"></i>) : ''}
            </p>

            <p 
           className='text-center font-medium my-3'
           >
            <i className="fas fa-map-pin"></i>
            {location.first}</p>
        </ul>

        <ul className='w-1/2 card-con'>

          <li 
          className='w-full h-80'
          >
             <img 
          className='w-full h-80'
          src={home2} alt="home-img" /></li>

           <li>
            <h3 
            className='text-center font-medium my-3 text-xl'
            >
              {title}
              </h3>
           </li>
          <p 
          ref={(el) => {
           if (el && !ourParas.current.includes(el)) {
           ourParas.current.push(el);
        }
        }}
           className='text-center font-semibold shadow-black para'
           >
             <i className="fas fa-rupee-sign"></i>
              5000000
              {prices.second >= 10000000 ? (<i className="fas fa-gem"></i>) : ''}
              </p>

            <p 
           className='text-center font-medium my-3'
           >
            <i className="fas fa-map-pin"></i>
            {location.second}</p>
        </ul>

        <ul className='w-1/2 card-con'>
        <li
        className='w-full h-80'
        >
            <img
            className='w-full h-80'
             src={home3} alt="home-img" /></li>

              <li>
            <h3 
            className='text-center font-medium my-3 text-xl'
            >
              {title}
              </h3>
           </li>
            
            <p 
            ref={(el) => {
           if (el && !ourParas.current.includes(el)) {
           ourParas.current.push(el);
           }
           }}
           className='text-center font-semibold shadow-black para'
           ><i className="fas fa-rupee-sign"></i>
            {prices.third}
            {prices.third >= 10000000 ? (<i className="fas fa-gem"></i>) : ''}
            </p>

           <p 
           className='text-center font-medium my-3'
           >
            <i className="fas fa-map-pin"></i>
            {location.third}</p>

        </ul>

    </div>
  )
}

export default Cards