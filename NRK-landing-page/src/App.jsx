
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>
  )
}

export default App
