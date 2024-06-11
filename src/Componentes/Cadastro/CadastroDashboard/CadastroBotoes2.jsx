import React from 'react';
import { MdPeopleAlt} from "react-icons/md";
import { FaSearch } from "react-icons/fa";
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
      />
      <Botao
        titulo="Funcionários"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/funcionário/"
      />
      <Botao
        titulo="Médicos/Optometristas"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Grifes"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Grupos"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Fornecedores"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Formas de pagamento"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Técnicos"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Material"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Tratamento"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Unidades"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Origens do cliente"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
      <Botao
        titulo="Etapas de Ordens de Serviço"
        text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
        Icon={FaSearch}
        link="/Sistema/médicos/"
      />
    </div>
  );
}

export default CadastroBotoes2;
