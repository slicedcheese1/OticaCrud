import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './DarkMode/DarkModeTheme';
import './DarkMode/DarkModeTheme.css';
import './index.css';

import Login from './Pages/Login/Login.jsx';
import Sistema from './Sistema.jsx';
import Dashboardadmin from './Pages/PaineldeInformações/Dashboardadmin.jsx';

import Clientes from './Pages/Clientes/Clientes.jsx';
import ClienteCadastro from './Pages/Clientes/ClienteCadastro.jsx';
import ClienteDashboard from './Pages/Clientes/ClienteDashboard.jsx';

import CadastroDashboard from './Pages/Cadastro/CadastroDashboard.jsx';
import ClienteUpdate from './Pages/Clientes/ClienteUpdate.jsx';

import OrigemCliente from './Pages/Origem.jsx/OrigemCliente.jsx';
import CadastroOrigemCliente from './Pages/Origem.jsx/CadastroOrigemCliente.jsx';
import EditarOrigemCliente from './Pages/Origem.jsx/EditarOrigemCliente.jsx';

import Setor from './Pages/Setor/Setor.jsx';
import CadastroDeSetor from './Pages/Setor/CadastroDeSetor.jsx';
import EditarSetor from './Pages/Setor/EditarSetor.jsx';

import Grifes from './Pages/Grifes/Grifes.jsx';
import CadastroGrifes from './Pages/Grifes/CadastroGrifes.jsx';
import EditarGrife from './Pages/Grifes/EditarGrife.jsx';

import Medicos from './Pages/Médicos/Medicos.jsx';
import CadastroMedicos from './Pages/Médicos/CadastroMedicos.jsx';
import EditarMedico from './Pages/Médicos/EditarMedico.jsx';

import Material from './Pages/Tipos de material/Material.jsx';
import CadastroMaterial from './Pages/Tipos de material/CadastroMaterial.jsx';
import EditarMaterial from './Pages/Tipos de material/EditarMaterial.jsx';

import Funcionario from './Pages/Funcionarios/Funcionario.jsx';
import CadastroFuncionario from './Pages/Funcionarios/CadastroFuncionario.jsx';
import EditarFuncionario from './Pages/Funcionarios/EditarFuncionario.jsx';

import Tratamento from './Pages/Tratamentos/Tratamento.jsx';
import CadastroTratamento from './Pages/Tratamentos/CadastroTratamento.jsx';
import EditarTratamento from './Pages/Tratamentos/EditarTratamento.jsx';

import Fornecedores from "./Pages/Fornecedores/Fornecedores.jsx"
import CadastroFornecedores from "./Pages/Fornecedores/CadastroFornecedores.jsx"
import EditarFornecedores from './Pages/Fornecedores/EditarFornecedores.jsx';

import Lojas from './Pages/Lojas/Lojas.jsx'
import CadastroLojas from './Pages/Lojas/CadastroLojas.jsx'
import EditarLojas from './Pages/Lojas/EditarLojas.jsx'

import Promocao from './Pages/Promocao/Promocao.jsx';
import CadastroGrupos from './Pages/Grupos/CadastroGrupos.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import Produtos from './Pages/Produtos/Produtos.jsx';
import HistoricoProdutos from './Pages/Produtos/HistóricoProdutos.jsx';
import CadastroProdutos from './Pages/Produtos/CadastroProdutos.jsx';
import EditarProdutos from './Pages/Produtos/EditarProdutos.jsx';



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
            path: '/Sistema/cadastrar-grife',
            element: <CadastroGrifes/>
          },
          {
            path: '/Sistema/editar-grife/:id',
            element: <EditarGrife/>
          },
          //========================================================== Lojas =======================================================================
          {
            path: '/Sistema/lojas',
            element: <Lojas/>
          },
          {
            path: '/Sistema/cadastro-loja',
            element: <CadastroLojas />
          },
          {
            path: '/Sistema/editar-loja',
            element: <EditarLojas />
          },
          //========================================================== Origem do cliente =============================================================
          {
            path: '/Sistema/origem-cliente',
            element: <OrigemCliente />
          },
          {
            path: '/Sistema/cadastro-origem-cliente',
            element: <CadastroOrigemCliente />
          },
          {
            path: '/Sistema/editar-origem-cliente',
            element: <EditarOrigemCliente/>
          },
          //========================================================== Fornecedores ==================================================================
          {
            path: '/Sistema/fornecedores',
            element: <Fornecedores />
          },
          {
            path: '/Sistema/cadastro-fornecedores',
            element: <CadastroFornecedores/>
          },
          {
            path: '/Sistema/editar-fornecedores',
            element: <EditarFornecedores />
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
          //========================================================== Clientes =======================================================================

          {
            path: '/Sistema/ClientesDashboard',
            element: <ClienteDashboard />
          },
          {
            path: '/Sistema/clientes',
            element: <Clientes />
          },
          {
            path: '/Sistema/cadastrar-cliente',
            element: <ClienteCadastro />
          },
          {
            path: '/Sistema/editar-cliente/:id',
            element: <ClienteUpdate /> //(())
          },
          //========================================================== Painel de Informação =======================================================================
          {
            path: '/Sistema/Cadastros',
            element: <CadastroDashboard/>
          },
          //========================================================== Setor ==========================================================================
          {
            path: '/Sistema/setor',
            element: <Setor /> //(())
          },
          {
            path: '/Sistema/cadastro-setor',
            element: <CadastroDeSetor /> //(())
          },
          {
            path: '/Sistema/editar-setor/:id',
            element: <EditarSetor/> //(())
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
          {
            path: '/Sistema/editar-funcionario',
            element: <EditarFuncionario/>
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

          },
           //========================================================== PRODUTOS ==========================================================================
           {
            path: '/Sistema/produtos',
            element: <Produtos/>
          },
          {
            path: '/Sistema/editar-produto',
            element: <EditarProdutos/>
          },
          {
            path: '/Sistema/cadastrar-produto',
            element: <CadastroProdutos/>
          },
          {
            path: '/Sistema/historico-produto',
            element: <HistoricoProdutos/>
          },
           //========================================================== Grupos ==========================================================================
          {
            path: '/Sistema/Grupos',
            element: <CadastroGrupos/>
          },
          //========================================================== Promoções ==========================================================================
          {
            path: '/Sistema/Promocao',
            element: <Promocao/>
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
