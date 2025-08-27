import '../App.css'


function Card({heading,cardImg}) {
    const myArr = [0,1,2,3,4,5];
  return (
    <div 
    className='w-full h-auto px-10 py-5 flex justify-between items-center flex-wrap'
    >
        {
            myArr.map((_ , i)=>{
                return(
                <div
                key={i}
                 className=" h-auto card-main-con flex justify-center
                  items-center flex-col p-5 ">
                   <h1 className='font-medium '>{heading}</h1>
                   <div className="w-100 h-70 ">
                    <img
                    className='w-100 h-70 my-5'
                     src={cardImg} alt="" />
                   </div>
                   <button
                   className='px-4 py-2 btn-card mt-10 rounded font-medium cursor-pointer'
                   >Buy Now</button>
                </div>
                )
            })
        
        }
    </div>
  )
}

export default Card