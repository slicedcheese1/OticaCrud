import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import './ClienteBotoes.css'

const ClienteBotoes = () => {
  return (
    <div className='container-dashboard'>
        <a href='/Sistema/ClienteCadastro/' className="card-opt">
          <h4>Cadastro de clientes</h4>
          <MdPeopleAlt className='icon-people'/>
        </a>
        <a href='/Sistema/ClienteBusca/' className="card-opt">
          <h4>Busca de clientes</h4>
          <FaSearch className='icon-lupa'/>
        </a>
    </div>
  )
}

export default ClienteBotoes
