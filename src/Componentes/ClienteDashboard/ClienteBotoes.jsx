import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import './ClienteBotoes.css'

const ClienteBotoes = () => {
  return (
    <div className='container-dashboard'>
        <div className="card-opt">
          <h4>Cadastro de clientes</h4>
          <MdPeopleAlt className='icon-people'/>
          <a href='/clienteCadastro/'><button className='card-bt'>Cadastro de Clientes</button></a>
        </div>
        <div className="card-opt">
          <h4>Busca de clientes</h4>
          <FaSearch className='icon-lupa'/>
          <a href='/clienteBusca/'><button className='card-bt'>Busca de Clientes</button></a>
        </div>
    </div>
  )
}

export default ClienteBotoes
