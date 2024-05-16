import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const CadastroBotoes = () => {
  return (
    <div className='container-dashboard'>
        <a href='/Sistema/CadastroUsuario/' className="card-opt">
          <h4>Usuário</h4>
          <MdPeopleAlt className='icon-people'/>
        </a>
        <a href='/Sistema/CadastroUsuario/' className="card-opt">
          <h4>Funcionário</h4>
          <FaSearch className='icon-lupa'/>
        </a>
        <a href='/clienteBusca/' className="card-opt">
          <h4>Fornecedor</h4>
          <FaSearch className='icon-lupa'/>
        </a>
        <a href='/clienteBusca/' className="card-opt">
          <h4>Lojas</h4>
          <FaSearch className='icon-lupa'/>
        </a>
    </div>
  )
}

export default CadastroBotoes