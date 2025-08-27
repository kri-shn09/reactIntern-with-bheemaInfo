
import { StudentProvider } from './Context.jsx'
import StudentList from './Pages/StudentList.jsx'
import EditStudent from './Pages/EditStudent.jsx'
import AddStudent from './Pages/AddStudent.jsx'
import NavBar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <StudentProvider>
      <NavBar />
    <Outlet />
    </StudentProvider>
  )
}

export default App
