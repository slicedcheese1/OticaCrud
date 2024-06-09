import React from 'react';

import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import ReactInputMask from 'react-input-mask';

import './DadosPessoaisClienteRegistro.css'

import ClienteContext from '../../../Pages/Clientes/ClinteContext';

import { useState } from 'react';

function CardContatoResponsavel() {

  const {
    nomeResponsavel, setNomeResponsoavel,
    numeroResponsavel, setNumeroResponsavel
   } = React.useContext(ClienteContext);




   return (
    <>
<div className="cardTel" id="form-contato" method="post">
  <div className="num-box">
    <h3>Dados do Responsável</h3>
    <div className="label-trash">
      <label htmlFor="nome">Nome do responsável</label>
      <FaTrash className='trash-icon'
      onClick={() => deletarCard(id)}
      />
    </div>
    <input type="text" name="nome"  
        value={nomeResponsavel} 
        onChange={(e) => {setNomeResponsoavel(e.target.value)}} 
        onBlur = {() => {salvarEmails(nomeResponsavel)}}
    />
    <div className="label-trash">
        <label htmlFor="nome">Nome do responsável</label>
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
  
  export default DadosPessoaisClienteRegistro