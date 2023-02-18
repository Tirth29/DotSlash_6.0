import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './Authentication'
import AuthContext from './context/auth-context'
import SideBar from './Sidebar'
import Subject  from './components/MySubject'
import Navbar from './Navbar'
import Attendance from './components/MySubject'
import TodoList from './components/ToDo'
import SubjectPage from './subjectPage'

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
                <Route path='/subjects' element={<Subject />} />
                <Route path='/subjectPage' element={<SubjectPage />} />
                <Route path="*" element={<Navigate replace to="/dashboard" />} />
                <Route path="/attendance" element={<Attendance/>} />
                <Route path="/todo" element={<TodoList/>} />
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
