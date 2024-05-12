import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'

function App() {

  return (
    <>
    
    <Sidebar/>
    <div className='Container'>
      <Outlet/> 
    </div>
    
     
    </>
  )
}

export default App
