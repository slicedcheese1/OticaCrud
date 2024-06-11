import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
//import Clientes from './Pages/ClienteCadastro.jsx';
import ClienteBusca from './Pages/Clientes/ClienteBusca.jsx';
import ClienteCadastro from './Pages/Clientes/ClienteCadastro.jsx';
import ClienteDashboard from './Pages/Clientes/ClienteDashboard.jsx';
import Login from './Pages/Login/Login.jsx';
import Sistema from './Sistema.jsx';
import './index.css';
import CadastroDashboard from './Pages/Cadastro/CadastroDashboard.jsx';
import CadastroBotoes2 from './Componentes/Cadastro/CadastroDashboard/CadastroBotoes2.jsx';
import CadastroUsuario from './Pages/Cadastro/CadastroUsuario.jsx';
import ClienteUpdate from './Pages/Clientes/ClienteUpdate.jsx';
import Funcionário from './Componentes/Cadastro/Funcionários/Funcionário.jsx';
import CadastroFuncionários from './Componentes/Cadastro/Funcionários/CadastroFuncionários.jsx';
import CadastroSetor from './Pages/Cadastro/CadastroSetor.jsx';
import Setor from './Pages/Setor/Setor.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Sistema',
        element: <Sistema />,
        children: [
          {
            path: '/Sistema/Clientes',
            element: <ClienteDashboard />
          },
          {
            path: '/Sistema/ClienteCadastro',
            element: <ClienteCadastro />
          },
          {
            path: '/Sistema/ClienteBusca',
            element: <ClienteBusca />
          },
          {
            path: '/Sistema/Cadastros',
            element: <CadastroDashboard/>
          },
          {
            path: '/Sistema/CadastroUsuario',
            element: <CadastroUsuario /> //(())
          },
          {
            path: '/Sistema/ClienteBusca/:id',
            element: <ClienteUpdate /> //(())
          },
          {
            path: '/Sistema/cadastro-setor',
            element: <CadastroSetor /> //(())
          },
          {
            path: '/Sistema/setor',
            element: <Setor /> //(())
          },
          //========================================================== Funcionários ==========================================================================
          {
            path: '/Sistema/funcionário',
            element: <Funcionário/>
          },
          {
            path: '/Sistema/CadastroFuncionário',
            element: <CadastroFuncionários/>
          },
          //========================================================== Relatórios ==========================================================================
        ]
      },
      {
        path: '/Login',
        element: <Login />
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
