import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import SigninAccount from './components/SigninAccount.jsx'
import LoginPage from './components/LoginPage.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import SignupPage from './components/SignupPage.jsx';
import About from './components/About.jsx';

const routers = createBrowserRouter(
     createRoutesFromElements(
      <Route path="/" element={< App />}>
        <Route path="" element={<About />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<SigninAccount />} />
      </Route>
     )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
