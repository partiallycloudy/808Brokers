import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import SideBar from './Components/SideBar/SideBar'
import Conference from './Components/Conference/Conference'

const App = () => {
  return (
    <>
     <Routes>
      
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/conference" element={<Conference />} />
    </Routes>
      {/* <SideBar/> */}
    </>
  )
}

export default App
