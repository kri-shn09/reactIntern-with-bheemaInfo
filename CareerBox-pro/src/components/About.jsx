import { useState } from 'react';
import '../cssfiles/about.css';
import office from './images/office.jpg'

function About() {

   const aboutContent = [

    { 
      id: 1,
      title : "What We Are",
      content :  ` Bheema Infotech is an IT Firm located in Central India, we deals in IT projects
       related to Web portal development, Enterprise portal development, Block chain.
       We provide Mobile App design and development for your business, B2B, B2C,
       as well as we supporting your business through your ideas into realistic.`
    }
    ,

     {
      id:2,
      title : "What We Provide",
      content:   `We provide best Web and Mobile Solutions for Startups, Enterprises / Entrerpreneur and
     other Businesses! Our Digital media and SEO Expert will provide
      you best solution in increasing your business.`
     }
   ,

    {
      id:3,
      title: "Our Vision",
      content: `Bheema Infotech Provide The Complete IT Solutions Which Leads Our Customers To
     Use Advanced Technologies With Amenities. We Work In Coordination With Our Customers
     So As To Stand Side By Side For The Virtual Extensions Of Their Operations. We Add
      Value To Their Web-Front-End Solutions, Back-End Solutions To 
      Enhance The Automation Of Their Entire Business Operations`
    }
   ]

    const [openBox,setOpenBox] = useState(null)


    const handleToggle = (id)=>{
      setOpenBox(openBox === id ? null : id)
    }

  return (
    <div 
    className='w-full  flex justify-center items-center'
    >
     <div 
     className="w-full h-auto flex justify-center items-center sub-con"
     >

        <div className="w-1/2 h-130 "
        >
            <img 
            className='w-full h-130'
            src={office} alt="persons-image" />
        </div>

        <div className="w-1/2 px-25 py-4 box-border">
            <h1
            className='text-3xl font-bold text-gray-800'
            >WHY CHOOSE US
            </h1> 
            <h1
            className='text-4xl text-gray-600 my-4'
            >
              Know More About Our Company
            </h1>

            <p
             className='font-medium text-gray-400'
             >
             Bheema Infotech is an IT Firm located in Central India, we deals in IT projects
       related to Web portal development, Enterprise portal development, Block chain.
       We provide Mobile App design and development for your business, B2B, B2C,
       as well as we supporting your business through your ideas into realistic.
            </p>

            {
              aboutContent.map((val , index)=>{
                 return(

                   <div key={val.id}
                   className="w-full h-auto bg-white my-4 py-5 px-5 rounded "
                   >
                    <div className="w-full h-auto cursor-pointer text-gray-700 hover:text-blue-600 !important"
                    onClick={()=>handleToggle(val.id)}
                    >
                     <span
                     className='font-medium  '
                     >
                      {val.title}
                     </span>
                     <i  className={`fas fa-sort-down float-end transition-transform duration-300 ${
                    openBox === val.id ? 'rotate-180' : ''
                  }`}></i>
                   </div>

                   {openBox === val.id && (
                <div className='w-full mt-3 '>
                  <p className="text-gray-500">{val.content}</p>
                </div>
              )}
                   </div>

                 )
              })
            }

        </div>

     </div>
    </div>
  )
}

export default About