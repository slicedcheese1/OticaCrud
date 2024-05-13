import React from 'react'
import {useState} from 'react'

import './DadosContatoClienteRegistro.css'
import CardContatoClienteRegistro from './CardContatoClienteRegistro'

const DadosContatoClienteRegistro = () => {

  const [cardTel, setCardTel] = useState([])

  const handleCardContatoAdd = (event) => {
    setCardTel([...cardTel, <CardContatoClienteRegistro/>]);
  };

  return (
       <>
      <div className="card">
        <h3> Dados de Contato</h3>
        <hr/>
          <div className="card-all-infos">
            <div className="card-name-button">
              <h4 className='card-name'>Telefones</h4>
              <button onClick={handleCardContatoAdd} className="add-button-back">
                <h5 className='add-button'>Adicionar</h5>
              </button>
            </div>
            <hr />
            <div className="card-infos">
              <ul className='card-list'>
                {cardTel.map( card => (
                  <li key={card} >{card}</li>
                ))}
              </ul>
            </div>
          </div>

      </div>
      </>
  )
}

export default DadosContatoClienteRegistro
