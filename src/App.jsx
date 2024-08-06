import { Outlet } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <ToastContainer/>
        <Outlet/>
    </>
  )
}

export default App;
