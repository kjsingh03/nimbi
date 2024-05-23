import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <div className="screen hidden z-[49] w-screen h-screen fixed top-0 left-0">
      </div>
      <Outlet />
    </>
  )
}

export default App
