import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';

const routers = createBrowserRouter(
     createRoutesFromElements(
      <Route path="/" element={< App />}>
        <Route path="" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
     )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
