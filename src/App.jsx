import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './Authentication'
import AuthContext from './context/auth-context'
import SideBar from './Sidebar'
import Subject  from './components/MySubject'
import Navbar from './Navbar'

function App() {
  const authContext = useContext(AuthContext);

  return (
    <>
      {
        authContext.isLoggedIn ?
          <>
            <SideBar />
            <div className='flex flex-col w-4/5'>
              <Navbar />
              <Routes>
                <Route path='/dashboard' element={"Dashboard"} />
                <Route path='/todo' element={"Todo"} />
                <Route path='/subjects' element={<Subject />} />
                <Route path="*" element={<Navigate replace to="/dashboard" />} />
              </Routes>
            </div>
          </>
          :
          <Routes>
            <Route path="/signup" element={<Authentication isSignUp={true} />} />
            <Route path="/signin" element={<Authentication isSignUp={false} />} />
            <Route path="*" element={<Navigate replace to="/signup" />} />
          </Routes>
      }
    </>
  )
}

export default App
