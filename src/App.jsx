import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
