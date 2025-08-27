
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  const paraText = `Our school is a place of learning,growth, and inspiration where every child is encouraged to achieve their full potential.
   We provide quality education through a balanced curriculum that combines academics, sports, arts, 
   and co-curricular activities. With dedicated teachers, modern facilities, and a nurturing environment,
    we focus on developing not only knowledge but also values such as discipline, respect, and teamwork.
     Our mission is to prepare students to become confident,
               responsible, and compassionate individuals ready to face the challenges of the future.`

  return (
    <>
    <div className="w-full">
     <Header home="Home" about="About" contact="Contact" />
     <HeroSection head="Welcome To SATYAM School" subTitle="Shaping Bright Futures"
      btn="Enroll now" />
     <About paraContent={paraText} />
     <Footer gmail="gupxxxxx@gmail.com" phone="74xxxxxx59" address="102,Old Palasia Indore 452001"/>
     </div>
    </>
  )
}

export default App
