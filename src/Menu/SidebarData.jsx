import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

 export const SidebarData = [
  {
    title: 'Painel',
    path: '/Sistema/Painel',
    icon: <IoIcons.IoMdHelpCircle  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  {
    title: 'Clientes',
    path: '/Sistema/Clientes',
    icon: <IoIcons.IoMdHelpCircle  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  {
    title: 'Produtos',
    path: '/Sistema/produtos',
    icon: <IoIcons.IoMdHelpCircle  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Promoções',
    path: '/Sistema/products',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    title: 'Ordens de Serviço',
    path: '/Sistema/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Vendas',
    path: '/Sistema/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Estoque',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Financeiro',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    title: 'Cadastros',
    path: 'Sistema/Cadastros',
    icon: <IoIcons.IoMdHelpCircle  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  { 
    title: 'Relatórios',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    
    title: 'Configurações',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    
    title: 'Chat',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    
    title: 'Central de ajuda',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  },
  {
    
    title: 'Sair',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle  />
  }
];

