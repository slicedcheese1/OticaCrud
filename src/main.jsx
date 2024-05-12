import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Clientes from './Pages/ClienteCadastro.jsx'
import ClienteBusca from './Pages/ClienteBusca.jsx'
import ClienteCadastro from './Pages/ClienteCadastro.jsx'
import ClienteDashboard from './Pages/Cliente.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3 - Pagina de Erro
    children: [
      {
        path: "/Clientes",
        element: <ClienteDashboard/>
      },
      {
        path: "/ClienteCadastro",
        element: <ClienteCadastro/>
      },
      {
        path: "/ClienteBusca",
        element: <ClienteBusca/>
      },
      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

