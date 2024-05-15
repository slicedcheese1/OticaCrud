import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <div>
        <h1>adada</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App;
