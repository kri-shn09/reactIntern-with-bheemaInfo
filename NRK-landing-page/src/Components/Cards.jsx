import { useContext, useEffect, useState } from 'react'
import '../App.css'
import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import home3 from './images/home3.jpg'
import { UserContext } from '../Context'

function Cards() {

   const {userVal} = useContext(UserContext)

     const propertyData = [
    {id:1 ,title:"Dream Homes", price:'10000000' , location : "Mumbai", image:home1},
    {id:2 ,title:"Dream Homes", price:'20000000 ',location : "Delhi", image:home2},
    {id:3 ,title:"Dream Homes", price:'5000000' , location : "Indore", image:home3} 
   ]

   const [filteredData , setFilteredData] = useState(propertyData);

  
  useEffect(() => {
    if (userVal.trim() === "") {
      setFilteredData(propertyData) // show all if nothing typed
    } else {
      setFilteredData(
        propertyData.filter((p) =>
          p.location.toLowerCase().includes(userVal.toLowerCase()) ||
          p.price.includes(userVal)
        )
      )
    }
  }, [userVal])

  return (
    <div className="w-full flex px-8 py-5 justify-evenly items-center mt-25 gap-10">
      {filteredData.length > 0 ? (
        filteredData.map((property) => (
          <ul key={property.id} className="w-1/3 card-con shadow-md rounded-lg p-3">
            <li className="w-full h-80">
              <img
                className="w-full h-80 object-cover rounded-lg"
                src={property.image}
                alt="home-img"
              />
            </li>

            <li>
              <h3 className="text-center font-medium my-3 text-xl">{property.title}</h3>
            </li>

            <p className="text-center font-semibold shadow-black para gap-2">
              <i className="fas fa-rupee-sign"></i> {property.price.toLocaleString()}
              {property.price >= 10000000 && <i className="fas fa-gem ml-2 text-blue-500"></i>}
            </p>

            <p className="text-center font-medium my-3">
              <i className="fas fa-map-pin"></i> {property.location}
            </p>
          </ul>
        ))
      ) : (
        <p className="text-center text-lg font-semibold text-gray-500">No properties found</p>
      )}
    </div>
  )
}

export default Cards