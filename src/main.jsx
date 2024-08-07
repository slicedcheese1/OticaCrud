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

import Unidades from './Pages/Unidades/Unidades.jsx';
import CadastroUnidade from './Pages/Unidades/CadastroUnidade.jsx';
import EditarUnidade from './Pages/Unidades/EditarUnidade.jsx';

import OrigemCliente from './Pages/Origem.jsx/OrigemCliente.jsx';
import CadastroOrigemCliente from './Pages/Origem.jsx/CadastroOrigemCliente.jsx';
import EditarOrigemCliente from './Pages/Origem.jsx/EditarOrigemCliente.jsx';

import Cargos from './Pages/Cargo/Cargos.jsx';
import CadastroCargo from './Pages/Cargo/CadastroCargo.jsx';
import EditarCargo from './Pages/Cargo/EditarCargo.jsx';

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

import Fornecedores from "./Pages/Fornecedores/Fornecedores.jsx";
import CadastroFornecedores from "./Pages/Fornecedores/CadastroFornecedores.jsx";
import EditarFornecedores from './Pages/Fornecedores/EditarFornecedores.jsx';

import Lojas from './Pages/Lojas/Lojas.jsx';
import CadastroLoja from './Pages/Lojas/CadastroLoja.jsx';
import EditarLoja from './Pages/Lojas/EditarLoja.jsx';

import Promocao from './Pages/Promocao/Promocao.jsx';
import CadastroGrupos from './Pages/Grupos/CadastroGrupos.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Produtos from './Pages/Produtos/Produtos.jsx';
import HistoricoProdutos from './Pages/Produtos/HistóricoProdutos.jsx';
import CadastroProdutos from './Pages/Produtos/CadastroProdutos.jsx';
import EditarProdutos from './Pages/Produtos/EditarProdutos.jsx';

import { MessageProvider } from './Context/MessageContext.jsx'; // Import MessageProvider

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
          //========================================================== Lojas =======================================================================
          {
            path: '/Sistema/lojas',
            element: <Lojas />
          },
          {
            path: '/Sistema/cadastro-loja',
            element: <CadastroLoja />
          },
          {
            path: '/Sistema/editar-loja/:id',
            element: <EditarLoja />
          },
          //========================================================== Funcionários ==========================================================================
          {
            path: '/Sistema/funcionario',
            element: <Funcionario />
          },
          {
            path: '/Sistema/cadastro-funcionario',
            element: <CadastroFuncionario />
          },
          {
            path: '/Sistema/editar-funcionario',
            element: <EditarFuncionario />
          },
          //========================================================== Grifes =======================================================================
          {
            path: '/Sistema/grifes',
            element: <Grifes />
          },
          {
            path: '/Sistema/cadastrar-grife',
            element: <CadastroGrifes />
          },
          {
            path: '/Sistema/editar-grife/:id',
            element: <EditarGrife />
          },
          //========================================================== Grupos ==========================================================================
          {
            path: '/Sistema/Grupos',
            element: <CadastroGrupos />
          },
          //========================================================== Fornecedores ==================================================================
          {
            path: '/Sistema/fornecedores',
            element: <Fornecedores />
          },
          {
            path: '/Sistema/cadastro-fornecedores',
            element: <CadastroFornecedores />
          },
          {
            path: '/Sistema/editar-fornecedores',
            element: <EditarFornecedores />
          },
          //========================================================== Unidades =======================================================================
          {
            path: '/Sistema/unidades',
            element: <Unidades />
          },
          {
            path: '/Sistema/cadastrar-unidade',
            element: <CadastroUnidade />
          },
          {
            path: '/Sistema/editar-unidade/:id',
            element: <EditarUnidade />
          },

          //========================================================== Origem do cliente =============================================================
          {
            path: '/Sistema/origem-cliente',
            element: <OrigemCliente />
          },
          {
            path: '/Sistema/cadastrar-origem-cliente',
            element: <CadastroOrigemCliente />
          },
          {
            path: '/Sistema/editar-origem-cliente/:id',
            element: <EditarOrigemCliente />
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
            element: <Medicos />
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
            element: <CadastroDashboard />
          },
          //========================================================== Cargo ==========================================================================
          {
            path: '/Sistema/Cargos',
            element: <Cargos /> //(())
          },
          {
            path: '/Sistema/cadastrar-cargo',
            element: <CadastroCargo /> //(())
          },
          {
            path: '/Sistema/editar-cargo/:id',
            element: <EditarCargo /> //(())
          },

          //========================================================== Tratamento ==========================================================================
          {
            path: '/Sistema/tratamento',
            element: <Tratamento />
          },
          {
            path: '/Sistema/cadastro-tratamento',
            element: <CadastroTratamento />
          },
          {
            path: '/Sistema/editar-tratamento',
            element: <EditarTratamento />
          },
          //========================================================== PRODUTOS ==========================================================================
          {
            path: '/Sistema/produtos',
            element: <Produtos />
          },
          {
            path: '/Sistema/editar-produto',
            element: <EditarProdutos />
          },
          {
            path: '/Sistema/cadastrar-produto',
            element: <CadastroProdutos />
          },
          {
            path: '/Sistema/historico-produto',
            element: <HistoricoProdutos />
          },

          //========================================================== Promoções ==========================================================================
          {
            path: '/Sistema/Promocao',
            element: <Promocao />
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
      <MessageProvider>
        <RouterProvider router={router} />
      </MessageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
