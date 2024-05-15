import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Clientes from './Pages/ClienteCadastro.jsx'
import ClienteBusca from './Pages/ClienteBusca.jsx'
import ClienteCadastro from './Pages/ClienteCadastro.jsx'
import ClienteDashboard from './Pages/Cliente.jsx'
import Login from './Componentes/UsuárioCadastro/Login.jsx'
import Cadastros from './Pages/Cadastros.jsx'
import Sistema from './Sistema.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
       path: "/Sistema",
       element: <Sistema/>,
       children:[
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
        {
          path: "/Cadastros",
          element: <Cadastros/>
        },
        
       ]
      },
      
      {
        path: "/Login",
        element: <Login/>
      },
      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

