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
        link="/Sistema/CadastroUsuario/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Funcionários"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/funcionário/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Médicos/Optometristas"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/medicos/"
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
        link="/Sistema/médicos/"
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
        titulo="Tipos de material"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/material/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Tratamento"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/tratamento/"
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
        titulo="Origens do cliente"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
      <Botao
        titulo="Etapas de Ordens de Serviço"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
        iconColor="" // Definindo a cor do ícone
      />
       <Botao
        titulo="Cargos (OK) "
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/setor/"
        iconColor="" // Definindo a cor do ícone
      />
    </div>
  );
}

export default CadastroBotoes2;
