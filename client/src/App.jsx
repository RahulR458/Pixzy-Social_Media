// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/Login'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Changepassword from './pages/Changepassword'
import Otp from './pages/Otp'
import Resetpassword from './pages/Resetpassword'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      {/* <Login /> */}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/change-password' element={<Changepassword />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/reset-password' element={<Resetpassword />} />
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App
