import Botao from '../../Componentes/Cadastro/CadastroDashboard/Botao';
import styles from './CadastroDashboard.module.css';

import { BsBuilding } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsEyeglasses } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { BsBoxes } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { GoGear } from "react-icons/go";


const CadastroDashboard = () => {
  return (
    <div  className="formContainer">
      <h2>Cadastros</h2>
      <hr/>
      <div className={styles.containerDashboard}>
        <Botao
          titulo="Empresa/Loja"
          text="Clique aqui se deseja cadastrar um novo usuário do seu sistema"
          Icon={BsBuilding}
          link="/Sistema/lojas/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Funcionários"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsPerson}
          link="/Sistema/funcionario/"
          iconColor="" // Definindo a cor do ícone
        />

        <Botao
          titulo="Grifes"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsEyeglasses}
          link="/Sistema/grifes/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Grupos"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsPeople}
          link="/Sistema/médicos/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Fornecedores"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsBox2}
          link="/Sistema/fornecedores/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Formas de pagamento"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsCreditCard2Back}
          link="/Sistema/médicos/"
          iconColor="" // Definindo a cor do ícone
        />
          
        <Botao
          titulo="Convênios"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsFileText}
          link="/Sistema/convenios/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Unidades"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsBoxes}
          link="/Sistema/unidades/"
          iconColor="" // Definindo a cor do ícone
        />
        <Botao
          titulo="Origem do cliente"
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsShare}
          link="/Sistema/origem-cliente/"
          iconColor="" // Definindo a cor do ícone
        />
      
        <Botao
          titulo="Cargos  "
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={BsPersonVcard}
          link="/Sistema/setor/"
          iconColor="" // Definindo a cor do ícone
        />
          <Botao
          titulo="Etapas de Ordens de Serviço "
          text="Clique aqui se deseja cadastrar um novo funcionário para sua empresa"
          Icon={GoGear}
          link="/Sistema/médicos/"
          iconColor="" // Definindo a cor do ícone
        />
      </div>
    </div>
  );
}

export default CadastroDashboard;
