import React from 'react'
import './CardContatoClienteRegistro.css'
import { useState, useContext } from 'react'
import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const CardContatoTelefoneClienteRegistro = () => {

  const [telefone, setTelefone] = useState("")

  const {
    numerosTelefone, setTelefones, 
    habilitarSms, setHabilitarSms, 
    habilitarWhatsapp, setHabilitarWhatsapp,
   } = React.useContext(ClienteContext);
  
  return (
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        <label htmlFor="telefone">Número</label>
        <input mask={"(99) 99999-9999"} type="tel" name="telefone" id="telefone" value={telefone} onChange={(e) => {
          setTelefone(e.target.value)
        }} />
        <button onClick={ (e) => {
          e.preventDefault()
          setTelefones([...numerosTelefone, telefone])}
          }>Salvar</button>

      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" />
          <label htmlFor="numero-principal">Principal</label>
        </div>
        <div className="preferences-2">
          <input type="checkbox" name="envio-sms" onClick={() => { setHabilitarSms(!habilitarSms) }} />
          <label htmlFor="envio-sms">Habilitar envio de sms</label>
        </div>
        <div className="preferences-3">
          <input type="checkbox" name="envio-wpp" onClick={() => { setHabilitarWhatsapp(!habilitarWhatsapp) }} />
          <label htmlFor="envio-wpp">Habilitar envio de WhatsApp</label>
        </div>
      </div>
    </div>
  );
}

export default CardContatoTelefoneClienteRegistro;
