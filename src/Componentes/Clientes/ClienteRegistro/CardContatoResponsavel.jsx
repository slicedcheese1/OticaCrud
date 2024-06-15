import React from 'react';
import { FaTrash } from "react-icons/fa";

import './CardContatoClienteRegistro.css'

import ClienteContext from '../../../Pages/Clientes/ClinteContext';

function CardContatoResponsavel() {

  const {
    showingCardResponsavel, setCardResponsavel,
    nomeResponsavel, setNomeResponsoavel,
    numeroResponsavel, setNumeroResponsavel
   } = React.useContext(ClienteContext);


   function deletarCard(){
    setCardResponsavel(false);
   }

   return (
    <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        <h4>Dados do Responsável</h4>
        <div className="label-trash">
          <label htmlFor="nome">Nome do responsável</label>

        </div>
        <input type="text" name="nome"  
            value={nomeResponsavel} 
            onChange={(e) => {setNomeResponsoavel(e.target.value)}} 
            onBlur = {() => {salvarEmails(nomeResponsavel)}}
        />
        <div className="column-flex-box">
            <label htmlFor="nome">Numero do responsável</label>
            <input type="text" name="nome"  
                value={numeroResponsavel} 
                onChange={(e) => {setNumeroResponsavel(e.target.value)}} 
                onBlur = {() => {salvarEmails(numeroResponsavel)}}
            />
        </div>
      </div>
      
    </div>
  </>
)
  }
  
  export default CardContatoResponsavel