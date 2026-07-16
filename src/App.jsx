import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login  from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import ChangePaswword from './pages/ChangePaswword'
import Setting from './pages/Setting'
import ProtectedRoute from './pages/ProtectedRoute'
function App() {

  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path='/changepassword' element={<ChangePaswword/>}/>
      <Route path='/setting' element={<Setting/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
