import React, { useState } from 'react';
import './DadosContatoClienteRegistro.css';
import CardContatoTelefoneClienteRegistro from './CardContatoTelefoneClienteRegistro';
import CardContatoEmailClienteRegistro from './CardContatoEmailClienteRegistro';

const DadosContatoClienteRegistro = () => {
  const [cardTel, setCardTel] = useState([]);
  const [cardEmail, setCardEmail] = useState([]);
  
  const addTel = (event) => {
    event.preventDefault();
    setCardTel([...cardTel, { id: cardTel.length, component: <CardContatoTelefoneClienteRegistro key={cardTel.length} /> }]);
  };

  const addEmail = (event) => {
    event.preventDefault();
    setCardEmail([...cardEmail, { id: cardEmail.length, component: <CardContatoEmailClienteRegistro key={cardEmail.length} /> }]);
  };
   
  return (
    <div className="card">
      <h3>Dados de Contato</h3>
      <hr/>
      <div className="card-all-infos">
        <div className="card-name-button">
          <h4 className='card-name'>Telefone</h4>
          <button onClick={addTel} className="add-button-back">
            <h5 className='add-button'>Adicionar</h5>
          </button>
        </div>
        <hr />
        <div className="card-infos">
          <ul className='card-list'>
            {cardTel.map(card => (
              <li key={card.id} className='card-list-item'>{card.component}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-all-infos">
        <div className="card-name-button">
          <h4 className='card-name'>Email</h4>
          <button onClick={addEmail} className="add-button-back">
            <h5 className='add-button'>Adicionar</h5>
          </button>
        </div>
        <hr />
        <div className="card-infos">
          <ul className='card-list'>
            {cardEmail.map(card => (
              <li key={card.id} className='card-list-item'>{card.component}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DadosContatoClienteRegistro;
