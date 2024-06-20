import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
