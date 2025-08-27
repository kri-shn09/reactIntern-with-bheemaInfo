import '../App.css'
import schoolImg from './schoolphoto.jpg'

function About({paraContent}) {
  return (
    <>
     <h1
    className="text-2xl font-medium text-center"
    >About</h1>

    <div
    className="w-full my-2 py-10 px-5 flex justify-evenly items-center"
    >
    <div className="text-con">
        <p>{paraContent}</p>
    </div>
    <div className="img-con">
        <img src={schoolImg} alt="School img" />
    </div>

    </div>

    </>
  )
}

export default About