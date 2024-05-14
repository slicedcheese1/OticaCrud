import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {setSidebar(!sidebar);};

  return (
    <>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      <div className={`container ${sidebar ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
    </>
  )
}

export default App;
