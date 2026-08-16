import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import AllStudents from './pages/AllStudents'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

function App(){
  return(
    <>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allstudents" element={<AllStudents/>}/>
      </Routes>
</>
)
}

export default App
