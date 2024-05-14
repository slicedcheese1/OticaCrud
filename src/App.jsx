import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import './App.css'
import { useState } from 'react'

function App() {
  // define estado da sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {setSidebar(!sidebar);};

  // ln 15 - apenas 'container' se 'sidebar' estiver fechado, caso contrario, classe tambem chamada de 'sidebar-open'(para o css)
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
