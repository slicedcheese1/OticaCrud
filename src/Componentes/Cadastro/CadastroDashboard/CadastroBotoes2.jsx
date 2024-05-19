import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";



const CadastroBotoes2 = () => {
  return (
    <div className='container-dashboard'>
        <a href='/Sistema/CadastroUsuario/' className="card-opt">
          <h4>Cadastro de usuário</h4>
          <MdPeopleAlt className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo usuário do seu sistema</p>
        </a>
        <a href='/Sistema/ClienteBusca/' className="card-opt">
          <h4>Cadastro fornecedores</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo fornecedor para seu sistema</p>
        </a>
    </div>
  )
}

export default CadastroBotoes2