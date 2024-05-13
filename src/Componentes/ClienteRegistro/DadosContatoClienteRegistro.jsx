import React from 'react'
import {useState} from 'react'

import './DadosContatoClienteRegistro.css'
import CardContatoClienteRegistro from './CardContatoClienteRegistro'

const DadosContatoClienteRegistro = () => {

  const [cardTel, setCardTel] = useState([])

  const handleTipoClienteChange = (event) => {
    setTipoCliente(event.target.value);

    if (tipoCliente === 'pessoa-juridica') {
      setCardVisible(true)

    } else {
      setCardVisible(false)
    }
    console.log(cardVisible)

  };

  return (
       <>
      <div className="card">
        <h3> Dados de Contato</h3>
        <hr/>
          <div className="card-all-infos">
            <div className="card-name-button">
              <h4 className='card-name'>Telefones</h4>
              <div className="add-button-back">
                <h5 className='add-button'>Adicionar</h5>
              </div>
            </div>
            <hr />
            <div className="card-infos">
              <CardContatoClienteRegistro/>
            </div>
          </div>

      </div>
      </>
  )
}

export default DadosContatoClienteRegistro
