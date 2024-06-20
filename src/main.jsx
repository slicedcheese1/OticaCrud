import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './DarkMode/DarkModeTheme';
import './DarkMode/DarkModeTheme.css';

//import Clientes from './Pages/ClienteCadastro.jsx';
import ClienteBusca from './Pages/Clientes/ClienteBusca.jsx';
import ClienteCadastro from './Pages/Clientes/ClienteCadastro.jsx';
import ClienteDashboard from './Pages/Clientes/ClienteDashboard.jsx';
import Login from './Pages/Login/Login.jsx';
import Sistema from './Sistema.jsx';
import './index.css';
import CadastroDashboard from './Pages/Cadastro/CadastroDashboard.jsx';
<<<<<<< Updated upstream
import CadastroUsuario from './Pages/Cadastro/CadastroUsuario.jsx';
import ClienteUpdate from './Pages/Clientes/ClienteUpdate.jsx';


import Setor from './Pages/Setor/Setor.jsx';
import CadastroDeSetor from './Pages/Setor/CadastroDeSetor.jsx';
import EditarSetor from './Pages/Setor/EditarSetor.jsx';
import Dashboardadmin from './Pages/PaineldeInformações/Dashboardadmin.jsx';
import EditarGrife from './Pages/Grifes/EditarGrife.jsx';
import CadastroGrifes from './Pages/Grifes/CadastroGrifes.jsx';
import Grifes from './Pages/Grifes/Grifes.jsx';
import CadastroMedicos from './Pages/Médicos/CadastroMedicos.jsx';
import Medicos from './Pages/Médicos/Medicos.jsx';
import EditarMedico from './Pages/Médicos/EditarMedico.jsx';
import Material from './Pages/Tipos de material/Material.jsx';
import CadastroMaterial from './Pages/Tipos de material/CadastroMaterial.jsx';
import EditarMaterial from './Pages/Tipos de material/EditarMaterial.jsx';
import Funcionario from './Pages/Funcionarios/Funcionario.jsx';
import CadastroFuncionario from './Pages/Funcionarios/CadastroFuncionario.jsx';
import Tratamento from './Pages/Tratamentos/Tratamento.jsx';
import CadastroTratamento from './Pages/Tratamentos/CadastroTratamento.jsx';
import EditarTratamento from './Pages/Tratamentos/EditarTratamento.jsx';

=======
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Sistema',
        element: <Sistema />,
        children: [
          //========================================================== Painel de Informação ========================================================================
          {
            path: '/Sistema/',
            element: <Dashboardadmin />
          },
          //========================================================== Grifes =======================================================================
          {
            path: '/Sistema/grifes',
            element: <Grifes />
          },
          {
            path: '/Sistema/cadastro-grifes',
            element: <CadastroGrifes />
          },
          {
            path: '/Sistema/editar-grifes',
            element: <EditarGrife />
          },
          //========================================================== Material ======================================================================
          {
            path: '/Sistema/material',
            element: <Material />
          },
          {
            path: '/Sistema/cadastrar-material',
            element: <CadastroMaterial />
          },
          {
            path: '/Sistema/editar-material',
            element: <EditarMaterial />
          },
          //========================================================== Medicos =======================================================================
          {
            path: '/Sistema/medicos',
            element: <Medicos/>
          },
          {
            path: '/Sistema/medico-cadastro',
            element: <CadastroMedicos />
          },
          {
            path: '/Sistema/editar-medico',
            element: <EditarMedico />
          },
          //========================================================== Painel de Informação =======================================================================
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
<<<<<<< Updated upstream
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
          //========================================================== Cargos ==========================================================================
          {
            path: '/Sistema/editar-setor/:id',
            element: <EditarSetor/> //(())
          },
          {
            path: '/Sistema/cadastro-setor',
            element: <CadastroDeSetor /> //(())
          },
          {
            path: '/Sistema/setor',
            element: <Setor /> //(())
          },
          //========================================================== Funcionários ==========================================================================
          {
            path: '/Sistema/funcionario',
            element: <Funcionario/>
          },
          {
            path: '/Sistema/cadastro-funcionario',
            element: <CadastroFuncionario/>
          },
          //========================================================== Tratamento ==========================================================================
          {
            path: '/Sistema/tratamento',
            element: <Tratamento/>
          },
          {
            path: '/Sistema/cadastro-tratamento',
            element: <CadastroTratamento/>
          },
          {
            path: '/Sistema/editar-tratamento',
            element: <EditarTratamento/>
=======
            element: <CadastroDashboard />
>>>>>>> Stashed changes
          },
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
