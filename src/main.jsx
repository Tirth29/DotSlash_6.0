import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './context/auth-context'
import { SubjectsContextProvider } from './context/subjects-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SubjectsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SubjectsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
