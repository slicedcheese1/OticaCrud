import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import "./CadastroBotoes2.css";

const CadastroBotoes2 = () => {
  return (
    <div className='container-dashboard'>
        <a href='/Sistema/CadastroUsuario/' className="card-opt">
          <h4>Empresa/Loja</h4>
          <MdPeopleAlt className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo usuário do seu sistema</p>
        </a>
        <a href='/Sistema/funcionário/' className="card-opt">
          <h4>Funcionários</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Médicos/Optometristas</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Grifes</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Grupos</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Fornecedores</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
        <p>
        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Formas de pagamento</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
      </p>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Técnicos</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Material</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Tratamento</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
         
        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Unidades</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Origens do cliente</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>

        <a href='/Sistema/médicos/' className="card-opt">
          <h4>Etapas de Ordens de Serviço</h4>
          <FaSearch className='icon-people'/>
          <p>Clique aqui se deseja cadastrar um novo funcionário para sua empresa</p>
        </a>
        

        
    </div>
  )
}

export default CadastroBotoes2