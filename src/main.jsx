import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ClienteBusca from './Pages/Clientes/ClienteBusca.jsx'
import ClienteCadastro from './Pages/Clientes/ClienteCadastro.jsx'
import ClienteDashboard from './Pages/Clientes/ClienteDashboard.jsx'
import Login from './Pages/Login/Login.jsx'
import Sistema from './Sistema.jsx'
import CadastroDashboard from './Pages/Cadastro/CadastroDashboard.jsx'
import CadastroUsuario from './Pages/Cadastro/CadastroUsuario.jsx'




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
          path: "/Sistema/Clientes",
          element: <ClienteDashboard/>
        },
        {
          path: "/Sistema/ClienteCadastro",
          element: <ClienteCadastro/>
        },
        {
          path: "/Sistema/ClienteBusca",
          element: <ClienteBusca/>
        },
        {
          path: "/Sistema/Cadastros",
          element: <CadastroDashboard/>
        },
        {
          path: "/Sistema/CadastroUsuario",
          element: <CadastroUsuario/>
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
  <RouterProvider router = {router} />
)

