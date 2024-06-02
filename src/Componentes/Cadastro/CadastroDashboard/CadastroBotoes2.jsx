import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import "./CadastroBotoes2.css";

const CadastroBotoes2 = () => {
  return (
    <div className='container-dashboard'>
        <a href='/Sistema/CadastroUsuario/' className="card-opt">
          <h4>Cadastro de usuário</h4>
          <MdPeopleAlt className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo usuário do seu sistema</p>
        </a>
        <a href='/Sistema/funcionário/' className="card-opt">
          <h4>Cadastro funcionários</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
    </div>
  )
}

export default CadastroBotoes2