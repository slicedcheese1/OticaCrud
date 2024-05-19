import React from 'react'

import './CardContatoClienteRegistro.css'
import { useState } from 'react'

import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const CardContatoTelefoneClienteRegistro = () => {

  const [telefone, setTelefone] = useState("")

  const {
    telefones, setTelefones, 
    habilitarSms, setHabilitarSms, 
    habilitarWhatsapp, setHabilitarWhatsapp,
   } = React.useContext(ClienteContext);
  
  return (
        <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        <label for="telefone">Número</label>
        <input mask={"(99) 99999-9999"} type="tel" name="telefone" id="telefone" value={telefone} onChange={(e) => {
          setTelefone(e.target.value)
        }} />
        <button onClick={ (e) => {
          e.preventDefault()
          setTelefones([...telefones, telefone])}
          }>Salvar</button>

      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal"  />
          <label for="numero-principal">Principal</label>
        </div>
        <div>
          <div className="preferences-1">
            <input type="checkbox" name="numero-principal" onClick= {() => {setHabilitarSms}} />
            <label for="envio-sms">Habilitar envio de sms</label>
          </div>
          <div className="preferences-2">
            <input type="checkbox" name="envio-wpp" onClick= {() => {setHabilitarWhatsapp}} />
            <label htmlFor="envio-wpp">Habilitar envio de WhatsApp</label>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default CardContatoTelefoneClienteRegistro
