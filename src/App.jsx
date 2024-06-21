import { Outlet } from 'react-router-dom'
import './App.css'
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
