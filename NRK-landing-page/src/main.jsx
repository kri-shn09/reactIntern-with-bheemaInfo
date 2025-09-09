import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Cards from './Components/Cards.jsx'
import Footer from './Components/Footer.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
     <Route path="" element={<Home />} />
     <Route path="cards" element={<Cards  />} />
     <Route path="footer" element={<Footer />}  />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
