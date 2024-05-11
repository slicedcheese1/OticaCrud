import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Clientes from './Pages/Cliente.jsx'
import ClienteBusca from './Pages/ClienteBusca.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3 - Pagina de Erro
    children: [
      {
        path: "/Clientes",
        element: <Clientes/>
      },
      {
        path: "/Sexo",
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

