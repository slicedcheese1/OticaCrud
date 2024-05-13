import React from 'react'

import './CardContatoClienteRegistro.css'


const CardContatoClienteRegistro = () => {
  return (
        <>
    <form className="cardTel">
      <div className="num-box">
        <label htmlFor="">Número</label>
        <input  type="tel" name="telefone" id="telefone" />
      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" id="numero-principal" />
          <label htmlFor="">Principal</label>
        </div>
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" id="numero-principal" />
          <label htmlFor="">Habilitar envio de sms</label>
        </div>
        <div className="preferences-2">
          <input type="checkbox" name="numero-principal" id="numero-principal" />
          <label htmlFor="">Habilitar envio de WhatsApp</label>
        </div>
      </div>
    </form>
      </>
  )
}

export default CardContatoClienteRegistro
