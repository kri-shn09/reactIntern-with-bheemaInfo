
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { ProvideContext } from './Context'

function App() {

  return (
    <>
    <ProvideContext >
      <Header />
      <Outlet />
      <Footer />
    </ProvideContext>
    </>
  )
}

export default App
