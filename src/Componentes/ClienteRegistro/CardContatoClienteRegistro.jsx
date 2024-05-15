import React from 'react'

import './CardContatoClienteRegistro.css'
import ReactInputMask from 'react-input-mask'


const CardContatoClienteRegistro = () => {
  return (
        <>
    <form className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        <label for="telefone">Número</label>
        <ReactInputMask mask={"(99) 99999-9999"} type="tel" name="telefone" id="telefone" />
      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" />
          <label for="numero-principal">Principal</label>
        </div>
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" />
          <label for="envio-sms">Habilitar envio de sms</label>
        </div>
        <div className="preferences-2">
          <input type="checkbox" name="envio-wpp"  />
          <label htmlFor="envio-wpp">Habilitar envio de WhatsApp</label>
        </div>
      </div>
    </form>
      </>
  )
}

export default CardContatoClienteRegistro
