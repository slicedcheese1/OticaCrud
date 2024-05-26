import React from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import styles from './ClienteBotoes.module.css'; // Importando estilos do módulo CSS

const ClienteBotoes = () => {
  return (
    <div className={styles['container-dashboard']}>
      <a href='/Sistema/CadastroUsuario/' className={styles['card-opt']}>
        <h4>Cadastro de clientes</h4>
        <MdPeopleAlt className={styles['icon-people']}/>
      </a>
      <a href='/Sistema/ClienteBusca/' className={styles['card-opt']}>
        <h4>Busca de clientes</h4>
        <FaSearch className={styles['icon-lupa']}/>
      </a>
    </div>
  );
}

export default ClienteBotoes;
