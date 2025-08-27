
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import bgImage from './components/bgImage.jpg'

function App() {

  return (
    <>
     <Header home="Home" card="Card" contact="Contact" />
     <HeroSection />
     <Card heading="My Cart" cardImg={bgImage} />
     <Footer phone="74xxxxx59" gmail="k@gmail.com" address="Old palasia indore"/>
    </>
  )
}

export default App
