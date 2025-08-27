import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import StudentList from './Pages/StudentList'
import EditStudent from './Pages/EditStudent'
import AddStudent from './Pages/AddStudent'

  const route = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />} >
          <Route path="" element={<StudentList />} />
          <Route path="EditStudent" element={<EditStudent />} />
          <Route path="EditStudent/:id" element= {<EditStudent />} />
          <Route path="AddStudent" element={<AddStudent />} />
          </Route>
        )
      )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
