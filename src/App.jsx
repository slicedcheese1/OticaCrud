import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
