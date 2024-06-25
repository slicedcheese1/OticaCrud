import React from 'react';
import { MdPeopleAlt} from "react-icons/md";
import {FaSearch } from "react-icons/fa";
import Botao from './Botao';
import './CadastroBotoes2.css';

const CadastroBotoes2 = () => {
  return (
    <div className='container-dashboard'>
      <Botao
        titulo="Empresa/Loja"
        text="Clique aqui se deseja cadastrar um novo usuário do seu sistema"
        Icon={MdPeopleAlt}
        link="/Sistema/lojas/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
         titulo="Funcionários (OK)"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/funcionario/"
        iconColor="" // Definindo a cor do ícone
      />

      <Botao
        titulo="Grifes"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/grifes/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Grupos"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Fornecedores"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/fornecedores/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Formas de pagamento"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
         
      <Botao
        titulo="Convênios"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/convenios/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Unidades"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Origem do cliente"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/origem-cliente/"
        iconColor="" // Definindo a cor do ícone
      />
    
       <Botao
        titulo="Cargos (OK) "
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/setor/"
        iconColor="" // Definindo a cor do ícone
      />
        <Botao
        titulo="Etapas de Ordens de Serviço (FAZER DEPOIS)"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
    </div>
  );
}

export default CadastroBotoes2;
