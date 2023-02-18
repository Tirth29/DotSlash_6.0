import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './Authentication'
import AuthContext from './context/auth-context'
import SideBar from './Sidebar'

function App() {
  const authContext = useContext(AuthContext);

  // if (authContext.isLoggedIn) {
  //   return (
  //     <Routes>
  //       <Route path="/signup" element={<Authentication isSignUp={true} />} />
  //       <Route path="/signin" element={<Authentication isSignUp={false} />} />
  //       <Route path="*" element={<Navigate replace to="/signup" />} />
  //     </Routes>
  //   )
  // } else {
  //   return (
  //     <Routes>
  //       <Route path='/dashboard' />
  //     </Routes>
  //   )
  // }

  return (
    <>
      {
        authContext.isLoggedIn ?
          <Routes>
            <SideBar />
            <Route path='/dashboard' element={"Dashboard"} />
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>
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
