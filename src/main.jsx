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
          }
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
