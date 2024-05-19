import React from 'react'

import './CardContatoClienteRegistro.css'
import ReactInputMask from 'react-input-mask'

import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const CardContatoClienteRegistro = (isTelCard) => {

  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  const {
    emails ,adicionarEmail, 
    telefones, adicionarTelefone, 
    habilitarSms, setHabilitarSms, 
    habilitarWhatsapp, setHabilitarWhatsapp,
   } = React.useContext(ClienteContext);
  
  return (
        <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        {isTelCard && (
          <>
            <label for="telefone">Número</label>
            <input mask={"(99) 99999-9999"} type="tel" name="telefone" id="telefone" value={telefone} onChange={(e) => {
              adicionarTelefone(e.target.value)
              setTelefone(e.target.value)

            }} />
          </>
        )} 
        {isTelCard === false && (
          <>
            <label for="email">Email</label>
            <input type="text" name="email"  value={email} onChange={(e) => {
              adicionarEmail(e.target.value)
              setEmail(e.target.value)
              } } />
          </>
        )}
      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal"  />
          <label for="numero-principal">Principal</label>
        </div>

        {isTelCard  &&
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
        }
      </div>
    </div>
      </>
  )
}

export default CardContatoClienteRegistro
