import React from 'react'
import { FaTrash } from "react-icons/fa";

import './CardContatoClienteRegistro.css'
import { useState } from 'react'

import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const CardContatoEmailClienteRegistro = ({id}) => {

  const [email, setEmail] = useState("")

  
  const {
    cardEmail, setCardEmail,
    emails , setEmails, 
   } = React.useContext(ClienteContext);
  
   function deletarCard(id){
    setCardEmail(cardEmail.filter(card => card.id !== id));
   }

   function salvarEmails(email){

    setEmails([...emails, email])
   } 

  return (
        <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
      <div className="label-trash">
          <label htmlFor="telefone">Email</label>
          <FaTrash className='trash-icon'
          onClick={() => deletarCard(id)}
          />
        </div>
        <input type="text" name="email"  
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}} 
        onBlur = {() => {salvarEmails(email)}}
        />
      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal"  />
          <label for="numero-principal">Principal</label>
        </div>
      </div>
    </div>
      </>
  )
}

export default CardContatoEmailClienteRegistro
