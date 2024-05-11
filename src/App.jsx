import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'

function App() {
  

  return (
    <>
     <Sidebar/>
     <div> <Outlet/> </div>
    </>
  )
}

export default App
