import React from 'react'

import './CardContatoClienteRegistro.css'
import ReactInputMask from 'react-input-mask'


const CardContatoClienteRegistro = (isTelCard) => {
  const [numerosTelefone, setNumerosTelefone] = useState([])
  const [email, setEmails] = useState([])

  return (
        <>
    <div className="cardTel" id="form-contato" method="post">
      <div className="num-box">
        {isTelCard && (
          <>
            <label for="telefone">Número</label>
            <input mask={"(99) 99999-9999"} type="tel" name="telefone" id="telefone" />
          </>
        )} 
        {isTelCard === false && (
          <>
            <label for="email">Email</label>
            <input type="text" name="email" />
          </>
        )}
      </div>
      <div className="preferences">
        <div className="preferences-1">
          <input type="checkbox" name="numero-principal" />
          <label for="numero-principal">Principal</label>
        </div>

        {isTelCard  &&
        <div>
          <div className="preferences-1">
            <input type="checkbox" name="numero-principal" />
            <label for="envio-sms">Habilitar envio de sms</label>
          </div>
          <div className="preferences-2">
            <input type="checkbox" name="envio-wpp"  />
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
