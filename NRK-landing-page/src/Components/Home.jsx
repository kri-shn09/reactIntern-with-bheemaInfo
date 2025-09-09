import '../App.css'
import nrkbanner from './images/nrkbanner.jpeg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='w-full h-auto mt-25 home-main-con' id='homepage'>
         <h1
            className='font-bold text-3xl text-center absolute top-5 left-1/4 hero-banner-heading text-blue-950'
            >
             Find Your Dream Home with NRK Builder & Broker
            </h1>
            <button 
            className='px-4 py-2 text-medium absolute bottom-3 bg-blue-950 rounded text-white cursor-pointer hero-button'
            >
             <Link
             to="/cards"
             >
              View Properties
             </Link>
              </button>
       <img
       className='w-full hero-banner'
        src={nrkbanner} alt="hero-banner-img" />
    </div> 
    </>
  )
}

export default Home