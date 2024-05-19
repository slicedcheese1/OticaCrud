import React from 'react'

import './CardContatoClienteRegistro.css'
import { useState } from 'react'

import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const CardContatoEmailClienteRegistro = () => {

  const [email, setEmail] = useState("")

  const {
    emails , setEmails, 
   } = React.useContext(ClienteContext);
  
  return (
        <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        <label for="email">Email</label>
        <input type="text" name="email"  value={email} onChange={(e) => {
          setEmail(e.target.value)
          } } />
        <button onClick={ (e) => {
          e.preventDefault()
          setEmails([...emails, email])}
          }>Salvar</button>
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
